/* Middle sections: "Lo más importante" cards, 6-step process, Market section */

function MostImportant() {
  return (
    <section className="bg-white">
      <div className="max-w-[1380px] mx-auto px-10 py-24">
        <div className="text-center">
          <Pill>Lo más importante</Pill>
          <h2 className="h-display-2 mt-5" style={{color:"#0B2731"}}>
            Convierte outbound en un sistema,<br/>no en esfuerzo manual.
          </h2>
          <p className="text-[#696969] mt-4 max-w-[820px] mx-auto" style={{fontWeight:400, lineHeight:1.5}}>
            Datos, IA, automatización y deliverability trabajando como un solo sistema. Growdrive reemplaza procesos dispersos
            con una infraestructura que ejecuta, optimiza y escala automáticamente para generar reuniones calificadas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6">
          {/* card 1 */}
          <div className="card-grad card-line rounded-[10px] p-7">
            <Ic.Layers c="#07D577" s={28}/>
            <h3 className="text-white text-[22px] font-black mt-6">Solo pagas por infraestructura</h3>
            <p className="text-[#C9C9C9] text-[15px] mt-2 font-black">Cuentas, dominios y warm-up automático</p>
            <div className="mt-7 rounded-[10px] p-4" style={{background:"linear-gradient(180deg,#0B2731 0%,#000 100%)", border:"1px solid #0A262F"}}>
              <div className="flex items-center justify-between mb-3">
                <Ic.Mail c="#07D577" s={18}/>
                <span className="text-[#07D577] text-[10px] tracking-widest font-black">99% UPTIME</span>
              </div>
              <svg viewBox="0 0 180 70" className="w-full h-[70px]">
                <polyline points="0,55 30,40 60,45 90,28 120,32 150,18 180,8" fill="none" stroke="#12FF00" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="180" cy="8" r="4" fill="#12FF00"/>
              </svg>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-white font-black" style={{fontFamily:"Arial", fontSize:40}}>99%</span>
                <span className="text-[#07D577] text-[12px] font-black tracking-widest">EXCELENTE</span>
              </div>
            </div>
          </div>

          {/* card 2 (tall middle) — IA + email */}
          <div className="card-grad card-line rounded-[10px] p-7 row-span-2">
            <Ic.Cpu c="#07D577" s={28}/>
            <h3 className="text-white text-[22px] font-black mt-6">IA personalizada</h3>
            <p className="text-[#C9C9C9] text-[15px] mt-2 font-black">Mensajes que no parecen un mass email.</p>

            <div className="mt-6 rounded-[10px] overflow-hidden bg-white text-[#0B2731]" style={{border:"1px solid #0A262F"}}>
              <div className="flex items-center gap-2 px-3 py-2.5 text-[12px]" style={{background:"#182325", color:"#07D577"}}>
                <Ic.Sparkle c="#07D577" s={14}/>
                <div className="leading-tight">
                  <div className="text-[#12FF00] font-arial">Mensaje generado por IA</div>
                  <div className="text-[#CCD0D4] text-[10px] font-arial">Personalizado para [Nombre prospecto]</div>
                </div>
              </div>
              <div className="px-4 py-3 text-[12px] font-arial">
                <div className="text-[#737373]">Para: <span className="text-[#0B2731]">luis@empresa.com</span></div>
                <div className="text-[#737373]">Asunto: <span className="text-[#0B2731] font-black">¿Tu pipeline depende de SDRs?</span></div>
              </div>
              <div className="border-t border-[#DADDE0]"/>
              <div className="px-4 py-4 text-[12px] leading-relaxed font-arial text-[#0B2731]" style={{minHeight:120}}>
                Hola Luis,<br/>
                Si hoy tu pipeline depende de contratar SDRs y entrenarlos por meses, hay una manera más predecible de generar reuniones calificadas — sin sumar headcount.<br/>
                ¿Te muestro cómo lo haríamos para [Empresa]?
              </div>
              <div className="border-t border-[#DADDE0]"/>
              <div className="px-4 py-3 flex items-center gap-2">
                <span className="px-2 py-1 rounded text-[10px] font-black" style={{background:"#07D577", color:"#0B2731"}}><Ic.Check c="#0B2731" s={10}/> Personalizado</span>
                <span className="px-2 py-1 rounded text-[10px] font-black" style={{background:"#0E292B", color:"#07D577", border:"1px solid #0A262F"}}>Orientado a resultados</span>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="card-grad card-line rounded-[10px] p-7">
            <Ic.Sparkle c="#07D577" s={28}/>
            <h3 className="text-white text-[22px] font-black mt-6">Reuniones calificadas</h3>
            <p className="text-[#C9C9C9] text-[15px] mt-2 font-black">No leads, no clicks. Sólo reuniones con decision-makers.</p>
            <div className="mt-7 grid grid-cols-3 gap-2 text-center">
              {[
                {n:"+23", l:"Reuniones / mes"},
                {n:"82%", l:"Asistencia"},
                {n:"4.9", l:"Calidad"},
              ].map((s,i)=>(
                <div key={i} className="rounded-[10px] py-3" style={{background:"linear-gradient(180deg,#0A262F 0%,#000 100%)", border:"1px solid #0A262F"}}>
                  <div className="text-[#07D577] font-black text-[22px]" style={{fontFamily:"Arial"}}>{s.n}</div>
                  <div className="text-[#C9C9C9] text-[10px] font-black mt-1 tracking-wide">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* card 4 */}
          <div className="card-grad card-line rounded-[10px] p-7">
            <Ic.Shield c="#07D577" s={28}/>
            <h3 className="text-white text-[22px] font-black mt-6">Dominio protegido</h3>
            <p className="text-[#C9C9C9] text-[15px] mt-2 font-black">Reputación blindada y entregabilidad optimizada</p>
            <div className="mt-7 rounded-[10px] p-4" style={{background:"linear-gradient(180deg,#0B2731 0%,#000 100%)", border:"1px solid #0A262F"}}>
              <div className="text-[#C9C9C9] text-[11px] font-black tracking-widest">DELIVERABILITY</div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-2 rounded-full bg-[#0E292B] overflow-hidden">
                  <div className="h-full" style={{width:"96%", background:"#12FF00"}}/>
                </div>
                <span className="text-[#12FF00] font-black text-[14px]">96%</span>
              </div>
              <div className="mt-3 text-[#C9C9C9] text-[11px] font-normal">Inbox placement vs. spam folder</div>
            </div>
          </div>

          {/* card 5 — A/B Testing */}
          <div className="card-grad card-line rounded-[10px] p-7">
            <Ic.Trending c="#07D577" s={28}/>
            <h3 className="text-white text-[22px] font-black mt-6">IA + A/B Testing</h3>
            <p className="text-[#C9C9C9] text-[15px] mt-2 font-black">Puedes probar, aprender y escalar lo que funciona.</p>
            <div className="mt-6 space-y-2">
              <div className="rounded-[10px] px-4 py-3 flex items-center justify-between" style={{border:"1px solid #979797"}}>
                <div className="text-[#C9C9C9] text-[12px] font-black tracking-widest">VARIANTE A</div>
                <div className="flex gap-6">
                  <div><div className="text-[10px] text-[#979797] font-black tracking-wide">RESPUESTA</div><div className="text-white font-black">24.7%</div></div>
                  <div><div className="text-[10px] text-[#979797] font-black tracking-wide">REUNIONES</div><div className="text-white font-black">36</div></div>
                </div>
              </div>
              <div className="rounded-[10px] px-4 py-3 flex items-center justify-between"
                style={{border:"1px solid #14B40C", background:"rgba(13,182,0,.16)"}}>
                <div className="text-[#12FF00] text-[12px] font-black tracking-widest">VARIANTE B ✓</div>
                <div className="flex gap-6">
                  <div><div className="text-[10px] text-[#12FF00] font-black tracking-wide">RESPUESTA</div><div className="text-white font-black">31.7%</div></div>
                  <div><div className="text-[10px] text-[#12FF00] font-black tracking-wide">REUNIONES</div><div className="text-white font-black">54</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.MostImportant = MostImportant;

/* ─────────────────────────────────────────  6-STEP PROCESS  ───────────────────────────────────────── */
function Process() {
  const steps = [
    {n:"01", t:"Define tu ICP", d:"Identificamos a tus clientes ideales con datos enriquecidos para enfocar el outbound donde sí convierte.", ic:<Ic.Eye c="#07D577" s={28}/>},
    {n:"02", t:"Configura tu infraestructura", d:"Lo sabemos… suena \"complicado\" pero para ti, Growdrive activa dominios, cuentas y canales listos para escalar sin afectar entregabilidad. Todo con un click.", ic:<Ic.Settings c="#07D577" s={28}/>},
    {n:"03", t:"La IA trabaja para ti", d:"Mensajes personalizados que se adaptan al contexto de cada prospecto y convierten en conversaciones.", ic:<Ic.Cpu c="#07D577" s={28}/>},
    {n:"04", t:"Lanza tus campañas", d:"Ejecutamos outreach multicanal optimizado para maximizar respuestas, no solo envíos.", ic:<Ic.Send c="#07D577" s={28}/>},
    {n:"05", t:"Pipeline incremental automático", d:"Las respuestas calificadas se convierten en reuniones directamente en tu calendario.", ic:<Ic.Calendar c="#07D577" s={28}/>},
    {n:"06", t:"Optimiza", d:"Ajustamos continuamente el sistema para mejorar resultados sin intervención manual.", ic:<Ic.Trending c="#07D577" s={28}/>},
  ];
  return (
    <section className="bg-white" id="how">
      <div className="max-w-[1380px] mx-auto px-10 py-24">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <Pill>Cómo funciona Growdrive</Pill>
            <h2 className="h-display-2 mt-5" style={{color:"#0B2731"}}>
              Un sistema en<br/>6 simples pasos
            </h2>
            <p className="text-[#696969] text-[16px] mt-5 max-w-[440px]" style={{lineHeight:1.5, fontWeight:400}}>
              De la configuración al pipeline, sin fricción. Growdrive convierte tu setup inicial en un sistema que genera pipeline de forma continua: un sistema que ejecuta, optimiza y escala tu outbound de forma predecible.
            </p>
            <a href="#cta" className="btn-primary mt-8">Inicia ahora <Ic.Arrow s={16}/></a>
          </div>
          <div className="rounded-[10px] overflow-hidden" style={{background:"#F6F6F6"}}>
            {steps.map((s,i)=>(
              <div key={s.n} className="flex items-start gap-5 px-7 py-6"
                   style={{borderBottom: i<steps.length-1 ? "1px solid #C9C9C9" : "none"}}>
                <div className="flex-none">{s.ic}</div>
                <div className="flex-1">
                  <div className="text-[#0B2731] text-[18px] font-black">{s.n} — {s.t}</div>
                  <div className="text-[#737373] text-[14px] mt-1.5 leading-relaxed font-normal">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.Process = Process;

/* ─────────────────────────────────────────  MARKET / PHOTO GRID  ───────────────────────────────────────── */
function Market() {
  const ind = [
    {ic:<Ic.Wrench c="#07D577" s={26}/>, t:"Mantenimiento\nindustrial"},
    {ic:<Ic.Lock c="#07D577" s={26}/>, t:"Seguridad\nprivada"},
    {ic:<Ic.Shop c="#07D577" s={26}/>, t:"Distribución\nindustrial"},
    {ic:<Ic.Sun c="#07D577" s={26}/>, t:"Instalación de\npaneles solares"},
    {ic:<Ic.Truck c="#07D577" s={26}/>, t:"Flotas\nespecializadas"},
    {ic:<Ic.Recycle c="#07D577" s={26}/>, t:"Gestión de\nresiduos"},
  ];
  // 5-photo collage using same image with crops
  const photos = [
    {top:0, left:0, w:154, h:356, x:"30% 20%"},
    {top:0, left:174, w:154, h:170, x:"70% 30%"},
    {top:186, left:174, w:154, h:170, x:"40% 80%"},
    {top:0, left:348, w:154, h:356, x:"20% 50%"},
    {top:0, left:522, w:154, h:170, x:"80% 60%"},
    {top:186, left:522, w:154, h:170, x:"50% 40%"},
  ];
  return (
    <section className="bg-white">
      <div className="max-w-[1380px] mx-auto px-10 py-24">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-3 gap-3">
            {[
              {h:280, p:"30% 30%"}, {h:200, p:"60% 50%"}, {h:240, p:"40% 70%"},
              {h:200, p:"80% 30%"}, {h:280, p:"20% 60%"}, {h:240, p:"50% 50%"},
            ].map((p,i)=>(
              <div key={i} className="photo-tile" style={{
                height:p.h,
                backgroundImage:`url(${window.__resources?.photo1 || "assets/photo1.png"})`,
                backgroundPosition:p.p,
              }}/>
            ))}
          </div>

          <div>
            <Pill>Nuestro mercado</Pill>
            <h2 className="h-display-2 mt-5" style={{color:"#0B2731"}}>
              Diseñado para empresas SaaS que quieren escalar.
            </h2>
            <p className="text-[#696969] mt-5 max-w-[440px]" style={{lineHeight:1.5, fontWeight:400}}>
              Si ya validaste tu mercado y quieres convertir tu outbound en un canal predecible y escalable, Growdrive es para ti.
            </p>

            <div className="mt-8">
              <div className="text-[#0B2731] font-black text-[15px] mb-4">Usado por equipos que venden a:</div>
              <div className="grid grid-cols-3 gap-3 max-w-[560px]">
                {ind.map((i,k)=>(
                  <div key={k} className="rounded-[10px] px-4 py-4 flex items-start gap-3" style={{border:"1px solid #07D577"}}>
                    <div className="flex-none">{i.ic}</div>
                    <div className="text-[#0B2731] text-[13px] font-black leading-tight" style={{whiteSpace:"pre-line"}}>{i.t}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-[#07D577] text-[13px] font-black">
                <Ic.CheckCircle c="#07D577" s={18}/> Solo para equipos B2B en crecimiento
              </div>
            </div>

            <a href="#cta" className="btn-primary mt-8">Ver tu evaluación B2B <Ic.Arrow s={16}/></a>
          </div>
        </div>

        {/* 3 testimonial mini cards */}
        <div className="grid grid-cols-3 gap-6 mt-20">
          {[
            {n:"Andrés M.", r:"CCO · Procurex SaaS", q:"Pasamos de no saber qué pasaba con nuestro outbound a tener un sistema que ejecuta, mide y mejora solo."},
            {n:"Camila R.", r:"VP Sales · DataLink", q:"Antes contratábamos SDRs cada trimestre. Ahora la infraestructura escala con nosotros."},
            {n:"Tomás A.", r:"Founder · Routelogic", q:"Las primeras reuniones llegaron en menos de 10 días. La predictibilidad fue lo que nos cerró."},
          ].map((t,i)=>(
            <div key={i} className="rounded-[10px] p-6" style={{border:"1px solid #C9C9C9", background:"#fff"}}>
              <p className="text-[#0B2731] text-[14px] leading-relaxed font-normal">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cover" style={{backgroundImage:`url(${window.__resources?.avatarMaria || "assets/avatar-maria.png"})`, filter:`hue-rotate(${i*40}deg)`}}/>
                <div>
                  <div className="text-[#0B2731] text-[13px] font-black">{t.n}</div>
                  <div className="text-[#737373] text-[11px] font-normal">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Market = Market;
