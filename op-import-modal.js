/* ════════════════════════════════════════════════════════════
   IMPORT MODAL — shared logic
   Used by: free-mode.html · level-mode.html
   Requires: op-engine.js (parseForumBlock, parseForumValid,
             reverseEngineer, applyImport, ALL, META, D)
════════════════════════════════════════════════════════════ */

let _mParsed  = null;
let _mMode    = 'free';   // set by initImportModal()
let _imported = false;    // track if user already imported

/* ── INIT ─────────────────────────────────────────────────── */
function initImportModal(mode) {
  _mMode = mode;
}

/* ── EDIT MODE TOGGLE ─────────────────────────────────────── */
function setEditMode(m) {
  if (m === 'chr') {
    openImportModal();
  } else {
    // Switch back to NPC — just update UI, keep stats
    _setBadge('npc');
  }
}

function _setBadge(m) {
  const nb = document.getElementById('em-npc');
  const cb = document.getElementById('em-chr');
  const bd = document.getElementById('editModeBadge');
  if (nb) nb.classList.toggle('on', m === 'npc');
  if (cb) cb.classList.toggle('on', m === 'chr');
  if (bd) {
    bd.textContent = m === 'npc' ? 'NPC' : 'Personaje';
    bd.className   = m === 'npc' ? 'edit-mode-badge' : 'edit-mode-badge chr';
  }
}

/* ── OPEN / CLOSE ─────────────────────────────────────────── */
function openImportModal() {
  // populate race selector
  const rs = document.getElementById('mRaceSelect');
  if (rs) {
    rs.innerHTML = Object.keys(D.races).map(r =>
      `<option value="${r}"${r === S.race ? ' selected' : ''}>${r}</option>`
    ).join('');
  }
  // reset paste state
  const ta = document.getElementById('mPaste');
  if (ta) { ta.value = ''; ta.className = 'm-paste'; }
  _setStatus('idle');
  document.getElementById('mPreview')?.classList.remove('show');
  document.getElementById('mExtraWarn')?.classList.remove('show');
  const btn = document.getElementById('mConfirmBtn');
  if (btn) btn.disabled = true;
  _mParsed = null;

  document.getElementById('importModal')?.classList.add('open');
  setTimeout(() => ta?.focus(), 80);
}

function closeModal(e) {
  // clicked backdrop
  document.getElementById('importModal')?.classList.remove('open');
  if (!_imported) _setBadge('npc');   // revert toggle if nothing imported
}

function closeModalBtn() {
  document.getElementById('importModal')?.classList.remove('open');
  if (!_imported) _setBadge('npc');
}

/* ── STATUS HELPER ────────────────────────────────────────── */
function _setStatus(state, text) {
  const el = document.getElementById('mStatus');
  if (!el) return;
  el.className = 'm-status' + (state === 'ok' ? ' ok' : state === 'err' ? ' err' : '');
  const txt = text || (state === 'idle' ? 'Esperando datos...' : '');
  el.innerHTML = `<div class="m-status-dot"></div><span class="m-status-txt">${txt}</span>`;
}

/* ── PASTE HANDLER ────────────────────────────────────────── */
function onModalPaste(raw) {
  const ta = document.getElementById('mPaste');
  if (!raw.trim()) {
    ta.className = 'm-paste';
    _setStatus('idle');
    document.getElementById('mPreview')?.classList.remove('show');
    document.getElementById('mConfirmBtn').disabled = true;
    _mParsed = null;
    return;
  }

  _mParsed = parseForumBlock(raw);

  if (parseForumValid(_mParsed)) {
    ta.className = 'm-paste valid';
    const n = _mParsed.name ? `"${_mParsed.name}"` : 'Personaje';
    const c = Object.keys(_mParsed.stats).length;
    _setStatus('ok', `${n} detectado · Nv${_mParsed.level} · ${c} stats`);
    document.getElementById('mConfirmBtn').disabled = false;
    onModalRecalc();
  } else {
    ta.className = 'm-paste error';
    _setStatus('err', 'No se puede leer el bloque. Incluye el nivel y al menos dos stats.');
    document.getElementById('mPreview')?.classList.remove('show');
    document.getElementById('mConfirmBtn').disabled = true;
  }
}

/* ── RECALC PREVIEW ───────────────────────────────────────── */
function onModalRecalc() {
  if (!_mParsed || !parseForumValid(_mParsed)) return;

  const race = document.getElementById('mRaceSelect')?.value || S.race;
  const { breakdown, pool, usedFree, extraTotal } = reverseEngineer(_mParsed, race);

  // stat grid
  const grid = document.getElementById('mPrevGrid');
  if (grid) {
    grid.innerHTML = ALL.map(stat => {
      const b = breakdown[stat];
      const hasX = b.extra > 0;
      const parts = [];
      if (b.free)  parts.push(`+${b.free}L`);
      if (b.extra) parts.push(`+${b.extra}X`);
      return `<div class="m-prev-stat${hasX ? ' has-extra' : ''}">
        <div class="m-prev-key">${META[stat].icon} ${stat}</div>
        <div class="m-prev-val">${b.total}</div>
        <div class="m-prev-sub">${parts.join(' ') || '—'}</div>
      </div>`;
    }).join('');
  }

  // pool bar
  const pct = pool > 0 ? Math.min(100, (usedFree / pool) * 100) : 0;
  const pt  = document.getElementById('mPoolTxt');
  const pf  = document.getElementById('mPoolFill');
  if (pt) pt.textContent  = `${usedFree} / ${pool}`;
  if (pf) pf.style.width  = pct + '%';

  // extra warning
  const ew = document.getElementById('mExtraWarn');
  if (ew) {
    if (extraTotal > 0) {
      const names = ALL.filter(s => breakdown[s].extra > 0)
                       .map(s => `${s}: +${breakdown[s].extra}`).join(' · ');
      ew.innerHTML = `Bonos extra detectados (+${extraTotal} pts) que superan el cap de nivel. Se asignaran como "Extra Bonus" en el editor: ${names}.`;
      ew.classList.add('show');
    } else {
      ew.classList.remove('show');
    }
  }

  document.getElementById('mPreview')?.classList.add('show');
}

/* ── CONFIRM ──────────────────────────────────────────────── */
function confirmImport() {
  if (!_mParsed || !parseForumValid(_mParsed)) return;
  const race = document.getElementById('mRaceSelect')?.value || S.race;

  applyImport(_mParsed, race, _mMode);
  saveState();

  // update UI
  const nameEl = document.getElementById('charName');
  if (nameEl) nameEl.value = S.name;
  const lvlEl  = document.getElementById('levelInput');
  if (lvlEl)  lvlEl.value  = S.level;
  const rsEl   = document.getElementById('raceSelect');
  if (rsEl)   rsEl.value   = S.race;
  const slEl   = document.getElementById('startLvlInput');
  if (slEl)   slEl.value   = S.startLevel;

  _imported = true;
  document.getElementById('importModal')?.classList.remove('open');
  _setBadge('chr');

  renderAll();
  toast(`${S.name || 'Personaje'} importado correctamente`);
  _imported = false;   // reset for next session
}
