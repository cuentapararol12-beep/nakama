const EMBEDDED = {
  "version":"3.2",
  "rules":{"baseStatMain":3,"baseStatPower":0,"freePointsPerLevel":46,"autoGainPerLevelMain":3},
  "mainAttributes":["FUE","RES","DES","PRE","AGI","REF","INT","VOL"],
  "powerAttributes":["CH","CA"],
  "attributesMeta":{
    "FUE":{"label":"Fuerza","icon":""},"RES":{"label":"Resistencia","icon":""},
    "DES":{"label":"Destreza","icon":""},"PRE":{"label":"Precisión","icon":""},
    "AGI":{"label":"Agilidad","icon":""},"REF":{"label":"Reflejos","icon":""},
    "INT":{"label":"Inteligencia","icon":""},"VOL":{"label":"Voluntad","icon":""},
    "CH":{"label":"C. de Haki","icon":""},"CA":{"label":"C. de Akuma","icon":""}
  },
  "thresholds":[
    {"index":1,"name":"Umbral I",  "desc":"Se interrumpen acciones que requieren concentracion","color":"#a8ff78"},
    {"index":2,"name":"Umbral II", "desc":"Se interrumpen acciones que requieren carga o concentracion","color":"#ffd060"},
    {"index":3,"name":"Umbral III","desc":"Se interrumpen todas las acciones y mantenimientos en curso","color":"#ff9a3c"},
    {"index":4,"name":"Umbral IV", "desc":"Se cortan los Hakis. Desorientacion + Confusion durante 1/2 post","color":"#ff4d4d"},
    {"index":5,"name":"Umbral V",  "desc":"Se cortan tambien las transformaciones de Akuma no Mi","color":"#ff0040"}
  ],
  "deathThresholds":{
    "VIT":{"unconscious_short":"VIT entra negativa sin superar -VOL: inconsciente 10 turnos o hasta proximo tema",
           "unconscious_long":"VIT <= -VOL: inconsciente irrecuperable para ese tema y el proximo dia onrol",
           "death":"VIT <= -2xVOL: MUERTE"},
    "ENE":{"unconscious_short":"ENE entra negativa sin superar -RES: inconsciente 5 turnos","death":"ENE <= -RES: MUERTE"},
    "ESP":{"unconscious_short":"ESP entra en valor negativo: inconsciente 3 turnos","death":"ESP <= -(ceil(VOL/2)): MUERTE"},
    "utility":"Si VIT baja del 5% del total: todos los stats -90%, sin oficios ni karmas hasta estabilizarse"
  },
  "races":{
    "Humano":           {"stats":{"VOL":20,"INT":5},"notas":["Tirada extra en caso de fallar Haoshoku."]},
    "Gyojin":           {"stats":{"FUE":15,"AGI":15},"notas":["+15 extra de AGI y FUE si completamente sumergidos.","Pueden respirar bajo el agua."]},
    "Gigante":          {"stats":{"RES":30,"FUE":30,"AGI":-15},"notas":["Cargan doble peso.","Recorren doble distancia."]},
    "Gigante Ancestral":{"stats":{"RES":45,"FUE":45,"AGI":-20},"notas":["+10% danio elemental recibido.","Triple peso y distancia.","Karma Berserk."]},
    "Sirenas/Tritones": {"stats":{"AGI":0},"notas":["+60 AGI en el agua.","Inercia en el agua.","Respiran bajo el agua."]},
    "Skypiean":         {"stats":{"INT":25,"REF":5},"notas":["Nivel 5: +2 diales gratis."]},
    "Mink":             {"stats":{"FUE":5,"RES":5,"AGI":5,"REF":5},"notas":["Nivel 8: Electro.","Sulong en luna llena."]},
    "Tontatta":         {"stats":{"AGI":25,"FUE":25,"RES":5,"INT":-10},"notas":["Inercia con mitad de requisitos.","Karma Peso Pluma."]},
    "Lunarian":         {"stats":{},"level_bonus":[{"level":1,"stat":"RES","value":25},{"level":6,"stat":"AGI","value":25}],"notas":["Vuelo — Velocidad: AGI total + 50.","Nivel 11: +25 a RES o AGI (manual)."]},
    "Oni":              {"stats":{"RES":25,"FUE":20},"notas":["Estado: Furia (1 vez por tema)."]},
    "Kuja":             {"stats":{"VOL":15,"CH":10},"notas":["Karma Mascota (Serpiente Lily)."]},
    "Birkaniano":       {"stats":{"INT":15},"notas":["Impulso alas: +10 AGI por movimiento/turno.","Salto +3m."]},
    "Gran Mink":        {"stats":{"FUE":15,"RES":15},"notas":["Nivel 10: Electro."]},
    "Gran Oni":         {"stats":{"FUE":25,"RES":25,"AGI":-5},"notas":["En combate siempre en Furia."]},
    "Gran Triton":      {"stats":{"RES":20,"FUE":20,"AGI":-15},"notas":["+30 AGI sumergidos.","Respiran bajo el agua."]},
    "Gyontatta":        {"stats":{"AGI":20,"FUE":20,"INT":-5},"notas":["+10 AGI y FUE sumergidos.","Respiran bajo el agua."]},
    "Humink":           {"stats":{"VOL":10,"FUE":5,"RES":5},"notas":[]},
    "Mestizo":          {"stats":{"VOL":10,"FUE":5,"AGI":5},"notas":["+10 FUE y AGI bajo el agua.","Respiran bajo el agua."]},
    "Semigigante":      {"stats":{"VOL":10,"FUE":15,"RES":20},"notas":["Cargan doble peso."]},
    "Semioni":          {"stats":{"RES":15,"FUE":10,"VOL":10},"notas":["Estado: Furia (1 vez por tema)."]},
    "Tontatton":        {"stats":{"INT":-5,"AGI":15,"FUE":15,"VOL":10},"notas":["Inercia con mitad de requisitos."]},
    "Wotan":            {"stats":{"FUE":20,"RES":20,"INT":-15},"notas":["+20 AGI sumergidos.","Respiran bajo el agua.","Gyojin Karate +20%.","Doble peso."]},
    "Buccaneer":{
      "stats":{"RES":30,"FUE":10,"VOL":5},
      "threshold_bonus":[
        {"level":1,"value":150,"label":"Base"},{"level":10,"value":300,"label":"Nv10+"},{"level":25,"value":500,"label":"Nv25+"}
      ],
      "notas":["Pasiva 'Cuerpo Extranio': para matarte hay que DUPLICAR el Umbral V.",
               "+150 pts planos a todos los umbrales (siempre activo).",
               "Nivel 10+: +300 pts adicionales acumulables.",
               "Nivel 25+: +500 pts adicionales acumulables.",
               "Altura: 4-6 metros. Espacio en barco: 3."]
    }
  }
};

/** Si falla one-piece-data.json (p. ej. file://), el motor sigue resolviendo pasivos y situacionales. */
const KARMA_ENGINE_FALLBACK = {
  tuerto: { statEffects: [{ stat: 'REF', delta: -50 }, { stat: 'PRE', delta: -50 }] },
  ciego: { statEffects: [{ stat: 'REF', delta: -100 }, { stat: 'PRE', delta: -100 }] },
  mal_oido: { statEffects: [{ stat: 'REF', delta: -25 }] },
  sordo: { statEffects: [{ stat: 'REF', delta: -50 }] },
  pierna_amputada: { statEffects: [{ stat: 'AGI', delta: -100 }] },
  musculos_hierro: { situationalStat: 'FUE', situationalBonus: 20 },
  dedos_oro: { situationalStat: 'DES', situationalBonus: 20 },
};

let D, RULES, MAIN, POWER, ALL, META, THRESH;
let S = null;

const mkZero = () => Object.fromEntries(ALL.map(s => [s, 0]));

function mkState() {
  return {
    name       : 'Sin nombre',
    race       : Object.keys(D.races)[0],
    level      : 1,
    mode       : 'free',
    editMode   : 'npc',
    theme      : 'pink',
    extraBonus : mkZero(),
    freeFree   : mkZero(),
    startLevel : 1,
    bulkFree   : mkZero(),
    perLvlFree : {},
    levelCtx   : 'bulk',
    karmas     : {},
    belico: { weapons: [], techniques: [] },
  };
}

const BASE   = s       => MAIN.includes(s) ? RULES.baseStatMain : RULES.baseStatPower;
const AUTO   = (s,lvl) => MAIN.includes(s) ? (lvl-1)*RULES.autoGainPerLevelMain : 0;
const MAXCAP = lvl     => lvl*10 + 50;

function raceBonus(stat, lvl) {
  const rd = D.races[S.race]; if (!rd) return 0;
  let b = rd.stats[stat] || 0;
  if (rd.level_bonus) for (const lb of rd.level_bonus)
    if (lb.stat === stat && lvl >= lb.level) b += lb.value;
  return b;
}

function getKarmaCatalog() {
  if (!D || !D.karmas) return [];
  return [...(D.karmas.positivos || []), ...(D.karmas.negativos || [])];
}
function getKarmaDefById(id) {
  if (!id) return undefined;
  const fromCat = getKarmaCatalog().find(k => k.id === id);
  if (fromCat) return fromCat;
  const fb = KARMA_ENGINE_FALLBACK[id];
  if (fb) return { id, ...fb };
  return undefined;
}
function karmaPassiveDelta(stat) {
  if (!S || !S.karmas || !stat) return 0;
  let d = 0;
  for (const id of Object.keys(S.karmas)) {
    const k = getKarmaDefById(id);
    if (!k || !k.statEffects) continue;
    for (const se of k.statEffects) {
      if (se.stat === stat) d += Number(se.delta) || 0;
    }
  }
  return d;
}
function isKarmaSelected(id) {
  return !!(S && S.karmas && Object.prototype.hasOwnProperty.call(S.karmas, id));
}
function karmaSituationalBonusForTech(tech, stat) {
  if (!tech || !stat) return 0;
  let b = 0;
  if (stat === 'FUE' && tech.applyMusculosHierro && isKarmaSelected('musculos_hierro')) {
    const k = getKarmaDefById('musculos_hierro');
    if (k && k.situationalBonus) b += Number(k.situationalBonus) || 0;
  }
  if (stat === 'DES' && tech.applyDedosOro && isKarmaSelected('dedos_oro')) {
    const k = getKarmaDefById('dedos_oro');
    if (k && k.situationalBonus) b += Number(k.situationalBonus) || 0;
  }
  return b;
}

function freePool()  { return RULES.freePointsPerLevel * S.level; }
function freeSpent() { return ALL.reduce((t,s) => t+(S.freeFree[s]||0), 0); }
function maxFreeInvest(stat) {
  const capRoom  = MAXCAP(S.level) - BASE(stat) - AUTO(stat, S.level);
  const poolRoom = freePool() - freeSpent() + (S.freeFree[stat]||0);
  return Math.max(0, Math.min(capRoom, poolRoom));
}

function bulkPool()  { return RULES.freePointsPerLevel * S.startLevel; }
function bulkSpent() { return ALL.reduce((t,s) => t+(S.bulkFree[s]||0), 0); }
function maxBulkInvest(stat) {
  const capRoom  = MAXCAP(S.startLevel) - BASE(stat) - AUTO(stat, S.startLevel);
  const poolRoom = bulkPool() - bulkSpent() + (S.bulkFree[stat]||0);
  return Math.max(0, Math.min(capRoom, poolRoom));
}

function ensureLvl(l) { if (!S.perLvlFree[l]) S.perLvlFree[l] = mkZero(); }
function totalFreeUpTo(stat, upToLvl) {
  let t = S.bulkFree[stat]||0;
  for (let l = S.startLevel+1; l <= upToLvl; l++) t += ((S.perLvlFree[l]||{})[stat]||0);
  return t;
}
function lvlSpent(lvl) { return ALL.reduce((t,s) => t+((S.perLvlFree[lvl]||{})[s]||0), 0); }
function maxLvlInvest(stat, lvl) {
  const prevFree = totalFreeUpTo(stat, lvl-1);
  const capRoom  = MAXCAP(lvl) - BASE(stat) - AUTO(stat,lvl) - prevFree;
  const poolRoom = RULES.freePointsPerLevel - lvlSpent(lvl) + ((S.perLvlFree[lvl]||{})[stat]||0);
  return Math.max(0, Math.min(capRoom, poolRoom));
}

function sliderVal(stat) {
  if (S.mode==='free')      return S.freeFree[stat]||0;
  if (S.levelCtx==='bulk') return S.bulkFree[stat]||0;
  return (S.perLvlFree[S.levelCtx]||{})[stat]||0;
}
function sliderMax(stat) {
  if (S.mode==='free')      return maxFreeInvest(stat);
  if (S.levelCtx==='bulk') return maxBulkInvest(stat);
  return maxLvlInvest(stat, S.levelCtx);
}

function effStat(stat) {
  const free = S.mode==='free' ? (S.freeFree[stat]||0) : totalFreeUpTo(stat, S.level);
  return BASE(stat) + AUTO(stat,S.level) + free + raceBonus(stat,S.level) + (S.extraBonus[stat]||0) + karmaPassiveDelta(stat);
}
/** Radar: solo visual; el valor real sigue en effStat (puede ser negativo). */
function effStatRadar(stat) {
  return Math.max(0, effStat(stat));
}
function investedPart(stat) {
  const free = S.mode==='free' ? (S.freeFree[stat]||0) : totalFreeUpTo(stat, S.level);
  return BASE(stat) + AUTO(stat,S.level) + free;
}
function atCap(stat) { return investedPart(stat) >= MAXCAP(S.level); }

function calcDerived() {
  const v = s => effStat(s), L = S.level;
  return {
    VIT: Math.round((v('FUE')*5 + v('RES')*6 + v('DES')*2 + v('AGI') + v('VOL')) * (1 + L/33.33)),
    ENE: Math.round(v('FUE')*4 + v('RES')*5 + v('DES') + v('PRE') + v('AGI') + v('REF') + v('INT')*3 + v('VOL') + v('CA')
           + Math.floor(L/10)*500 + Math.floor(L/25)*1000),
    ESP: Math.round(v('VOL')*3 + v('CH')*3 + Math.floor(L/15)*250),
  };
}

function buccBonus(lvl) {
  if (S.race!=='Buccaneer') return 0;
  return (D.races['Buccaneer'].threshold_bonus||[]).filter(t=>lvl>=t.level).reduce((s,t)=>s+t.value, 0);
}
function calcThresholds() {
  const vol=effStat('VOL'), bonusU=Math.floor(vol/150), bucc=buccBonus(S.level);
  return THRESH.map((td,i)=>({...td, mult:(i+1)+bonusU, value:((i+1)+bonusU)*vol+bucc, bonusU, bucc, vol}));
}

function ctxLabel() {
  if (S.mode==='free')      return 'Libre';
  if (S.levelCtx==='bulk') return `Bulk 1-${S.startLevel}`;
  return `Nv${S.levelCtx}`;
}

function applyStat(stat, raw) {
  const clamped = Math.max(0, Math.min(parseInt(raw)||0, sliderMax(stat)));
  if      (S.mode==='free')      S.freeFree[stat]=clamped;
  else if (S.levelCtx==='bulk') S.bulkFree[stat]=clamped;
  else { ensureLvl(S.levelCtx); S.perLvlFree[S.levelCtx][stat]=clamped; }
}

function clampFreeStats() {
  if (S.mode!=='free') return;
  for (const s of ALL) {
    const cap = MAXCAP(S.level)-BASE(s)-AUTO(s,S.level);
    S.freeFree[s] = Math.max(0, Math.min(S.freeFree[s]||0, cap));
  }
  let excess = freeSpent()-freePool();
  if (excess>0) {
    for (const s of [...ALL].sort((a,b)=>(S.freeFree[b]||0)-(S.freeFree[a]||0))) {
      const cut=Math.min(S.freeFree[s]||0,excess); S.freeFree[s]-=cut; excess-=cut;
      if (excess<=0) break;
    }
  }
}

const SAVE_KEY = 'op_build_v3';

function patchSave(d) {
  if (!d.freeFree)   d.freeFree   = mkZero();
  if (!d.extraBonus) d.extraBonus = mkZero();
  if (!d.bulkFree)   d.bulkFree   = mkZero();
  if (!d.perLvlFree) d.perLvlFree = {};
  if (!d.karmas)     d.karmas     = {};
  if (!d.belico) d.belico = { weapons: [], techniques: [] };

  if (!d.belico.weapons) d.belico.weapons = d.belico.weapon ? [d.belico.weapon] : [];
  delete d.belico.weapon;
  if (!d.belico.techniques) d.belico.techniques = [];
  (d.belico.techniques||[]).forEach(t => {
    if (!t.weaponSlots) t.weaponSlots = {};
    if (t.hasAmbi === undefined) t.hasAmbi = false;
    if (t.applyMusculosHierro === undefined) t.applyMusculosHierro = false;
    if (t.applyDedosOro === undefined) t.applyDedosOro = false;
    const wc = typeof detectWeaponSlots === 'function' ? detectWeaponSlots(t.dmgFormula || '').length : 0;
    if (wc < 2) t.hasAmbi = false;
    t.isDual = wc >= 2;
    if (typeof detectCuerpoACuerpo === 'function')
      t.isCuerpoACuerpo = detectCuerpoACuerpo(String(t._raw || '') + '\n' + String(t.effect || ''), t.reqStr || '');
    else if (t.isCuerpoACuerpo === undefined) t.isCuerpoACuerpo = false;
  });
  for (const s of ALL) {
    if (d.freeFree[s]   === undefined) d.freeFree[s]   = 0;
    if (d.extraBonus[s] === undefined) d.extraBonus[s] = 0;
    if (d.bulkFree[s]   === undefined) d.bulkFree[s]   = 0;
  }
}

function saveState() {
  const nameEl = document.getElementById('charName');
  if (nameEl) S.name = nameEl.value || S.name;
  localStorage.setItem(SAVE_KEY, JSON.stringify({v:3,...S}));
}

function loadFromStorage() {
  const raw = localStorage.getItem(SAVE_KEY);
  if (!raw) return null;
  try { const d=JSON.parse(raw); patchSave(d); return d; } catch { return null; }
}

function saveChr()  { saveState(); toast('Personaje guardado'); }
function loadChr() {
  const d=loadFromStorage();
  if (!d) { toast('Sin guardado encontrado'); return; }
  Object.assign(S,d); applyTheme(); renderRaceSelect(); renderAll(); toast('Cargado');
}
function expJSON() {
  const nameEl=document.getElementById('charName'); if (nameEl) S.name=nameEl.value||S.name;
  const a=document.createElement('a');
  a.href='data:application/json,'+encodeURIComponent(JSON.stringify({v:3,...S},null,2));
  a.download=S.name.replace(/\s+/g,'-')+'-build.json'; a.click(); toast('JSON exportado');
}
function impJSON() { document.getElementById('impFile').click(); }
function hdlImport(e) {
  const f=e.target.files[0]; if (!f) return;
  const r=new FileReader();
  r.onload=ev=>{
    try { const d=JSON.parse(ev.target.result); patchSave(d); Object.assign(S,d); applyTheme(); renderRaceSelect(); renderAll(); toast('Importado'); }
    catch { toast('JSON invalido'); }
  };
  r.readAsText(f); e.target.value='';
}
function resetChr() {
  if (!confirm('Resetear el personaje? Se perderan datos no guardados.')) return;
  const t=S.theme, m=S.mode, em=S.editMode; S=mkState(); S.theme=t; S.mode=m; S.editMode=em;
  const rs=document.getElementById('raceSelect'); if (rs) rs.value=S.race;
  renderAll(); toast('Reiniciado');
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', S.theme||'pink');
  const tb=document.getElementById('themeBtn');
  if (tb) tb.textContent = S.theme==='blue' ? 'Azul' : 'Rosa';
}
function toggleTheme() {
  S.theme=S.theme==='pink'?'blue':'pink';
  document.documentElement.setAttribute('data-theme',S.theme);
  const tb=document.getElementById('themeBtn'); if (tb) tb.textContent=S.theme==='pink'?'Rosa':'Azul';
  if (typeof updChart==='function') updChart();
  saveState();
}

function fmt(n) {
  if (n>=1e6) return (n/1e6).toFixed(1)+'M';
  if (n>=1e3) return (n/1e3).toFixed(1)+'K';
  return ''+Math.round(n);
}
let _tt=null;
function toast(msg) {
  const el=document.getElementById('toast'); if (!el) return;
  el.textContent=msg; el.classList.add('show');
  clearTimeout(_tt); _tt=setTimeout(()=>el.classList.remove('show'),2600);
}
function fillSlider(el,val,max) {
  const p=max>0?Math.min(100,Math.max(0,val/max*100)):0;
  el.style.background=`linear-gradient(90deg,var(--a1) ${p}%,rgba(255,255,255,.07) ${p}%)`;
}

let chart=null;
function initChart() {
  const canvas=document.getElementById('radarChart'); if (!canvas) return;
  chart=new Chart(canvas.getContext('2d'),{
    type:'radar',
    data:{labels:MAIN,datasets:[{label:S.name,data:MAIN.map(a=>effStatRadar(a)),
      backgroundColor:'rgba(255,0,110,.17)',borderColor:'rgba(255,77,158,.88)',
      pointBackgroundColor:'#ff006e',pointBorderColor:'rgba(255,255,255,.3)',pointRadius:4,borderWidth:2}]},
    options:{responsive:true,animation:{duration:290},
      scales:{r:{min:0,grid:{color:'rgba(255,255,255,.07)'},angleLines:{color:'rgba(255,255,255,.07)'},
        ticks:{color:'rgba(255,255,255,.33)',backdropColor:'transparent',font:{size:9},maxTicksLimit:5},
        pointLabels:{color:'rgba(255,255,255,.8)',font:{family:'Cinzel',size:11,weight:'700'}}}},
      plugins:{legend:{labels:{color:'rgba(255,255,255,.4)',font:{family:'Cinzel',size:9}}}}}
  });
  updChart();
}
function updChart() {
  if (!chart) return;
  chart.data.datasets[0].data=MAIN.map(a=>effStatRadar(a));
  chart.data.datasets[0].label=S.name||'Personaje';
  chart.options.scales.r.max=MAXCAP(S.level);
  chart.options.scales.r.min = 0;
  const bl=S.theme==='blue';
  chart.data.datasets[0].backgroundColor=bl?'rgba(0,180,216,.14)':'rgba(255,0,110,.17)';
  chart.data.datasets[0].borderColor=bl?'rgba(76,201,240,.88)':'rgba(255,77,158,.88)';
  chart.data.datasets[0].pointBackgroundColor=bl?'#00b4d8':'#ff006e';
  chart.update('active');
}

function buildRow(stat, isMain) {
  const m=META[stat], tot=effStat(stat), cap=atCap(stat);
  const sv=sliderVal(stat), sm=sliderMax(stat);
  const xb=S.extraBonus[stat]||0, rb=raceBonus(stat,S.level);
  const kb=karmaPassiveDelta(stat);
  const ab=isMain?AUTO(stat,S.level):0, base=BASE(stat);
  const pct=sm>0?Math.min(100,sv/sm*100):0;
  const slBg=`linear-gradient(90deg,var(--a1) ${pct}%,rgba(255,255,255,.07) ${pct}%)`;
  const ctx=ctxLabel(), sep='<span style="color:rgba(255,255,255,.13)"> · </span>';
  const parts=[];
  if (base>0) parts.push(`Base:<b>${base}</b>`);
  if (ab>0)   parts.push(`Auto:<b>+${ab}</b>`);
  parts.push(`${ctx}:<b>+${sv}</b>`);
  if (rb!==0) parts.push(`<span class="rb">Raza:<b>${rb>=0?'+':''}${rb}</b></span>`);
  if (xb>0)   parts.push(`<span class="xb">Extra:<b>+${xb}</b></span>`);
  if (kb!==0) parts.push(`<span class="kb">Karma:<b>${kb>=0?'+':''}${kb}</b></span>`);
  return `
  <div class="stat-row${cap?' at-cap':''}" id="row-${stat}">
    <div class="slabel">
      <div class="sname">${stat}</div><div class="ssub">${m.label}</div>
    </div>
    <div class="swrap">
      <div class="stop">
        <span class="stot" id="stot-${stat}">${tot}${cap?' *':''}</span>
        <span class="sbd"  id="bd-${stat}">${parts.join(sep)}</span>
      </div>
      <input type="range" id="sl-${stat}" min="0" max="${sm}" value="${sv}" style="background:${slBg}"
        oninput="onSl('${stat}',this)" onchange="onSl('${stat}',this)">
    </div>
    <div class="ncol">
      <div class="col-lbl" id="flbl-${stat}">${ctx}</div>
      <input type="number" class="num-input" id="num-${stat}" value="${sv}" min="0" max="${sm}"
        oninput="onNum('${stat}',this)" onblur="onNum('${stat}',this)">
    </div>
    <div class="bcol">
      <div class="col-lbl xc">Extra</div>
      <div class="bctrl">
        <button class="badj" onclick="adjBonus('${stat}',-1)">-</button>
        <input type="number" class="bval" id="bv-${stat}" value="${xb}" min="0" oninput="onBonusInput('${stat}',this.value)">
        <button class="badj" onclick="adjBonus('${stat}',1)">+</button>
      </div>
    </div>
  </div>`;
}

function updRowDisplay(stat, isMain) {
  const row=document.getElementById(`row-${stat}`); if (!row) return;
  const tot=effStat(stat), cap=atCap(stat), sv=sliderVal(stat), sm=sliderMax(stat);
  const xb=S.extraBonus[stat]||0, rb=raceBonus(stat,S.level);
  const kb=karmaPassiveDelta(stat);
  const ab=isMain?AUTO(stat,S.level):0, base=BASE(stat);
  row.classList.toggle('at-cap',cap);
  const totEl=document.getElementById(`stot-${stat}`); if (totEl) totEl.textContent=tot+(cap?' *':'');
  const ctx=ctxLabel(), sep='<span style="color:rgba(255,255,255,.13)"> · </span>';
  const parts=[];
  if (base>0) parts.push(`Base:<b>${base}</b>`);
  if (ab>0)   parts.push(`Auto:<b>+${ab}</b>`);
  parts.push(`${ctx}:<b>+${sv}</b>`);
  if (rb!==0) parts.push(`<span class="rb">Raza:<b>${rb>=0?'+':''}${rb}</b></span>`);
  if (xb>0)   parts.push(`<span class="xb">Extra:<b>+${xb}</b></span>`);
  if (kb!==0) parts.push(`<span class="kb">Karma:<b>${kb>=0?'+':''}${kb}</b></span>`);
  const bdEl=document.getElementById(`bd-${stat}`); if (bdEl) bdEl.innerHTML=parts.join(sep);
  const lblEl=document.getElementById(`flbl-${stat}`); if (lblEl) lblEl.textContent=ctx;
  const slEl=document.getElementById(`sl-${stat}`);
  if (slEl) { if(parseFloat(slEl.max)!==sm) slEl.max=sm; if(document.activeElement!==slEl) slEl.value=sv; fillSlider(slEl,parseFloat(slEl.value),sm); }
  const numEl=document.getElementById(`num-${stat}`); if (numEl&&document.activeElement!==numEl){numEl.max=sm;numEl.value=sv;}
  const bvEl=document.getElementById(`bv-${stat}`); if (bvEl&&document.activeElement!==bvEl) bvEl.value=xb;
}

function renderRaceSelect() {
  const el=document.getElementById('raceSelect'); if (!el) return;
  el.innerHTML=Object.keys(D.races).map(r=>`<option value="${r}"${r===S.race?' selected':''}>${r}</option>`).join('');
}
function renderAttrs() {
  const ma=document.getElementById('mainAttrs'), pa=document.getElementById('powerAttrs');
  if (ma) ma.innerHTML=MAIN.map(s=>buildRow(s,true)).join('');
  if (pa) pa.innerHTML=POWER.map(s=>buildRow(s,false)).join('');
  for (const s of ALL){const el=document.getElementById(`sl-${s}`);if(el) fillSlider(el,parseFloat(el.value),parseFloat(el.max)||1);}
}
function updCapBar() {
  const el=document.getElementById('capInfoBar'); if (!el) return;
  const pool =S.mode==='free'?freePool():S.levelCtx==='bulk'?bulkPool():RULES.freePointsPerLevel;
  const spent=S.mode==='free'?freeSpent():S.levelCtx==='bulk'?bulkSpent():lvlSpent(S.levelCtx);
  const rem=pool-spent, cap=MAXCAP(S.level);
  const colRem=rem<=0?'#ff6b6b':rem<10?'#ffc800':'var(--a3)';
  el.innerHTML=`Cap por stat (sin raza/extra): <strong>${cap}</strong> &nbsp;·&nbsp; Auto acum.: <strong>+${AUTO('FUE',S.level)}</strong>/stat &nbsp;·&nbsp; Pool restante: <strong style="color:${colRem}">${rem}/${pool}</strong> pts`;
}
function renderModeInd() {
  const el=document.getElementById('modeInd'); if (!el) return;
  if (S.mode==='free'){el.className='mode-ind free';el.innerHTML='<div class="mdot"></div><span>Modo Libre</span>';}
  else                {el.className='mode-ind lvl'; el.innerHTML='<div class="mdot"></div><span>Nivel a Nivel</span>';}
}
function renderDerived() {
  const d=calcDerived();
  const ve=document.getElementById('vitV'),ee=document.getElementById('eneV'),se=document.getElementById('espV');
  if(ve) ve.textContent=d.VIT.toLocaleString('es-ES'); if(ee) ee.textContent=d.ENE.toLocaleString('es-ES'); if(se) se.textContent=d.ESP.toLocaleString('es-ES');
}
function renderThresh() {
  const th=calcThresholds(), vol=effStat('VOL');
  const vd=document.getElementById('volTotD'); if(vd) vd.textContent=vol;
  const bd=document.getElementById('bonusUD'); if(bd) bd.textContent=`x${th[0].bonusU+1} — x${th[4].bonusU+5}`;
  const pill=document.getElementById('buccPill'), note=document.getElementById('buccNote');
  if (S.race==='Buccaneer'&&th[0].bucc>0) {
    const rd=D.races['Buccaneer'];
    const active=rd.threshold_bonus.filter(t=>S.level>=t.level).map(t=>`${t.label}:+${t.value}`).join(' | ');
    if(pill){pill.classList.remove('hidden');pill.textContent=`Buccaneer +${th[0].bucc} (${active})`;}
    if(note){const kv=th[4].value*2;note.classList.remove('hidden');note.innerHTML=`<strong>Cuerpo Extranio:</strong> Para matarte deben superar Umbral V x2 = <strong>${fmt(kv)}</strong>. Bonus plano: <strong>+${th[0].bucc}</strong> por umbral.`;}
  } else { if(pill) pill.classList.add('hidden'); if(note) note.classList.add('hidden'); }
  const tl=document.getElementById('threshList');
  if(tl) tl.innerHTML=th.map(t=>`
    <div class="titem" style="border-color:${t.color}16">
      <div class="tnum" style="color:${t.color};background:${t.color}12;border:1px solid ${t.color}2e">x${t.mult}</div>
      <div><div class="tname-lbl" style="color:${t.color}">${t.name}</div><div class="tdesc">${t.desc}</div></div>
      <div class="tval-col">
        <div class="tval" style="color:${t.color}">${fmt(t.value)}</div>
        <div class="tval-lbl">${t.bucc>0?`(${fmt(t.mult*t.vol)}+${t.bucc})`:''} danio min.</div>
      </div>
    </div>`).join('');
  renderDeathThresh();
}
function renderDeathThresh() {
  const el=document.getElementById('deathThreshCard'); if (!el) return;
  const d=calcDerived(), vol=effStat('VOL'), res=effStat('RES');
  const espDeath=-Math.ceil(vol/2);
  const isBucc=S.race==='Buccaneer', th5=calcThresholds()[4], buccKill=isBucc?th5.value*2:null;
  const rows=[
    {stat:'VIT',color:'#4af',rows:[
      {label:'Caida inconsciente (10 turnos / tema)',  val:`< 0 — -${fmt(vol-1)}`, note:`VIT entra negativa sin superar -VOL (-${vol})`},
      {label:'Inconsciente irrecuperable (tema + dia)',val:`<= -${fmt(vol)}`,       note:'VIT negativa igual o superior a VOL'},
      {label:'MUERTE', val:isBucc?`<= -${fmt(buccKill)} (x2 Bucc)`:`<= -${fmt(vol*2)}`, note:isBucc?'Cuerpo Extranio: requiere 2 x Umbral V':'VIT negativa >= dos veces VOL'},
    ]},
    {stat:'ENE',color:'#f90',rows:[
      {label:'Caida inconsciente (5 turnos)',val:`< 0 — -${fmt(res-1)}`,note:`ENE entra negativa sin superar -RES (-${res})`},
      {label:'MUERTE',                       val:`<= -${fmt(res)}`,      note:'ENE negativa igual o superior a RES'},
    ]},
    {stat:'ESP',color:'#a8f',rows:[
      {label:'Caida inconsciente (3 turnos)',val:'< 0',                 note:'ESP entra en valor negativo'},
      {label:'MUERTE',                       val:`<= ${fmt(espDeath)}`, note:`ESP negativa >= mitad de VOL (ceil(${vol}/2)=${Math.ceil(vol/2)}, negado)`},
    ]},
  ];
  el.innerHTML=rows.map(({stat,color,rows:rs})=>`
    <div style="margin-bottom:10px">
      <div style="font-family:'Cinzel',serif;font-size:.7rem;font-weight:700;color:${color};letter-spacing:1px;text-transform:uppercase;margin-bottom:5px">${stat}</div>
      ${rs.map(r=>`<div class="dth-row" style="border-left-color:${color}">
        <div class="dth-label">${r.label}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;flex-wrap:wrap">
          <div class="dth-val" style="color:${color}">${r.val}</div>
          <div class="dth-note">${r.note}</div>
        </div></div>`).join('')}
    </div>`).join('');
  const vit5pct=Math.ceil(d.VIT*0.05);
  const ut=document.getElementById('utilityThresh');
  if(ut) ut.innerHTML=`Si VIT baja del <strong style="color:#ffd700">${fmt(vit5pct)}</strong> (5% de ${fmt(d.VIT)}): todos los stats -90%, sin oficios ni karmas hasta estabilizarse.`;
}
function renderPassives() {
  const rd=D.races[S.race]; if (!rd) return;
  const rn=document.getElementById('raceName'); if(rn) rn.textContent=S.race;
  let chips=[];
  for (const [s,v] of Object.entries(rd.stats)) if(v!==0) chips.push({s,v,tag:null});
  if(rd.level_bonus)     for(const lb of rd.level_bonus)     chips.push({s:lb.stat,v:lb.value,tag:`Nv${lb.level}+`});
  if(rd.threshold_bonus) for(const tb of rd.threshold_bonus) chips.push({s:'Umbral',v:tb.value,tag:tb.label});
  const rc=document.getElementById('raceChips');
  if(rc) rc.innerHTML=chips.length
    ?chips.map(({s,v,tag})=>`<span class="rchip${v<0?' neg':''}">${s}: ${v>0?'+':''}${v}${tag?` (${tag})`:''}</span>`).join('')
    :'<span style="font-size:.66rem;color:rgba(255,255,255,.28)">Sin bonificaciones base</span>';
  const notes=rd.notas||[];
  const pl=document.getElementById('passiveList');
  if(pl) pl.innerHTML=notes.length
    ?notes.map(n=>`<div class="pnote"><span class="pi">·</span><span>${n}</span></div>`).join('')
    :'<div style="font-size:.68rem;color:rgba(255,255,255,.28)">Sin notas.</div>';
}

function renderTimeline() {
  const tl=document.getElementById('lvTimeline'); if (!tl) return;
  tl.innerHTML='';
  const bc=document.createElement('button');
  bc.className='lchip'+(S.levelCtx==='bulk'?' on':'')+(bulkSpent()>0?' hasp':'');
  bc.textContent=`1 — ${S.startLevel}`; bc.title=`Bulk: ${bulkSpent()}/${bulkPool()} pts`;
  bc.onclick=()=>selCtx('bulk'); tl.appendChild(bc);
  for (let l=S.startLevel+1;l<=S.level;l++) {
    const ch=document.createElement('button');
    ch.className='lchip'+(S.levelCtx===l?' on':'')+(lvlSpent(l)>0?' hasp':'');
    ch.textContent=l; ch.title=`Nivel ${l}: ${lvlSpent(l)}/${RULES.freePointsPerLevel} pts`;
    ch.onclick=(ll=>()=>selCtx(ll))(l); tl.appendChild(ch);
  }
  const ac=tl.querySelector('.lchip.on');
  if(ac) requestAnimationFrame(()=>ac.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}));
}
function renderLvlSummary() {
  const isBulk=S.levelCtx==='bulk';
  const pool=isBulk?bulkPool():RULES.freePointsPerLevel;
  const spent=isBulk?bulkSpent():lvlSpent(S.levelCtx);
  const rem=pool-spent, ctx=ctxLabel();
  ['ctxLabel','ctxName2'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=ctx;});
  const pt=document.getElementById('poolTot'),ps=document.getElementById('poolSpent'),pr=document.getElementById('poolRem');
  if(pt)pt.textContent=pool;if(ps)ps.textContent=spent;if(pr)pr.textContent=rem;
  const badge=document.getElementById('ptBadge'),ptText=document.getElementById('ptText');
  if(ptText)ptText.textContent=`${rem}/${pool}`;
  if(badge)badge.className='ptbadge '+(rem===0?'full':rem<10?'warn':'ok');
  const d=calcDerived(),ls=document.getElementById('lvSum');
  if(ls) ls.innerHTML=`
    <div class="lsi"><div class="lsi-l">Pool restante</div><div class="lsi-v">${rem} pts</div></div>
    <div class="lsi"><div class="lsi-l">Libre total Nv${S.level}</div><div class="lsi-v">${S.level * RULES.freePointsPerLevel} pts</div></div>
    <div class="lsi"><div class="lsi-l">Auto acum./stat</div><div class="lsi-v">+${AUTO('FUE',S.level)}</div></div>
    <div class="lsi"><div class="lsi-l">VIT actual</div><div class="lsi-v">${fmt(d.VIT)}</div></div>
    <div class="lsi"><div class="lsi-l">ENE actual</div><div class="lsi-v">${fmt(d.ENE)}</div></div>`;
}

function onSl(stat,el) {
  applyStat(stat,el.value); fillSlider(el,parseFloat(el.value),sliderMax(stat));
  const n=document.getElementById(`num-${stat}`); if(n&&document.activeElement!==n) n.value=sliderVal(stat);
  updRowDisplay(stat,MAIN.includes(stat)); sideUpdate();
}
function onNum(stat,el) {
  const sm=sliderMax(stat); let v=Math.max(0,Math.min(parseInt(el.value)||0,sm));
  el.value=v; applyStat(stat,v); updRowDisplay(stat,MAIN.includes(stat)); sideUpdate();
}
function adjBonus(stat,d)       {S.extraBonus[stat]=Math.max(0,(S.extraBonus[stat]||0)+d);updRowDisplay(stat,MAIN.includes(stat));sideUpdate();}
function onBonusInput(stat,raw) {S.extraBonus[stat]=Math.max(0,parseInt(raw)||0);updRowDisplay(stat,MAIN.includes(stat));sideUpdate();}
function sideUpdate() {
  renderDerived();renderThresh();updChart();updCapBar();
  if(S.mode==='level') renderLvlSummary();
}
function hdlLvl(v) {
  const nl=Math.max(1,parseInt(v)||1); if(nl===S.level) return; S.level=nl;
  if(S.mode==='level'){
    S.startLevel=Math.min(S.startLevel,nl);
    const si=document.getElementById('startLvlInput');if(si)si.value=S.startLevel;
    for(const k of Object.keys(S.perLvlFree)) if(parseInt(k)>nl) delete S.perLvlFree[k];
    if(typeof S.levelCtx==='number'&&S.levelCtx>nl) S.levelCtx='bulk';
  }
  clampFreeStats(); renderAll();
}
function chgLvl(d) {const nl=Math.max(1,S.level+d);document.getElementById('levelInput').value=nl;hdlLvl(nl);}
function hdlRace(r) {S.race=r;clampFreeStats();renderAll();}
function setMode(m) {
  S.mode=m;
  const mbF=document.getElementById('mb-free'),mbL=document.getElementById('mb-lvl');
  if(mbF)mbF.classList.toggle('on',m==='free');if(mbL)mbL.classList.toggle('on',m==='level');
  if(m==='level') S.startLevel=Math.min(S.startLevel,S.level);
  renderAll();
}
function selCtx(ctx) {S.levelCtx=ctx;renderTimeline();renderLvlSummary();renderAttrs();updCapBar();}
function adjSL(d) {const el=document.getElementById('startLvlInput');el.value=Math.max(1,Math.min((parseInt(el.value)||1)+d,S.level));}
function applyBulk() {
  const nsl=Math.max(1,Math.min(parseInt(document.getElementById('startLvlInput').value)||1,S.level));
  if(nsl===S.startLevel){toast('Mismo nivel de inicio, sin cambios');return;}
  if(bulkSpent()>0||Object.keys(S.perLvlFree).length>0)
    if(!confirm(`Cambiar el bulk a Nv1-${nsl} reseteara los puntos asignados. Continuar?`)) return;
  S.startLevel=nsl;S.bulkFree=mkZero();S.perLvlFree={};S.levelCtx='bulk';
  renderAll();toast(`Bulk = Nv1 — Nv${nsl}`);
}

async function bootEngine(onReady) {
  try { const r=await fetch('./one-piece-data.json'); if(!r.ok) throw 0; D=await r.json(); }
  catch { D = { ...EMBEDDED }; }
  RULES=D.rules;MAIN=D.mainAttributes;POWER=D.powerAttributes;
  ALL=[...MAIN,...POWER];META=D.attributesMeta;THRESH=D.thresholds;
  const saved=loadFromStorage(); S=saved||mkState();
  onReady();
}

function parseForumBlock(raw) {
  const out = { name:null, level:null, stats:{} };
  const nameM = raw.match(/[Ee]stad[íi]sticas\s+de\s+(.+?)[\s:_\n]/);
  if (nameM) out.name = nameM[1].trim().replace(/__/g,'');
  const lvlM = raw.match(/[Nn]ivel\s*[:\-]?\s*(\d+)/);
  if (lvlM) out.level = parseInt(lvlM[1]);
  const statRx = /(\d+)\s*(FUE|RES|AGI|REF|INT|VOL|DES|PRE|CH|CA)\b/g;
  let m; while ((m = statRx.exec(raw)) !== null) out.stats[m[2]] = parseInt(m[1]);
  return out;
}
function parseForumValid(p) { return !!(p.level && Object.keys(p.stats).length >= 2); }
function raceBonusFor(stat, race, lvl) {
  const rd = D.races[race]; if (!rd) return 0;
  let b = rd.stats[stat] || 0;
  if (rd.level_bonus) for (const lb of rd.level_bonus)
    if (lb.stat === stat && lvl >= lb.level) b += lb.value;
  return b;
}
function reverseEngineer(p, race) {
  const lvl = p.level, pool = RULES.freePointsPerLevel * lvl;
  const breakdown = {};
  for (const stat of ALL) {
    const total=p.stats[stat]||0, base=BASE(stat), auto=AUTO(stat,lvl), rb=raceBonusFor(stat,race,lvl);
    const needed=total-base-auto-rb, maxFree=MAXCAP(lvl)-base-auto;
    let free=0, extra=0;
    if (needed>0) { if(needed<=maxFree){free=needed;}else{free=maxFree;extra=needed-maxFree;} }
    breakdown[stat]={total,base,auto,race:rb,free,extra};
  }
  let usedFree=ALL.reduce((t,s)=>t+breakdown[s].free,0);
  if (usedFree>pool) {
    let excess=usedFree-pool;
    for (const stat of [...ALL].sort((a,b)=>breakdown[b].free-breakdown[a].free)) {
      const cut=Math.min(breakdown[stat].free,excess);
      breakdown[stat].free-=cut;breakdown[stat].extra+=cut;excess-=cut;
      if(excess<=0) break;
    }
    usedFree=pool;
  }
  return {breakdown,pool,usedFree,extraTotal:ALL.reduce((t,s)=>t+breakdown[s].extra,0)};
}
function applyImport(parsed, race, mode) {
  const {breakdown}=reverseEngineer(parsed,race), lvl=parsed.level;
  S.name=parsed.name||S.name; S.level=lvl; S.race=race; S.mode=mode;
  const freeMap=Object.fromEntries(ALL.map(s=>[s,breakdown[s].free]));
  S.extraBonus=Object.fromEntries(ALL.map(s=>[s,breakdown[s].extra]));
  if (mode==='free') { S.freeFree=freeMap; }
  else { S.startLevel=lvl;S.bulkFree=freeMap;S.perLvlFree={};S.levelCtx='bulk'; }
}

const _BSTAT = {
  'fuerza':'FUE','fue':'FUE','destreza':'DES','des':'DES',
  'resistencia':'RES','res':'RES','precision':'PRE','presicion':'PRE',
  'pre':'PRE','agilidad':'AGI','agi':'AGI','reflejos':'REF','ref':'REF',
  'inteligencia':'INT','int':'INT','voluntad':'VOL','vol':'VOL',
  'carisma':'CH','ch':'CH','haki':'CH','akuma':'CA','ca':'CA',
};
const _STAT_PHRASE_ENTRIES = [
  ['control de observacion','CH'],['control de armamento','CH'],['control de conquista','CH'],
  ['control de haki','CH'],['control haki','CH'],['c de haki','CH'],['cdehaki','CH'],
  ['control de akuma','CA'],['control akuma','CA'],['c de akuma','CA'],['cdeakuma','CA'],
  ['akuma no mi','CA'],['resistencia','RES'],['inteligencia','INT'],['destreza','DES'],
  ['precision','PRE'],['presicion','PRE'],['agilidad','AGI'],['reflejos','REF'],
  ['voluntad','VOL'],['fuerza','FUE'],['carisma','CH'],['haki','CH'],['akuma','CA'],
  ['des','DES'],['pre','PRE'],['res','RES'],['ref','REF'],['int','INT'],['vol','VOL'],
  ['fue','FUE'],['agi','AGI'],['ch','CH'],['ca','CA'],
];
const STAT_PHRASE_ORDERED = [..._STAT_PHRASE_ENTRIES].sort((a, b) => b[0].length - a[0].length);

function normStatPhrase(s) {
  return String(s).toLowerCase().trim()
    .replace(/[áàãä]/g,'a').replace(/[éèë]/g,'e').replace(/[íìï]/g,'i')
    .replace(/[óòõö]/g,'o').replace(/[úùü]/g,'u').replace(/ñ/g,'n')
    .replace(/\./g,'').replace(/\s+/g,' ').replace(/^de\s+/,'');
}

function resolveStatFromLabel(statLabel) {
  const s = normStatPhrase(statLabel);
  if (!s) return null;
  for (const [phrase, code] of STAT_PHRASE_ORDERED) {
    if (s === phrase || (s.startsWith(phrase) && (s.length === phrase.length || s[phrase.length] === ' ')))
      return code;
  }
  if (_BSTAT[s]) return _BSTAT[s];
  const first = s.split(/\s+/)[0];
  if (_BSTAT[first]) return _BSTAT[first];
  const up = String(statLabel).trim().toUpperCase();
  if (ALL && ALL.includes(up)) return up;
  return null;
}

function bStat(n) {
  const resolved = resolveStatFromLabel(n);
  if (resolved && ALL && ALL.includes(resolved)) return resolved;
  const norm = normStatPhrase(n);
  return _BSTAT[norm] || String(n).toUpperCase();
}

function _bFld(t, key) {
  const KEYS = 'Requisitos|Resistencia|Daño|Daño|Escalado|Alcance|Unidades|Berries|Descripci[oó]n|Código|Coste|Efecto|Enfriamiento';
  const re = new RegExp(key + '\\s*:\\s*(.+?)(?=\\s+(?:' + KEYS + '):|$)', 'is');
  const m = t.match(re);
  return m ? m[1].replace(/\.$/, '').trim() : '';
}
function splitTechniqueBlocks(raw) {
  const blocks=[], lines=raw.split('\n');
  let current=[];
  for (const line of lines) {
    current.push(line);
    if (/^C[oó]digo:\s*\S+/i.test(line.trim())) {
      const b=current.join('\n').trim(); if(b) blocks.push(b); current=[];
    }
  }
  const tail=current.join('\n').trim(); if(tail.length>5) blocks.push(tail);
  return blocks;
}

function parseWeaponBlock(raw) {
  const t = raw.replace(/\n/g,' ').replace(/\s+/g,' ').trim();
  const headM = t.match(/^(.+?)\s+(\d+)\s*[-–]\s*(.+?)\s+Especificaciones/i);
  const name     = headM ? headM[1].trim() : t.split(/\s+/)[0];
  const wLevel   = headM ? parseInt(headM[2]) : 1;
  const category = headM ? headM[3].trim() : '';

  const scalStr = _bFld(t, 'Escalado');
  const scaling = {};
  scalStr.split('/').forEach(part => {
    const m = part.trim().match(/([\d,.]+)\s+(.+)/);
    if (!m) return;
    const code = resolveStatFromLabel(m[2].trim());
    if (code && typeof ALL !== 'undefined' && ALL.includes(code)) scaling[code] = parseFloat(m[1].replace(',','.'));
  });

  return {
    name, wLevel, category,
    reqStr:    _bFld(t, 'Requisitos'),
    resistance: parseInt(_bFld(t, 'Resistencia')) || 0,
    baseDmg:   parseFloat(_bFld(t, 'Daño').replace(',','.')) || 0,
    scalStr, scaling,
    descStr:   _bFld(t, 'Descripci[oó]n'),
    code:      (t.match(/C[oó]digo:\s*(\S+)/i)||[])[1] || '',
    _raw: raw,
  };
}
function parseWeaponValid(w) { return !!(w && w.name && w.baseDmg >= 0 && w.code); }

function calcWeaponDmg(weapon, statsOv, opts={}) {
  return calcWeaponDmgBreakdown(weapon, statsOv, opts).total;
}
function calcWeaponDmgBreakdown(weapon, statsOv, opts={}) {
  if (!weapon) return { total:0, parts:[] };
  const get = s => (statsOv && statsOv[s]!==undefined) ? statsOv[s] : effStat(s);
  const parts = [{ label:'Base', value:weapon.baseDmg, detail:`${weapon.baseDmg}` }];
  let total = weapon.baseDmg;
  Object.entries(weapon.scaling||{}).forEach(([s, baseM]) => {
    const mult    = opts.dualPenalty ? baseM/2 : baseM;
    const statVal = get(s);
    const contrib = statVal * mult;
    parts.push({ label:`${s}×${mult}${opts.dualPenalty?' (÷2 arma)':''}`, value:contrib, detail:`${statVal}×${mult}` });
    total += contrib;
  });
  return { total:Math.round(total), parts };
}

function detectCuerpoACuerpo(raw, reqStr) {
  const blob = String(raw || '') + '\n' + String(reqStr || '');
  if (/\bcuerpo\s*a\s*cuerpo\b/i.test(blob)) return true;
  if (/maestr[ií]a\s*:[^\n]*cuerpo\s*a\s*cuerpo/i.test(blob)) return true;
  return false;
}
function formulaUsesFueScaling(formula) {
  if (!formula || typeof ALL === 'undefined') return false;
  for (const tok of String(formula).split(/\s*\+\s*/)) {
    const m = tok.trim().match(/^([\d,.]+)\s*[xX]\s*(.+)$/i);
    if (!m) continue;
    const code = resolveStatFromLabel(m[2].trim());
    if (code === 'FUE' && ALL.includes('FUE')) return true;
  }
  return false;
}

function parseTechniqueBlock(raw) {
  const lines = raw.split('\n').map(l=>l.trim()).filter(l=>l&&!/^informaci[oó]n\s*\+\/-/i.test(l));
  let name='', tType='', tLevel=1;

  let levelIdx = -1;
  for (let i=0; i<Math.min(lines.length,6); i++) {
    if (/^\d+$/.test(lines[i])) {
      levelIdx=i; tLevel=parseInt(lines[i]);
      name=lines[0];
      tType=lines.slice(1,i).join(' ').trim().toLowerCase();
      break;
    }
  }

  if (levelIdx===-1) {
    const flat=raw.replace(/\n/g,' ').replace(/\s+/g,' ').trim();
    const m=flat.match(/^(.+?)\s+([\w\s]+?)\s+(\d+)\s+(?:Informaci[oó]n|Requisitos)/i);
    if (m) { name=m[1].trim(); tType=m[2].trim().toLowerCase(); tLevel=parseInt(m[3]); }
    else {
      const m2=flat.match(/^(.+?)\s+(propio|aprendido|racial|pasivo)\s+(\d+)/i);
      if (m2) { name=m2[1].trim(); tType=m2[2].trim().toLowerCase(); tLevel=parseInt(m2[3]); }
    }
  }

  const t=raw.replace(/\n/g,' ').replace(/\s+/g,' ').trim();
  const effect=_bFld(t,'Efecto');

  const cdBlock=(t.match(/Enfriamiento:\s*(.+?)(?:\s+C[oó]digo:|$)/i)||[])[1]?.trim()||'';
  const cdValM=cdBlock.match(/^((?:Sin\s+enfriamiento|[Uu]na?|[Dd]os|[Tt]res|[Cc]uatro|[Cc]inco|\d+)\s*(?:turno[s]?|ronda[s]?|acci[oó]n[es]?)?)/i);
  const cooldown=cdValM?cdValM[1].trim():cdBlock.split(' ').slice(0,4).join(' ');
  const desc=cdValM?cdBlock.slice(cdValM[0].length).trim():'';

  const buffs=[], seen=new Set();
  const bRe1=/aumenta\s+(?:la\s+|el\s+)?([\w\u00C0-\u024F]+)\s+(\d+)\s*puntos/gi;
  const bRe2=/aumenta\s+en\s+(\d+)\s+(?:la\s+|el\s+)?([\w\u00C0-\u024F]+)/gi;
  let bm;
  while ((bm=bRe1.exec(effect))!==null){const s=bStat(bm[1]),k=s+bm[2];if(!seen.has(k)){seen.add(k);buffs.push({stat:s,bonus:parseInt(bm[2])});}}
  while ((bm=bRe2.exec(effect))!==null){const s=bStat(bm[2]),k=s+bm[1];if(!seen.has(k)){seen.add(k);buffs.push({stat:s,bonus:parseInt(bm[1])});}}
  const autoSlots = detectWeaponSlots(_bFld(t,'Daño'));
  const isDualAuto = autoSlots.length >= 2;
  const reqStrLine = _bFld(t,'Requisitos');
  const isCuerpoACuerpo = detectCuerpoACuerpo(raw + '\n' + (effect || ''), reqStrLine);
  return {
    name, tType, tLevel,
    reqStr:     reqStrLine,
    dmgFormula: _bFld(t,'Da\xf1o'),
    costStr:    _bFld(t,'Coste'),
    isDual:     isDualAuto,
    hasAmbi:    false,
    isCuerpoACuerpo,
    applyMusculosHierro: false,
    applyDedosOro: false,
    effect, cooldown, desc, buffs,
    weaponSlots: {},
    code:(t.match(/C[oó]digo:\s*(\S+)/i)||[])[1]||'',
    _raw:raw,
  };
}
function parseTechniqueValid(tech) { return !!(tech && tech.name && tech.dmgFormula); }
function detectWeaponSlots(formula) {
  if (!formula) return [];
  const slots=new Set();
  const re=/\bArma\s*(\d*)\b/gi;
  let m;
  while ((m=re.exec(formula))!==null) slots.add(m[1]?`Arma ${m[1]}`:'Arma');
  return [...slots];
}

function calcTechniqueDmg(tech, weapons) {
  return calcTechniqueDmgBreakdown(tech, weapons).total;
}
function calcTechniqueDmgBreakdown(tech, weapons) {
  const slotCount   = detectWeaponSlots(tech.dmgFormula || '').length;
  const dualWield   = slotCount >= 2;
  const hasAmbi     = tech.hasAmbi || false;
  const dualPenalty = dualWield && !hasAmbi;

  const stats = {};
  ALL.forEach(s => { stats[s] = effStat(s); });
  (tech.buffs||[]).forEach(b => { stats[b.stat] = (stats[b.stat]||0)+b.bonus; });
  ALL.forEach(s => {
    const kb = karmaSituationalBonusForTech(tech, s);
    if (kb) stats[s] = (stats[s] || 0) + kb;
  });

  const parts=[], missing=[];
  let total=0;

  (tech.dmgFormula||'').split(/\s*\+\s*/).forEach(tok => {
    tok = tok.trim();
    const armaM = tok.match(/^[Aa]rma\s*(\d*)$/);
    if (armaM!==null) {
      const slot = armaM[1] ? `Arma ${armaM[1]}` : 'Arma';
      const idx  = (tech.weaponSlots||{})[slot];
      const iIdx = (idx !== undefined && idx !== null) ? Number(idx) : -1;
      const w    = (iIdx >= 0 && weapons && weapons[iIdx]) ? weapons[iIdx] : null;
      if (w) {
        const bd = calcWeaponDmgBreakdown(w, stats, {dualPenalty});
        parts.push({ label:`${slot} (${w.name})`, value:bd.total, sub:bd.parts });
        total += bd.total;
      } else {
        missing.push(slot);
        parts.push({ label:slot, value:0, missing:true });
      }
    } else {
      const m = tok.match(/([\d,.]+)\s*[xX]\s*([\w\u00C0-\u024F]+)/);
      if (m) {
        const mult=parseFloat(m[1].replace(',','.')), statKey=bStat(m[2]), statVal=stats[statKey]||0, val=mult*statVal;
        parts.push({ label:`${mult}×${statKey}`, value:val, detail:`${mult}×${statVal}` });
        total += val;
      } else {
        const n=parseFloat(tok.replace(',','.')); if(!isNaN(n)){ parts.push({label:'Fijo',value:n,detail:`${n}`}); total+=n; }
      }
    }
  });

  if (tech.isCuerpoACuerpo && !detectWeaponSlots(tech.dmgFormula || '').length) {
    const fue = stats.FUE || 0;
    const hasFueScale = formulaUsesFueScaling(tech.dmgFormula);
    const tier150 = fue >= 150 ? 50 : 0;
    const tier300 = fue >= 300 ? 100 : 0;
    let meleeExtra = tier150 + tier300;
    if (!hasFueScale) meleeExtra += fue;
    if (meleeExtra > 0) {
      const det = [];
      if (!hasFueScale) det.push(`base FUE ${fue}`);
      if (tier150) det.push('+50 (FUE ≥ 150)');
      if (tier300) det.push('+100 (FUE ≥ 300)');
      total += meleeExtra;
      parts.push({ label: 'Melé (golpe blanco, maestría CaC)', value: meleeExtra, detail: det.join(' · ') });
    }
  }

  return { total:Math.round(total), parts, missing, buffs:tech.buffs||[], dualPenalty };
}

function checkReqs(reqStr) {
  if (!reqStr || !String(reqStr).trim()) return [];
  return reqStr.split(/[|/]/).map(p => {
    p = p.trim();
    if (!p) return null;
    let m = p.match(/^(\d+)\s+(.+)$/);
    if (m) {
      const val = parseInt(m[1], 10);
      const stat = resolveStatFromLabel(m[2].trim());
      if (stat && ALL.includes(stat)) {
        const have = effStat(stat);
        return { text: p, met: have >= val, need: val, have, stat, parsed: true };
      }
      return { text: p, met: null, parsed: false };
    }
    m = p.match(/^(.+?)\s+(\d+)$/);
    if (m) {
      const stat = resolveStatFromLabel(m[1].trim());
      const val = parseInt(m[2], 10);
      if (stat && ALL.includes(stat) && !isNaN(val)) {
        const have = effStat(stat);
        return { text: p, met: have >= val, need: val, have, stat, parsed: true };
      }
      return { text: p, met: null, parsed: false };
    }
    return { text: p, met: null, parsed: false };
  }).filter(Boolean);
}
