const SUPABASE_URL = 'https://uumxusprugyifvyipdeq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_XvH0YeSMtyvCjBi_OxxZsQ_i4lsQeJE';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const people = [
  {name:'Daisy', teams:['Uruguay','Ecuador','England','Haiti','France']},
  {name:'Frankie', teams:['Jordan','Cabo Verde','Ghana','Bosnia and Herzegovina','USA','Argentina']},
  {name:'Ruby', teams:['Switzerland','Norway','Colombia','Bosnia and Herzegovina','IR Iran']},
  {name:'Charlotte', teams:['Congo DR','Iraq','South Africa','Mexico','Portugal','Paraguay','Japan']},
  {name:'Nicole', teams:['Scotland','Turkiye','Uzbekistan','Curacao','Morocco']},
  {name:'Jade', teams:['Netherlands','Belgium','Brazil','South Korea','Austria']},
  {name:'Eliza', teams:['Germany','Tunisia','Czechia','Algeria','New Zealand']},
  {name:'Lulu', teams:['Senegal','Australia','Canada','Sweden','Qatar']},
  {name:'Darcy', teams:["Cote d'Ivoire",'Egypt','Croatia','Panama','Spain','Saudi Arabia']}
];

const codes = {'Uruguay':'UY','Ecuador':'EC','England':'GB-ENG','Haiti':'HT','France':'FR','Jordan':'JO','Cabo Verde':'CV','Ghana':'GH','Bosnia and Herzegovina':'BA','USA':'US','Argentina':'AR','Switzerland':'CH','Norway':'NO','Colombia':'CO','IR Iran':'IR','Congo DR':'CD','Iraq':'IQ','South Africa':'ZA','Mexico':'MX','Portugal':'PT','Paraguay':'PY','Japan':'JP','Scotland':'GB-SCT','Turkiye':'TR','Uzbekistan':'UZ','Curacao':'CW','Morocco':'MA','Netherlands':'NL','Belgium':'BE','Brazil':'BR','South Korea':'KR','Austria':'AT','Germany':'DE','Tunisia':'TN','Czechia':'CZ','Algeria':'DZ','New Zealand':'NZ','Senegal':'SN','Australia':'AU','Canada':'CA','Sweden':'SE','Qatar':'QA',"Cote d'Ivoire":'CI','Egypt':'EG','Croatia':'HR','Panama':'PA','Spain':'ES','Saudi Arabia':'SA'};

const defaultFixtures = [
 {date:'2026-06-12T05:00:00+10:00', stage:'Group A', group:'A', home:'Mexico', away:'South Africa', venue:'Mexico City'},
 {date:'2026-06-12T12:00:00+10:00', stage:'Group A', group:'A', home:'South Korea', away:'Czechia', venue:'Guadalajara'},
 {date:'2026-06-13T05:00:00+10:00', stage:'Group B', group:'B', home:'Canada', away:'Bosnia and Herzegovina', venue:'Toronto'},
 {date:'2026-06-13T11:00:00+10:00', stage:'Group D', group:'D', home:'USA', away:'Paraguay', venue:'Los Angeles'},
 {date:'2026-06-14T05:00:00+10:00', stage:'Group B', group:'B', home:'Qatar', away:'Switzerland', venue:'San Francisco'},
 {date:'2026-06-14T08:00:00+10:00', stage:'Group C', group:'C', home:'Brazil', away:'Morocco', venue:'New York/NJ'},
 {date:'2026-06-14T11:00:00+10:00', stage:'Group C', group:'C', home:'Haiti', away:'Scotland', venue:'Boston'},
 {date:'2026-06-14T14:00:00+10:00', stage:'Group D', group:'D', home:'Australia', away:'Turkiye', venue:'Vancouver'},
 {date:'2026-06-15T03:00:00+10:00', stage:'Group E', group:'E', home:'Germany', away:'Curacao', venue:'Houston'},
 {date:'2026-06-15T06:00:00+10:00', stage:'Group F', group:'F', home:'Netherlands', away:'Japan', venue:'Dallas'},
 {date:'2026-06-15T09:00:00+10:00', stage:'Group E', group:'E', home:"Cote d'Ivoire", away:'Ecuador', venue:'Philadelphia'},
 {date:'2026-06-15T12:00:00+10:00', stage:'Group F', group:'F', home:'Sweden', away:'Tunisia', venue:'Monterrey'},
 {date:'2026-06-16T02:00:00+10:00', stage:'Group H', group:'H', home:'Spain', away:'Cabo Verde', venue:'Atlanta'},
 {date:'2026-06-16T05:00:00+10:00', stage:'Group G', group:'G', home:'Belgium', away:'Egypt', venue:'Seattle'},
 {date:'2026-06-16T08:00:00+10:00', stage:'Group H', group:'H', home:'Saudi Arabia', away:'Uruguay', venue:'Miami'},
 {date:'2026-06-16T11:00:00+10:00', stage:'Group G', group:'G', home:'IR Iran', away:'New Zealand', venue:'Los Angeles'},
 {date:'2026-06-17T05:00:00+10:00', stage:'Group I', group:'I', home:'France', away:'Senegal', venue:'New York/NJ'},
 {date:'2026-06-17T08:00:00+10:00', stage:'Group I', group:'I', home:'Iraq', away:'Norway', venue:'Boston'},
 {date:'2026-06-17T11:00:00+10:00', stage:'Group J', group:'J', home:'Argentina', away:'Algeria', venue:'Kansas City'},
 {date:'2026-06-17T14:00:00+10:00', stage:'Group J', group:'J', home:'Austria', away:'Jordan', venue:'San Francisco'},
 {date:'2026-06-18T03:00:00+10:00', stage:'Group K', group:'K', home:'Portugal', away:'Congo DR', venue:'Houston'},
 {date:'2026-06-18T06:00:00+10:00', stage:'Group L', group:'L', home:'England', away:'Croatia', venue:'Dallas'},
 {date:'2026-06-18T09:00:00+10:00', stage:'Group L', group:'L', home:'Ghana', away:'Panama', venue:'Toronto'},
 {date:'2026-06-18T12:00:00+10:00', stage:'Group K', group:'K', home:'Uzbekistan', away:'Colombia', venue:'Mexico City'},
 {date:'2026-06-19T02:00:00+10:00', stage:'Group A', group:'A', home:'Czechia', away:'South Africa', venue:'Atlanta'},
 {date:'2026-06-19T05:00:00+10:00', stage:'Group B', group:'B', home:'Switzerland', away:'Bosnia and Herzegovina', venue:'Los Angeles'},
 {date:'2026-06-19T08:00:00+10:00', stage:'Group B', group:'B', home:'Canada', away:'Qatar', venue:'Vancouver'},
 {date:'2026-06-19T11:00:00+10:00', stage:'Group A', group:'A', home:'Mexico', away:'South Korea', venue:'Guadalajara'},
 {date:'2026-06-20T05:00:00+10:00', stage:'Group D', group:'D', home:'USA', away:'Australia', venue:'Seattle'},
 {date:'2026-06-20T08:00:00+10:00', stage:'Group C', group:'C', home:'Scotland', away:'Morocco', venue:'Boston'},
 {date:'2026-06-20T11:00:00+10:00', stage:'Group C', group:'C', home:'Brazil', away:'Haiti', venue:'Philadelphia'},
 {date:'2026-06-20T14:00:00+10:00', stage:'Group D', group:'D', home:'Turkiye', away:'Paraguay', venue:'San Francisco'},
 {date:'2026-06-21T03:00:00+10:00', stage:'Group F', group:'F', home:'Netherlands', away:'Sweden', venue:'Houston'},
 {date:'2026-06-21T06:00:00+10:00', stage:'Group E', group:'E', home:'Germany', away:"Cote d'Ivoire", venue:'Toronto'},
 {date:'2026-06-21T10:00:00+10:00', stage:'Group E', group:'E', home:'Ecuador', away:'Curacao', venue:'Kansas City'},
 {date:'2026-06-21T14:00:00+10:00', stage:'Group F', group:'F', home:'Tunisia', away:'Japan', venue:'Monterrey'},
 {date:'2026-06-22T02:00:00+10:00', stage:'Group H', group:'H', home:'Spain', away:'Saudi Arabia', venue:'Atlanta'},
 {date:'2026-06-22T05:00:00+10:00', stage:'Group G', group:'G', home:'Belgium', away:'IR Iran', venue:'Los Angeles'},
 {date:'2026-06-22T08:00:00+10:00', stage:'Group H', group:'H', home:'Uruguay', away:'Cabo Verde', venue:'Miami'},
 {date:'2026-06-22T11:00:00+10:00', stage:'Group G', group:'G', home:'New Zealand', away:'Egypt', venue:'Vancouver'},
 {date:'2026-06-23T03:00:00+10:00', stage:'Group J', group:'J', home:'Argentina', away:'Austria', venue:'Dallas'},
 {date:'2026-06-23T07:00:00+10:00', stage:'Group I', group:'I', home:'France', away:'Iraq', venue:'Philadelphia'},
 {date:'2026-06-23T10:00:00+10:00', stage:'Group I', group:'I', home:'Norway', away:'Senegal', venue:'New York/NJ'},
 {date:'2026-06-23T13:00:00+10:00', stage:'Group J', group:'J', home:'Jordan', away:'Algeria', venue:'San Francisco'},
 {date:'2026-06-24T03:00:00+10:00', stage:'Group K', group:'K', home:'Portugal', away:'Uzbekistan', venue:'Houston'},
 {date:'2026-06-24T06:00:00+10:00', stage:'Group L', group:'L', home:'England', away:'Ghana', venue:'Boston'},
 {date:'2026-06-24T09:00:00+10:00', stage:'Group L', group:'L', home:'Panama', away:'Croatia', venue:'Toronto'},
 {date:'2026-06-24T12:00:00+10:00', stage:'Group K', group:'K', home:'Colombia', away:'Congo DR', venue:'Guadalajara'},
 {date:'2026-06-25T05:00:00+10:00', stage:'Group B', group:'B', home:'Switzerland', away:'Canada', venue:'Vancouver'},
 {date:'2026-06-25T05:00:00+10:00', stage:'Group B', group:'B', home:'Bosnia and Herzegovina', away:'Qatar', venue:'Seattle'},
 {date:'2026-06-25T08:00:00+10:00', stage:'Group C', group:'C', home:'Scotland', away:'Brazil', venue:'Miami'},
 {date:'2026-06-25T08:00:00+10:00', stage:'Group C', group:'C', home:'Morocco', away:'Haiti', venue:'Atlanta'},
 {date:'2026-06-25T11:00:00+10:00', stage:'Group A', group:'A', home:'Czechia', away:'Mexico', venue:'Mexico City'},
 {date:'2026-06-25T11:00:00+10:00', stage:'Group A', group:'A', home:'South Africa', away:'South Korea', venue:'Monterrey'},
 {date:'2026-06-26T06:00:00+10:00', stage:'Group E', group:'E', home:'Ecuador', away:'Germany', venue:'New York/NJ'},
 {date:'2026-06-26T06:00:00+10:00', stage:'Group E', group:'E', home:'Curacao', away:"Cote d'Ivoire", venue:'Philadelphia'},
 {date:'2026-06-26T09:00:00+10:00', stage:'Group F', group:'F', home:'Japan', away:'Sweden', venue:'Dallas'},
 {date:'2026-06-26T09:00:00+10:00', stage:'Group F', group:'F', home:'Tunisia', away:'Netherlands', venue:'Kansas City'},
 {date:'2026-06-26T12:00:00+10:00', stage:'Group D', group:'D', home:'Turkiye', away:'USA', venue:'Los Angeles'},
 {date:'2026-06-26T12:00:00+10:00', stage:'Group D', group:'D', home:'Paraguay', away:'Australia', venue:'San Francisco'},
 {date:'2026-06-27T05:00:00+10:00', stage:'Group I', group:'I', home:'Norway', away:'France', venue:'Boston'},
 {date:'2026-06-27T05:00:00+10:00', stage:'Group I', group:'I', home:'Senegal', away:'Iraq', venue:'Toronto'},
 {date:'2026-06-27T10:00:00+10:00', stage:'Group H', group:'H', home:'Cabo Verde', away:'Saudi Arabia', venue:'Houston'},
 {date:'2026-06-27T10:00:00+10:00', stage:'Group H', group:'H', home:'Uruguay', away:'Spain', venue:'Guadalajara'},
 {date:'2026-06-27T13:00:00+10:00', stage:'Group G', group:'G', home:'Egypt', away:'IR Iran', venue:'Seattle'},
 {date:'2026-06-27T13:00:00+10:00', stage:'Group G', group:'G', home:'New Zealand', away:'Belgium', venue:'Vancouver'},
 {date:'2026-06-28T07:00:00+10:00', stage:'Group L', group:'L', home:'Panama', away:'England', venue:'New York/NJ'},
 {date:'2026-06-28T07:00:00+10:00', stage:'Group L', group:'L', home:'Croatia', away:'Ghana', venue:'Philadelphia'},
 {date:'2026-06-28T09:30:00+10:00', stage:'Group K', group:'K', home:'Colombia', away:'Portugal', venue:'Miami'},
 {date:'2026-06-28T09:30:00+10:00', stage:'Group K', group:'K', home:'Congo DR', away:'Uzbekistan', venue:'Atlanta'},
 {date:'2026-06-28T12:00:00+10:00', stage:'Group J', group:'J', home:'Algeria', away:'Austria', venue:'Kansas City'},
 {date:'2026-06-28T12:00:00+10:00', stage:'Group J', group:'J', home:'Jordan', away:'Argentina', venue:'Dallas'},
 {date:'2026-06-29T05:00:00+10:00', stage:'Round of 32', group:'', home:'Runner-up A', away:'Runner-up B', venue:'Los Angeles', code:'M73'},
 {date:'2026-06-30T03:00:00+10:00', stage:'Round of 32', group:'', home:'Winner C', away:'Runner-up F', venue:'Houston', code:'M76'},
 {date:'2026-06-30T06:30:00+10:00', stage:'Round of 32', group:'', home:'Winner E', away:'3rd A/B/C/D/F', venue:'Boston', code:'M74'},
 {date:'2026-06-30T11:00:00+10:00', stage:'Round of 32', group:'', home:'Winner F', away:'Runner-up C', venue:'Monterrey', code:'M75'},
 {date:'2026-07-01T03:00:00+10:00', stage:'Round of 32', group:'', home:'Runner-up E', away:'Runner-up I', venue:'Dallas', code:'M78'},
 {date:'2026-07-01T07:00:00+10:00', stage:'Round of 32', group:'', home:'Winner I', away:'3rd C/D/F/G/H', venue:'New York/NJ', code:'M77'},
 {date:'2026-07-01T11:00:00+10:00', stage:'Round of 32', group:'', home:'Winner A', away:'3rd C/E/F/H/I', venue:'Mexico City', code:'M79'},
 {date:'2026-07-02T02:00:00+10:00', stage:'Round of 32', group:'', home:'Winner L', away:'3rd E/H/I/J/K', venue:'Atlanta', code:'M80'},
 {date:'2026-07-02T06:00:00+10:00', stage:'Round of 32', group:'', home:'Winner G', away:'3rd A/E/H/I/J', venue:'Seattle', code:'M82'},
 {date:'2026-07-02T10:00:00+10:00', stage:'Round of 32', group:'', home:'Winner D', away:'3rd B/E/F/I/J', venue:'San Francisco', code:'M81'},
 {date:'2026-07-03T05:00:00+10:00', stage:'Round of 32', group:'', home:'Winner H', away:'Runner-up J', venue:'Los Angeles', code:'M84'},
 {date:'2026-07-03T09:00:00+10:00', stage:'Round of 32', group:'', home:'Runner-up K', away:'Runner-up L', venue:'Toronto', code:'M83'},
 {date:'2026-07-03T13:00:00+10:00', stage:'Round of 32', group:'', home:'Winner B', away:'3rd E/F/G/I/J', venue:'Vancouver', code:'M85'},
 {date:'2026-07-04T04:00:00+10:00', stage:'Round of 32', group:'', home:'Runner-up D', away:'Runner-up G', venue:'Dallas', code:'M88'},
 {date:'2026-07-04T08:00:00+10:00', stage:'Round of 32', group:'', home:'Winner J', away:'Runner-up H', venue:'Miami', code:'M86'},
 {date:'2026-07-04T11:30:00+10:00', stage:'Round of 32', group:'', home:'Winner K', away:'3rd D/E/I/J/L', venue:'Kansas City', code:'M87'},
 {date:'2026-07-05T03:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M73', away:'Winner M75', venue:'Houston', code:'M90'},
 {date:'2026-07-05T07:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M74', away:'Winner M77', venue:'Philadelphia', code:'M89'},
 {date:'2026-07-06T06:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M76', away:'Winner M78', venue:'New York/NJ', code:'M91'},
 {date:'2026-07-06T10:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M79', away:'Winner M80', venue:'Mexico City', code:'M92'},
 {date:'2026-07-07T05:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M83', away:'Winner M84', venue:'Dallas', code:'M93'},
 {date:'2026-07-07T10:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M81', away:'Winner M82', venue:'Seattle', code:'M94'},
 {date:'2026-07-08T02:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M86', away:'Winner M88', venue:'Atlanta', code:'M95'},
 {date:'2026-07-08T06:00:00+10:00', stage:'Round of 16', group:'', home:'Winner M85', away:'Winner M87', venue:'Vancouver', code:'M96'},
 {date:'2026-07-10T06:00:00+10:00', stage:'Quarter-final', group:'', home:'Winner M89', away:'Winner M90', venue:'Boston', code:'M97'},
 {date:'2026-07-11T05:00:00+10:00', stage:'Quarter-final', group:'', home:'Winner M93', away:'Winner M94', venue:'Los Angeles', code:'M98'},
 {date:'2026-07-12T07:00:00+10:00', stage:'Quarter-final', group:'', home:'Winner M91', away:'Winner M92', venue:'Miami', code:'M99'},
 {date:'2026-07-12T11:00:00+10:00', stage:'Quarter-final', group:'', home:'Winner M95', away:'Winner M96', venue:'Kansas City', code:'M100'},
 {date:'2026-07-15T05:00:00+10:00', stage:'Semi-final', group:'', home:'Winner M97', away:'Winner M98', venue:'Dallas', code:'M101'},
 {date:'2026-07-16T05:00:00+10:00', stage:'Semi-final', group:'', home:'Winner M99', away:'Winner M100', venue:'Atlanta', code:'M102'},
 {date:'2026-07-19T07:00:00+10:00', stage:'Third-place play-off', group:'', home:'Loser M101', away:'Loser M102', venue:'Miami', code:'M103'},
 {date:'2026-07-20T05:00:00+10:00', stage:'Final', group:'', home:'Winner M101', away:'Winner M102', venue:'New York/NJ', code:'M104'}
];
let fixtures = JSON.parse(localStorage.getItem('fixtures')||'null') || defaultFixtures;
let manualResults = {};
let liveResults = {};
let lastLiveUpdate = localStorage.getItem('lastLiveUpdate') || '';
let liveEnabled = localStorage.getItem('liveEnabled') !== 'false';

async function loadManualResultsFromSupabase(){
  const { data, error } = await supabase.from('scores').select('*');
  if(error){
    console.error('Could not load Supabase scores:', error);
    const notice = document.getElementById('apiNotice');
    if(notice) notice.innerHTML = 'Supabase scores could not load. Check your Supabase table and policy.';
    return;
  }
  manualResults = {};
  (data || []).forEach(row => {
    if(row.match_id === 'test-match') return;
    manualResults[row.match_id] = { h: row.home_score, a: row.away_score };
  });
}

async function saveManualResultToSupabase(matchId, homeScore, awayScore){
  const { error } = await supabase.from('scores').upsert({
    match_id: String(matchId),
    home_score: Number(homeScore),
    away_score: Number(awayScore),
    updated_at: new Date().toISOString()
  });
  if(error){
    console.error('Could not save Supabase score:', error);
    alert('Score could not be saved. Check your Supabase table and Row Level Security policy.');
  }
}

async function clearManualResultsFromSupabase(){
  const { error } = await supabase.from('scores').delete().neq('match_id', 'test-match');
  if(error){
    console.error('Could not clear Supabase scores:', error);
    alert('Scores could not be reset. Check Supabase permissions.');
  }
}

const aliases = {
  'United States':'USA','USMNT':'USA','U.S.':'USA','USA':'USA','Iran':'IR Iran','IR Iran':'IR Iran','Türkiye':'Turkiye','Turkey':'Turkiye','Côte d’Ivoire':"Cote d'Ivoire",'Côte d\'Ivoire':"Cote d'Ivoire",'Ivory Coast':"Cote d'Ivoire",'DR Congo':'Congo DR','Democratic Republic of Congo':'Congo DR','Korea Republic':'South Korea','South Korea':'South Korea','Cape Verde':'Cabo Verde','Cabo Verde':'Cabo Verde','Bosnia-Herzegovina':'Bosnia and Herzegovina','Czech Republic':'Czechia','Curacao':'Curacao','Curaçao':'Curacao'
};
function normTeam(t){ return aliases[t] || t; }
function keyFor(home, away){ return `${normTeam(home)}|${normTeam(away)}`; }
function resultFor(i){ return liveResults[i] || manualResults[i]; }
function flag(team){ const c=codes[normTeam(team)]; if(!c)return '🏳️'; if(c.includes('-')) return c==='GB-ENG'?'🏴':c==='GB-SCT'?'🏴':'🏳️'; return c.replace(/./g,ch=>String.fromCodePoint(127397+ch.charCodeAt())); }
function owners(team){return people.filter(p=>p.teams.includes(normTeam(team))).map(p=>p.name)}
function isRealTeam(t){ return !!codes[normTeam(t)]; }
function fmt(d){return new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',hour12:true,timeZoneName:'short'}).format(new Date(d))}
function shortFmt(d){return new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',hour12:true}).format(new Date(d))}
function avatar(name){ const img=localStorage.getItem('photo_'+name); return `<div class="avatar">${img?`<img src="${img}">`:name[0]}</div>`; }
function teamPill(t){return `<span class="pill">${flag(t)} ${t}</span>`}

function calcTeamStats(){
  const stats={}; Object.keys(codes).forEach(t=>stats[t]={points:0,played:0,wins:0,draws:0,losses:0,gf:0,ga:0});
  fixtures.forEach((m,i)=>{const r=resultFor(i); if(!r||r.h===''||r.a===''||!isRealTeam(m.home)||!isRealTeam(m.away))return; const h=+r.h,a=+r.a, home=normTeam(m.home), away=normTeam(m.away); if(!stats[home]||!stats[away])return; stats[home].played++; stats[away].played++; stats[home].gf+=h; stats[home].ga+=a; stats[away].gf+=a; stats[away].ga+=h; if(h>a){stats[home].points+=3; stats[home].wins++; stats[away].losses++;} else if(a>h){stats[away].points+=3; stats[away].wins++; stats[home].losses++;} else {stats[home].points++; stats[away].points++; stats[home].draws++; stats[away].draws++;}});
  return stats;
}
function personStats(){ const ts=calcTeamStats(); return people.map(p=>({ ...p, points:p.teams.reduce((s,t)=>s+(ts[t]?.points||0),0), played:p.teams.reduce((s,t)=>s+(ts[t]?.played||0),0), wins:p.teams.reduce((s,t)=>s+(ts[t]?.wins||0),0)})).sort((a,b)=>b.points-a.points||b.wins-a.wins||a.name.localeCompare(b.name));}

function renderLeaderboard(){document.getElementById('leaderboardCards').innerHTML=personStats().map((p,i)=>`<article class="card"><div class="person-head"><span class="rank">#${i+1}</span>${avatar(p.name)}<div><h3>${p.name}</h3><div class="stats"><b>${p.points} pts</b><span>${p.played} results</span><span>${p.wins} wins</span></div></div></div><div class="teams">${p.teams.map(teamPill).join('')}</div></article>`).join('')}
function renderIndividuals(){document.getElementById('individualCards').innerHTML=people.map(p=>`<article class="card"><div class="person-head">${avatar(p.name)}<div><h3>${p.name}</h3><label class="muted">Upload face photo <input type="file" accept="image/*" onchange="savePhoto(event,'${p.name}')"></label></div></div><div class="teams">${p.teams.map(teamPill).join('')}</div></article>`).join('')}
function renderTeams(q=''){ const ts=calcTeamStats(); const rows=[]; people.forEach(p=>p.teams.forEach(t=>rows.push({team:t,person:p.name,pts:ts[t]?.points||0,played:ts[t]?.played||0}))); document.getElementById('teamGrid').innerHTML=rows.filter(r=>(r.team+' '+r.person).toLowerCase().includes(q.toLowerCase())).sort((a,b)=>a.team.localeCompare(b.team)).map(r=>`<div class="team-row"><span>${flag(r.team)} <b>${r.team}</b><small>${r.played}P · ${r.pts} pts</small></span><span class="owner">${r.person}</span></div>`).join('')}
function renderStatus(){
  const status=document.getElementById('liveStatus');
  const liveCount=Object.keys(liveResults).length;
  const mode=liveEnabled?'Automatic live scoring':'Manual scoring only';
  status.innerHTML = `<b>${mode}</b><span>${liveCount} API results matched</span><span>${lastLiveUpdate ? 'Last checked ' + lastLiveUpdate : 'Not checked yet'}</span>`;
}
function renderSchedule(){ const now=new Date(); const upcoming=fixtures.find(m=>new Date(m.date)>now)||fixtures[0]; document.getElementById('nextMatch').textContent = `${flag(upcoming.home)} ${upcoming.home} v ${flag(upcoming.away)} ${upcoming.away} — ${fmt(upcoming.date)}`; const filter=document.getElementById('scheduleFilter')?.value || 'all'; const list=fixtures.filter((m,i)=>filter==='all'||(filter==='results'&&resultFor(i))||(filter==='upcoming'&&new Date(m.date)>now)||(filter==='knockout'&&m.stage&&!m.stage.startsWith('Group'))); document.getElementById('scheduleList').innerHTML=list.map((m)=>{const i=fixtures.indexOf(m); const r=resultFor(i); const live=liveResults[i]; return `<div class="match"><div class="muted">${shortFmt(m.date)}</div><div><div class="match-teams">${flag(m.home)} ${m.home} v ${flag(m.away)} ${m.away} ${r?`<span class="score-badge">${r.h}-${r.a}</span>`:''} ${live?`<span class="live-badge">API</span>`:''}</div><div class="muted">${m.code ? m.code + ' · ' : ''}${m.stage || ('Group ' + m.group)} · ${m.venue}</div></div><div class="muted">${[...new Set([...owners(m.home),...owners(m.away)])].join(', ')}</div></div>`}).join('')}
function renderScores(){document.getElementById('scoreForms').innerHTML=fixtures.map((m,i)=>{const r=manualResults[i]||{h:'',a:''}; const live=liveResults[i]; return `<div class="score-card"><div><b>${flag(m.home)} ${m.home} v ${flag(m.away)} ${m.away}</b><br><span class="muted">${fmt(m.date)} ${live?`· API result ${live.h}-${live.a}`:''}</span></div><input type="number" min="0" value="${r.h}" data-i="${i}" data-side="h"><input type="number" min="0" value="${r.a}" data-i="${i}" data-side="a"><button onclick="saveScore(${i})">Save</button></div>`}).join('')}
function renderKnockout(){ const kos=fixtures.filter(m=>m.stage&&!m.stage.startsWith('Group')); const byStage={}; kos.forEach(m=>{(byStage[m.stage] ||= []).push(m)}); document.getElementById('bracket').innerHTML=Object.entries(byStage).map(([stage,ms])=>`<div class="bracket-col"><h3>${stage}</h3>${ms.map(m=>`<div class="bracket-match"><span>${m.code||''}</span><b>${m.home}</b><em>v</em><b>${m.away}</b><small>${shortFmt(m.date)} · ${m.venue}</small></div>`).join('')}</div>`).join('')}
function renderAll(){renderLeaderboard(); renderIndividuals(); renderTeams(document.getElementById('teamSearch')?.value||''); renderSchedule(); renderScores(); renderKnockout(); renderStatus();}

async function saveScore(i){ const inputs=[...document.querySelectorAll(`[data-i="${i}"]`)]; const homeScore=inputs.find(x=>x.dataset.side==='h').value; const awayScore=inputs.find(x=>x.dataset.side==='a').value; manualResults[i]={h:homeScore,a:awayScore}; await saveManualResultToSupabase(i, homeScore, awayScore); renderAll(); }
function savePhoto(e,name){ const f=e.target.files[0]; if(!f)return; const reader=new FileReader(); reader.onload=()=>{localStorage.setItem('photo_'+name,reader.result); renderAll()}; reader.readAsDataURL(f); }

async function refreshLiveResults(){
  if(!liveEnabled) return;
  const btn=document.getElementById('refreshLive'); if(btn) btn.textContent='Checking…';
  try{
    const res=await fetch('/api/results?ts='+Date.now());
    const data=await res.json();
    if(!data.configured){ throw new Error('API key not configured'); }
    liveResults={};
    const lookup={}; fixtures.forEach((m,i)=>{ lookup[keyFor(m.home,m.away)] = i; lookup[keyFor(m.away,m.home)] = i; });
    (data.matches||[]).forEach(m=>{ const idx=lookup[keyFor(m.home,m.away)]; if(idx!==undefined && m.h!==null && m.a!==null) liveResults[idx]={h:m.h,a:m.a,status:m.status,source:'api'}; });
    lastLiveUpdate=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',hour:'numeric',minute:'2-digit',day:'numeric',month:'short'}).format(new Date());
    localStorage.setItem('lastLiveUpdate',lastLiveUpdate);
  }catch(err){
    console.warn(err);
    document.getElementById('apiNotice').innerHTML='Automatic API scoring is ready, but your Vercel API key is not configured yet. Add <b>API_FOOTBALL_KEY</b> in Vercel Environment Variables, then redeploy.';
  }finally{ if(btn) btn.textContent='Refresh live scores'; renderAll(); }
}

document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab,.view').forEach(x=>x.classList.remove('active')); b.classList.add('active'); document.getElementById(b.dataset.view).classList.add('active')});
document.getElementById('teamSearch').oninput=e=>renderTeams(e.target.value);
document.getElementById('scheduleFilter').onchange=renderSchedule;
document.getElementById('refreshLive').onclick=refreshLiveResults;
document.getElementById('toggleLive').onclick=()=>{liveEnabled=!liveEnabled; localStorage.setItem('liveEnabled',liveEnabled); if(liveEnabled) refreshLiveResults(); else {liveResults={}; renderAll();}};
document.getElementById('resetScores').onclick=async()=>{manualResults={}; await clearManualResultsFromSupabase(); renderAll()};
document.getElementById('downloadSchedule').onclick=()=>{const csv='date_aest,stage,code,home,away,venue\n'+fixtures.map(m=>`"${fmt(m.date)}","${m.stage || ('Group '+m.group)}","${m.code||''}","${m.home}","${m.away}","${m.venue}"`).join('\n'); const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'})); a.download='world-cup-2026-aest-schedule.csv'; a.click();};
document.getElementById('fixtureImport').onchange=e=>{const f=e.target.files[0]; if(!f)return; const reader=new FileReader(); reader.onload=()=>{fixtures=JSON.parse(reader.result); localStorage.setItem('fixtures',JSON.stringify(fixtures)); renderAll()}; reader.readAsText(f);};
(async function init(){
  await loadManualResultsFromSupabase();
  renderAll();
  await refreshLiveResults();
  setInterval(refreshLiveResults, 5*60*1000);
})();
