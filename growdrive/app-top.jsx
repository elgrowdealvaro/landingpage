/* Top sections: Header, Hero, Problem, Pipeline funnel, "Lo más importante" cards */
const { useState } = React;

function Pill({ children, dot }) {
  return (
    <span className="pill">
      {dot && <span className="dot"></span>}
      {children}
    </span>
  );
}
window.Pill = Pill;

/* ─────────────────────────────────────────────  HEADER  ───────────────────────────────────────────── */
function Header() {
  const links = ["¿Cómo funciona?", "Precios", "Casos de éxito"];
  return (
    <header style={{background:"#0B2A34"}} className="sticky top-0 z-50 shadow-md">
      <div className="max-w-[1380px] mx-auto px-10 h-[83px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Ic.Logo s={28}/>
          <span className="logo-word text-white text-[22px]">GROWDRIVE</span>
        </div>
        <nav className="flex items-center gap-9">
          {links.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
        </nav>
        <a href="#cta" className="btn-primary text-[15px] px-5 py-2.5">Agendar demo</a>
      </div>
    </header>
  );
}
window.Header = Header;

/* ─────────────────────────────────────────────  HERO  ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="bg-hero-grad relative overflow-hidden">
      <div className="absolute inset-0 opacity-[.06]" style={{
        backgroundImage:"radial-gradient(rgba(255,255,255,.6) 1px, transparent 1px)",
        backgroundSize:"28px 28px"
      }}/>
      <div className="max-w-[1380px] mx-auto px-10 pt-24 pb-10 relative">
        <div className="flex justify-center mb-6">
          <Pill dot>Infraestructura outbound todo en uno</Pill>
        </div>
        <h1 className="h-display text-center max-w-[1066px] mx-auto" style={{textWrap:"balance"}}>
          <span className="text-white">Agenda reuniones calificadas en automático,</span><br/>
          <span style={{color:"#07CD72"}}>sin SDRs ni agencias.</span>
        </h1>
        <p className="text-white text-center max-w-[760px] mx-auto mt-5 text-[20px] leading-relaxed font-bold">
          Llegamos a tus clientes ideales con un sistema de outbound predecible.<br/>
          Infraestructura, IA y datos — todo en un solo lugar.
        </p>
        <div className="flex justify-center gap-4 mt-7">
          <a href="#cta" className="btn-primary">Inicia ahora <Ic.Arrow s={16}/></a>
          <a href="#how" className="btn-ghost">Agenda una demo</a>
        </div>

        {/* hero dashboard mock */}
        <div className="mt-10 max-w-[1094px] mx-auto rounded-[14px] overflow-hidden border-2"
          style={{borderColor:"#163040", boxShadow:"0 30px 80px rgba(0,0,0,.5), 0 0 0 1px rgba(7,213,119,.15)"}}>
          <img src="assets/hero-dashboard.png" alt="Dashboard" className="block w-full"/>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;

/* ─────────────────────────────────────────  PROBLEM SECTION  ───────────────────────────────────────── */
function Problem() {
  return (
    <section className="bg-white">
      <div className="max-w-[1174px] mx-auto px-10 py-24">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <Pill>Conocemos el problema</Pill>
            <h2 className="h-display-2 text-ink mt-5" style={{color:"#0B2731"}}>
              Contratas, entrenas… y el pipeline <span style={{color:"#07CD72"}}>sigue sin crecer.</span>
            </h2>
            <p className="text-[16px] mt-5 max-w-[420px]" style={{color:"#696969", fontWeight:700, lineHeight:1.45}}>
              Contratar equipos es lento, procesos manuales y alcance inconsistente generan más esfuerzo… y el pipeline sigue vacío.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 max-w-[460px]">
              {[
                {t:"Agencias", d:"Procesos opacos, poca personalización y cero control para tu equipo."},
                {t:"Alcance manual", d:"Te consume tiempo, es difícil de escalar y los resultados no son predecibles."},
                {t:"Más herramientas. Más procesos.\nMismos resultados", d:""},
              ].map((it,i)=>(
                <div key={i} className="card-grad card-line rounded-[10px] p-4 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-none" style={{borderColor:"#FF5252"}}>
                    <Ic.X c="#FF5252" s={16}/>
                  </div>
                  <div className="text-white text-[14px] leading-snug" style={{whiteSpace:"pre-line"}}>
                    <div className="font-black">{it.t.split('\n')[0]}</div>
                    {it.t.includes('\n') && <div className="font-black opacity-95">{it.t.split('\n').slice(1).join('\n')}</div>}
                    {it.d && <div className="text-[#C9C9C9] font-normal mt-1">{it.d}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right: image + stat cards */}
          <div className="relative">
            <div className="rounded-[26px] overflow-hidden border" style={{borderColor:"#979797"}}>
              <img src="assets/problem-bg.png" className="block w-full h-[520px] object-cover" alt=""/>
            </div>

            <div className="absolute right-6 top-8 w-[210px] card-grad card-line rounded-[10px] p-4">
              <div className="flex items-center justify-between text-[12px] text-[#C9C9C9] font-normal">
                <span>Tasa de respuesta</span>
                <span className="text-[#FF5252] flex items-center gap-1">▾ -3%</span>
              </div>
              <div className="text-white text-[28px] font-black mt-1">2%</div>
              <div className="mt-3 h-[6px] rounded-full bg-[#4A5354] overflow-hidden">
                <div className="h-full bg-[#FF7D00] rounded-full" style={{width:"15%"}}/>
              </div>
            </div>

            <div className="absolute right-6 top-[200px] w-[210px] card-grad card-line rounded-[10px] p-4">
              <div className="flex items-center justify-between text-[12px] text-[#C9C9C9] font-normal">
                <span>Reuniones / mes</span>
                <span className="text-[#FF5252]">▾</span>
              </div>
              <div className="text-white text-[28px] font-black mt-1">3%</div>
              <svg viewBox="0 0 160 30" className="mt-3 w-full h-[28px]">
                <polyline points="0,5 30,8 60,12 90,18 130,22 160,26" fill="none" stroke="#FF5252" strokeWidth="2"/>
                <circle cx="160" cy="26" r="2.5" fill="#FF5252"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Problem = Problem;

/* ─────────────────────────────────────────  PIPELINE FUNNEL  ───────────────────────────────────────── */
function Pipeline() {
  const node = (label, sub, color="#07D577") => (
    <div className="card-grad card-line rounded-[10px] px-4 py-3 text-center min-w-[160px]">
      <div className="text-[11px] tracking-widest" style={{color}}>{label}</div>
      {sub && <div className="text-white text-[13px] font-black mt-1">{sub}</div>}
    </div>
  );
  return (
    <section className="bg-white">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="rounded-[10px] card-grad card-line p-12">
          <div className="flex justify-center"><Pill dot>Infraestructura outbound todo en uno</Pill></div>
          <h2 className="h-display-2 text-white text-center mt-6 max-w-[760px] mx-auto">
            Infraestructura de pipeline<br/>que convierte esfuerzos en reuniones.
          </h2>

          <div className="mt-14 grid grid-cols-3 items-center gap-6 relative">
            {/* left entries */}
            <div className="space-y-3">
              <div className="text-[#07D577] text-[12px] tracking-[.2em] font-black">ENTRADAS</div>
              {node("MÚLTIPLES CANALES","Email · LinkedIn · Calls")}
              {node("CUENTAS Y DOMINIOS","Warm-up automático")}
              {node("DATOS B2B","ICP enrichment")}
            </div>

            {/* center funnel */}
            <div className="flex flex-col items-center justify-center relative">
              <div className="w-[210px] h-[210px] rounded-full funnel-glow flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1.5">
                  {Array.from({length:9}).map((_,i)=>(
                    <div key={i} className="w-7 h-7 rounded-md" style={{background:"rgba(7,213,119,.15)", border:"1px solid rgba(7,213,119,.5)"}}/>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-[#07D577] text-[12px] tracking-[.2em] font-black">SISTEMA GROWDRIVE</div>
              <div className="text-[#C9C9C9] text-[12px] mt-1 max-w-[240px] text-center font-normal">
                IA + Datos + Automatización + Warm-up trabajando en conjunto.
              </div>
              {/* arrows */}
              <img src="assets/arrow-channels.png" alt=""
                className="hidden md:block absolute -left-12 top-[40px] w-[260px] opacity-90 pointer-events-none"/>
              <img src="assets/arrow-meeting.png" alt=""
                className="hidden md:block absolute -right-10 top-[60px] w-[200px] opacity-90 pointer-events-none"/>
            </div>

            {/* right exit */}
            <div className="space-y-3">
              <div className="text-[#07D577] text-[12px] tracking-[.2em] font-black text-right">REUNIONES CALIFICADAS</div>
              <div className="card-grad card-line rounded-[10px] p-5 text-right">
                <div className="text-[#C9C9C9] text-[12px] font-normal">Pipeline incremental</div>
                <div className="flex items-end gap-1.5 justify-end mt-3 h-[60px]">
                  {[16,25,19,35,38,44,56].map((h,i)=>(
                    <div key={i} className="bar" style={{height:`${h}px`}}/>
                  ))}
                </div>
                <div className="text-white text-[12px] font-black mt-3">+312% vs mes anterior</div>
              </div>
              <div className="text-[#C9C9C9] text-[12px] text-right font-normal max-w-[180px] ml-auto">
                Reuniones calificadas en tu calendario. Dashboards claros para predecir resultados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Pipeline = Pipeline;
