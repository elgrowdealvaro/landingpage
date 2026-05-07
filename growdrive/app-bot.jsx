/* Bottom: "Por qué Growdrive" comparison + scaling CTA + final CTA + footer */

function WhyGrowdrive() {
  const rows = [
    {label:"Primeras reuniones", a:"4-8 semanas para empezar", b:"Idas y vueltas que retrasan", c:"Activamos todo y empezamos rápido"},
    {label:"Consistencia", a:"Dependencia de performance individual", b:"Resultados variables", c:"Sistema optimizado para resultados"},
    {label:"Eficiencia de costos", a:"Salarios, comisiones, herramientas", b:"Alto costo fijo", c:"Más reuniones, menor costo por resultado"},
    {label:"Escalabilidad", a:"Cada persona tiene un límite", b:"Difícil de escalar", c:"Infraestructura diseñada para crecer contigo"},
    {label:"Activo propio", a:"Empieza de nuevo cada vez", b:"No construyen activo", c:"Datos, aprendizajes y sistema acumulativo"},
  ];
  return (
    <section className="bg-white">
      <div className="max-w-[1380px] mx-auto px-10 py-24">
        <div className="text-center">
          <Pill>Por qué Growdrive</Pill>
          <h2 className="h-display-2 mt-5" style={{color:"#0B2731"}}>
            El problema no es el canal.<br/>Es el sistema.
          </h2>
          <p className="text-[#696969] mt-4 max-w-[820px] mx-auto" style={{fontWeight:400, lineHeight:1.5}}>
            La mayoría de equipos intenta escalar con personas o herramientas aisladas. Growdrive funciona como un sistema completo desde el día uno.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 items-stretch">
          {/* SDR */}
          <div className="card-grad card-line rounded-[10px] p-7">
            <div className="flex items-center gap-3 mb-2"><Ic.User c="#FF5252" s={22}/><span className="text-[#FF5252] font-black tracking-widest text-[12px]">SDR INTERNO</span></div>
            <p className="text-[#C9C9C9] text-[14px] font-normal mb-5">Dependes de contratar y entrenar personas. El pipeline crece lento, es inconsistente y difícil de escalar.</p>
            {["Lento para contratar","Inconsistencia","Alto costo fijo","Difícil de escalar","Rotación"].map(t=>(
              <div key={t} className="flex items-center gap-3 py-2 border-t border-[#203232] text-[13px] text-[#C9C9C9] font-normal">
                <Ic.X c="#FF5252" s={14}/> {t}
              </div>
            ))}
          </div>

          {/* Agencias */}
          <div className="card-grad card-line rounded-[10px] p-7">
            <div className="flex items-center gap-3 mb-2"><Ic.Building c="#FF5252" s={22}/><span className="text-[#FF5252] font-black tracking-widest text-[12px]">AGENCIAS</span></div>
            <p className="text-[#C9C9C9] text-[14px] font-normal mb-5">Delegas la ejecución sin control real. Mensajes genéricos, poca visibilidad y resultados que cambian cada mes.</p>
            {["Mensajes genéricos","Poca visibilidad","Resultados variables","Comunicación lenta","No construyen activo"].map(t=>(
              <div key={t} className="flex items-center gap-3 py-2 border-t border-[#203232] text-[13px] text-[#C9C9C9] font-normal">
                <Ic.X c="#FF5252" s={14}/> {t}
              </div>
            ))}
          </div>

          {/* Sistema (highlighted) */}
          <div className="rounded-[10px] p-7 neon-card">
            <div className="flex items-center gap-3 mb-2"><Ic.Cpu c="#12FF00" s={22}/><span className="text-[#12FF00] font-black tracking-widest text-[12px]">SISTEMA GROWDRIVE</span></div>
            <p className="text-[#C9C9C9] text-[14px] font-normal mb-5">Operas un sistema que genera reuniones de forma continua, con control total, consistencia y escalabilidad real.</p>
            {["Primeras reuniones en días","Consistencia y predictibilidad","Alta eficiencia de costos","Escalabilidad real","Activo que es tuyo"].map(t=>(
              <div key={t} className="flex items-center gap-3 py-2 border-t border-[#173E2B] text-[13px] text-white font-black">
                <Ic.Check c="#12FF00" s={14}/> {t}
              </div>
            ))}
          </div>
        </div>

        {/* metrics row */}
        <div className="mt-10 card-grad card-line rounded-[10px] p-8 grid grid-cols-4 gap-6 items-center">
          <div className="border-r border-[#173E2B] pr-6">
            <div className="text-[#07D577] font-black" style={{fontFamily:"Arial", fontSize:54}}>7 días</div>
            <div className="text-[#C9C9C9] text-[13px] font-normal mt-1">tiempo promedio para primeras reuniones</div>
          </div>
          <div className="border-r border-[#173E2B] pr-6">
            <div className="text-[#07D577] font-black" style={{fontFamily:"Arial", fontSize:54}}>3-10x</div>
            <div className="text-[#C9C9C9] text-[13px] font-normal mt-1">más reuniones vs métodos tradicionales</div>
          </div>
          <div className="border-r border-[#173E2B] pr-6">
            <div className="text-[#07D577] font-black" style={{fontFamily:"Arial", fontSize:54}}>-40%</div>
            <div className="text-[#C9C9C9] text-[13px] font-normal mt-1">costo por reunión en promedio</div>
          </div>
          <div className="text-white text-[18px] font-black leading-snug">
            Growdrive no es otra opción.<br/><span className="text-[#07D577]">Es la forma correcta de generar pipeline.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.WhyGrowdrive = WhyGrowdrive;

/* ─────────────────────────────────────────────  SCALING CTA  ───────────────────────────────────────── */
function ScalingCTA() {
  return (
    <section className="bg-white pb-24">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="card-grad card-line rounded-[10px] p-12 grid grid-cols-2 gap-10 items-center relative overflow-hidden">
          <img src="assets/team-bg.png" alt="" className="absolute right-0 top-0 h-full w-[60%] object-cover opacity-90"
               style={{maskImage:"linear-gradient(90deg, transparent 0, #000 30%)"}} />
          <div className="relative">
            <Pill dot>¿Listo para escalar tu pipeline?</Pill>
            <h2 className="h-display-2 text-white mt-5">
              Predecible. Escalable.<br/>Sin depender de personas.
            </h2>
            <p className="text-[#C9C9C9] mt-4 max-w-[420px]" style={{fontWeight:400, lineHeight:1.5}}>
              Agenda una demo y ve cómo Growdrive puede transformar tu pipeline.
            </p>
            <div className="flex gap-3 mt-8">
              <a href="#cta" className="btn-primary">Agendar demo</a>
              <a href="#cta" className="btn-ghost">Inicia ahora</a>
            </div>
            <div className="flex gap-6 mt-6 text-[12px] text-[#C9C9C9] font-arial">
              <span className="flex items-center gap-2"><Ic.CheckCircle c="#07C56E" s={16}/> Respuesta en &lt;24h</span>
              <span className="flex items-center gap-2"><Ic.Lock c="#07C56E" s={16}/> Sin compromiso.</span>
              <span className="flex items-center gap-2"><Ic.Building c="#07C56E" s={16}/> Solo trabajamos con empresas B2B</span>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[490px]">
              {[
                {t:"Sin contratos forzosos", d:"Elije tu plan. Cancela cuando quieras."},
                {t:"Setup ultra rápido", d:"7 días o menos"},
                {t:"Resultados medibles", d:"Experimenta, aprende, optimiza."},
              ].map((c,i)=>(
                <div key={i} className="rounded-[10px] p-4" style={{background:"linear-gradient(180deg,#0E292B 0%,#061213 100%)", border:"2px solid #203232"}}>
                  <div className="text-[#07D577] text-[13px] font-black leading-tight">{c.t}</div>
                  <div className="text-[#C9C9C9] text-[11px] font-black mt-1">{c.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* right: testimonial card on top of bg */}
          <div className="relative flex justify-end items-end h-[480px]">
            <div className="rounded-[10px] p-6 max-w-[420px]" style={{background:"linear-gradient(180deg,#0E292B 0%,#061213 100%)", border:"2px solid #203232", boxShadow:"0 30px 60px rgba(0,0,0,.5)"}}>
              <div style={{fontFamily:"Arial", fontWeight:900, fontSize:80, color:"rgba(78,180,74,.5)", lineHeight:.6}}>"</div>
              <p className="text-[#C9C9C9] text-[16px] -mt-4 leading-snug font-black">
                Pasamos de 2-3 reuniones al mes a más de 20 reuniones calificadas de forma consistente gracias a Growdrive.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-cover bg-center" style={{backgroundImage:`url(${window.__resources?.avatarMaria || "assets/avatar-maria.png"})`}}/>
                <div>
                  <div className="text-[#C9C9C9] text-[12px] font-black">María Fernanda S.</div>
                  <div className="text-[#C9C9C9] text-[8px] tracking-widest font-black">HEAD OF GROWTH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.ScalingCTA = ScalingCTA;

/* ─────────────────────────────────────────────  FINAL CTA + FOOTER  ───────────────────────────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="bg-footer-grad pt-24 pb-16">
      <div className="max-w-[1380px] mx-auto px-10">
        <div className="grid grid-cols-2 gap-16">
          {/* form */}
          <div className="text-white">
            <Pill dot>Activa tu pipeline</Pill>
            <h2 className="h-display-2 text-white mt-5">
              Empieza a generar reuniones esta semana.
            </h2>
            <p className="text-[#C9C9C9] mt-4 max-w-[440px]" style={{lineHeight:1.5, fontWeight:400}}>
              Te mostramos cómo se vería Growdrive en tu caso, con datos reales. Sin compromiso.
            </p>

            <form className="mt-8 space-y-3 max-w-[540px]" onSubmit={e=>e.preventDefault()}>
              <input className="field" placeholder="Tu nombre completo"/>
              <div className="grid grid-cols-2 gap-3">
                <input className="field" placeholder="Empresa"/>
                <input className="field" placeholder="Nombre"/>
              </div>
              <input className="field" placeholder="Email corporativo · tu@empresa.com" type="email"/>
              <button className="btn-primary w-full justify-center mt-2 text-[16px]" type="submit">
                <Ic.Calendar c="#0B2731" s={18}/>  QUIERO MÁS REUNIONES
              </button>
              <div className="flex items-center gap-6 mt-3 text-[12px] text-[#C9C9C9] font-arial">
                <span className="flex items-center gap-2"><Ic.CheckCircle c="#07C56E" s={16}/> Respuesta en &lt;24h</span>
                <span className="flex items-center gap-2"><Ic.Clock c="#07C56E" s={16}/> 15 min para evaluar tu caso</span>
              </div>
              <div className="flex items-center gap-6 mt-1 text-[12px] text-[#C9C9C9] font-arial">
                <span className="flex items-center gap-2"><Ic.Lock c="#07C56E" s={16}/> Tus datos están protegidos</span>
                <span className="flex items-center gap-2"><Ic.Shield c="#07C56E" s={16}/> Solo trabajamos con empresas B2B</span>
              </div>
            </form>
          </div>

          {/* right: what you'll get */}
          <div className="text-white pt-4">
            <h3 className="text-[#07C56E] font-black text-[22px] mb-6">En tu evaluación gratuita recibirás:</h3>
            <div className="space-y-6">
              {[
                {ic:<Ic.Trending c="#07D577" s={26}/>, t:"Proyección de resultados", d:"Te mostramos el potencial de reuniones y pipeline que podemos generar."},
                {ic:<Ic.Settings c="#07D577" s={26}/>, t:"Estrategia recomendada", d:"Te indicamos qué configuración es la óptima para tu caso y mercado."},
                {ic:<Ic.Bolt c="#07D577" s={26}/>, t:"Inversión y ROI estimado", d:"Entiendes la inversión, el retorno esperado y el impacto en tu negocio."},
                {ic:<Ic.Arrow c="#07D577" s={26}/>, t:"Próximos pasos", d:"Te guiamos en el plan de implementación para empezar rápido."},
              ].map((it,i)=>(
                <div key={i} className="flex gap-4">
                  <div className="flex-none w-10 h-10 rounded-[10px] flex items-center justify-center" style={{border:"2px solid #07D577"}}>{it.ic}</div>
                  <div>
                    <div className="text-white text-[18px] font-black">{it.t}</div>
                    <div className="text-[#C9C9C9] text-[14px] mt-1 font-normal" style={{lineHeight:1.45}}>{it.d}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* logos + rating */}
            <div className="mt-10">
              <div className="text-[#C9C9C9] text-[11px] tracking-widest font-black mb-4">EMPRESAS B2B QUE YA GENERAN MÁS REUNIONES</div>
              <div className="flex gap-3 items-center">
                {["DataLink","Routelogic","Procurex","Fleetiq"].map(l=>(
                  <div key={l} className="px-4 py-2 rounded-md text-[#C9C9C9] text-[14px] font-black" style={{background:"#D8D8D822"}}>{l}</div>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-5">
                {[1,2,3,4,5].map(i=><Ic.Star key={i} c="#07D577" s={20}/>)}
                <span className="text-[#C9C9C9] text-[12px] ml-2 font-arial">4.9/5 en satisfacción de clientes</span>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex items-center justify-between text-[#C9C9C9] text-[12px] font-arial">
          <div className="flex items-center gap-3">
            <Ic.Logo s={22}/>
            <span className="logo-word text-white text-[14px]">GROWDRIVE</span>
          </div>
          <div>© 2025 Growdrive. Todos los derechos reservados.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
            <a href="#" className="hover:text-white">Contacto</a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.FinalCTA = FinalCTA;
