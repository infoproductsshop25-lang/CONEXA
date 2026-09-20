import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Clock3, Code2, FileCheck2, Gauge, Globe2, Mail, Menu, Palette, PenTool, Plus, Send, Settings2, ShoppingBag, Sparkles, Target, X, Zap } from 'lucide-react';

type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  price: string;
  time: string;
  icon: typeof Globe2;
  featured?: boolean;
};

const services: Service[] = [
  { id: 'web-express', number: '01 / WEB', title: 'Web exprés', description: 'Una web clara, rápida y lista para empezar a vender.', price: 'Desde 390 €', time: '5 días', icon: Globe2, featured: true },
  { id: 'tienda-online', number: '02 / WEB', title: 'Tienda online', description: 'Tu catálogo, pagos y pedidos en un mismo lugar.', price: 'Desde 690 €', time: '10 días', icon: ShoppingBag },
  { id: 'seo-local', number: '03 / CAPTACIÓN', title: 'SEO local', description: 'Más presencia cuando tus clientes te están buscando.', price: 'Desde 190 €', time: '7 días', icon: Target },
  { id: 'publicidad-digital', number: '04 / CAPTACIÓN', title: 'Publicidad digital', description: 'Campañas enfocadas a conseguir contactos de verdad.', price: 'Desde 240 €', time: '4 días', icon: Gauge },
  { id: 'automatizacion', number: '05 / AUTOMATIZACIÓN', title: 'Automatización', description: 'Menos tareas repetidas. Más tiempo para tu negocio.', price: 'Desde 320 €', time: '7 días', icon: Settings2, featured: true },
  { id: 'email-marketing', number: '06 / AUTOMATIZACIÓN', title: 'Email marketing', description: 'Mensajes que llegan en el momento adecuado.', price: 'Desde 180 €', time: '5 días', icon: Mail },
  { id: 'identidad-visual', number: '07 / MARCA', title: 'Identidad visual', description: 'Una marca reconocible, coherente y muy tuya.', price: 'Desde 450 €', time: '8 días', icon: Palette },
  { id: 'contenido-redes', number: '08 / MARCA', title: 'Contenido para redes', description: 'Ideas y piezas listas para mantenerte presente.', price: 'Desde 160 €', time: '5 días', icon: PenTool },
  { id: 'legal-web', number: '09 / LEGAL', title: 'Legal web', description: 'Textos legales imprescindibles, sin letra pequeña.', price: 'Desde 120 €', time: '3 días', icon: FileCheck2 },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const openRequest = (service?: Service) => {
    setSelectedService(service ?? null);
    setSubmitted(false);
    setIsModalOpen(true);
  };

  const scrollToServices = () => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="site-shell">
      <header className="topbar container-wide">
        <a className="brand" href="#inicio" data-testid="link-brand">
          <span className="brand-mark"><Zap size={16} strokeWidth={2.5} /></span>
          <span className="brand-name">CONEXA</span>
          <span className="brand-sub">Soluciones digitales</span>
        </a>
        <nav className="nav" aria-label="Navegación principal">
          <a href="#servicios" data-testid="link-services">Servicios</a>
          <a href="#metodo" data-testid="link-method">Cómo funciona</a>
          <a href="#contacto" data-testid="link-contact">Contacto</a>
          <button className="nav-cta" onClick={() => openRequest()} data-testid="button-header-request">Cuéntanos tu idea <ArrowRight size={14} /></button>
        </nav>
        <button className="mobile-menu" aria-label="Abrir menú" data-testid="button-mobile-menu"><Menu size={22} /></button>
      </header>

      <main>
        <section className="hero container-wide" id="inicio">
          <div className="hero-copy reveal">
            <div className="eyebrow">Servicios digitales exprés / 2024</div>
            <h1 className="display">Lo que tu negocio necesita. <em>Sin rodeos.</em></h1>
            <p className="hero-lede">Resolvemos tareas web, captación, automatización, marca y legal para que puedas seguir haciendo crecer tu negocio.</p>
            <div className="hero-actions">
              <button className="hero-cta" onClick={() => openRequest()} data-testid="button-hero-request">Cuéntanos qué necesitas <ArrowRight size={16} /></button>
              <button className="text-link" onClick={scrollToServices} data-testid="button-view-services">Ver servicios <ChevronDown size={15} /></button>
            </div>
            <div className="hero-note"><span className="live-dot" /> Respuesta inicial en menos de 24 h</div>
          </div>
          <div className="orbit-card reveal delay-2" aria-label="Áreas de servicio">
            <div className="orbit-core"><div><strong>CONEXA</strong><span>una solución<br />a la vez</span></div></div>
            <div className="orbit-label label-a">Web <Code2 size={12} /></div>
            <div className="orbit-label label-b">Captación <Target size={12} /></div>
            <div className="orbit-label label-c">Marca <Sparkles size={12} /></div>
            <div className="orbit-label label-d">Legal <FileCheck2 size={12} /></div>
            <div className="orbit-caption mono">DIAGNÓSTICO → EJECUCIÓN → RESULTADO</div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container-wide trust-inner">
            <p>Para autónomos y equipos pequeños que valoran su tiempo.</p>
            <div className="trust-items"><span>Directo</span><span>Medible</span><span>Sin permanencia</span><span>Con criterio</span></div>
          </div>
        </section>

        <section className="services container-wide" id="servicios">
          <div className="section-head">
            <div><div className="eyebrow">Qué hacemos</div><h2 className="display">Una solución concreta<br />para cada bloqueo.</h2></div>
            <p>Nueve servicios. Un punto de entrada. Elige el que necesitas hoy o cuéntanos el contexto y te orientamos.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className={`service-card ${service.featured ? 'featured' : ''}`} key={service.id} data-testid={`card-service-${service.id}`}>
                  <div className="service-number">{service.number}</div>
                  <Icon className="service-icon" size={21} strokeWidth={1.7} />
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                  <div className="service-meta"><b>{service.price}</b><span><Clock3 size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />{service.time}</span></div>
                  <button className="text-link" style={{ position: 'absolute', right: 20, bottom: 18 }} onClick={() => openRequest(service)} aria-label={`Solicitar ${service.title}`} data-testid={`button-request-${service.id}`}><Plus size={17} /></button>
                </article>
              );
            })}
          </div>
        </section>

        <section className="process" id="metodo">
          <div className="container-wide">
            <div className="eyebrow">Nuestro método</div>
            <h2 className="display">Poco ruido.<br />Mucho avance.</h2>
            <div className="steps">
              <div className="step"><span className="step-no">01</span><h3>Nos cuentas el contexto</h3><p>Una llamada breve o un mensaje. No necesitas saber cómo se llama lo que buscas.</p></div>
              <div className="step"><span className="step-no">02</span><h3>Te damos un plan cerrado</h3><p>Alcance, precio y fecha de entrega antes de empezar. Sin sorpresas a mitad de camino.</p></div>
              <div className="step"><span className="step-no">03</span><h3>Lo ponemos en marcha</h3><p>Trabajamos con foco y te enseñamos resultados, no presentaciones interminables.</p></div>
            </div>
          </div>
        </section>

        <section className="closing container-wide" id="contacto">
          <div className="eyebrow">¿Lo vemos?</div>
          <h2 className="display">Tu siguiente avance puede empezar hoy.</h2>
          <p>Cuéntanos qué necesitas. Te respondemos con claridad.</p>
          <button className="hero-cta" onClick={() => openRequest()} data-testid="button-closing-request">Abrir conversación <Send size={15} /></button>
        </section>
      </main>

      <footer className="footer container-wide">
        <span>© 2024 CONEXA / Soluciones digitales</span>
        <span>Hecho para avanzar, no para complicar.</span>
      </footer>

      {isModalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsModalOpen(false); }}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="modal-top"><div><h3 id="modal-title">{submitted ? 'Mensaje recibido.' : 'Hablemos de tu proyecto.'}</h3>{!submitted && <p>Cuatro datos nos ayudan a darte una respuesta útil, no una plantilla.</p>}</div><button className="close-button" onClick={() => setIsModalOpen(false)} aria-label="Cerrar" data-testid="button-close-modal"><X size={19} /></button></div>
            {submitted ? <div className="success-note"><Check size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Gracias. Revisaremos tu mensaje y te escribiremos en menos de 24 horas.</div> : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} data-testid="form-request">
                <div className="form-row"><div className="field"><label htmlFor="name">Tu nombre</label><input id="name" name="name" required placeholder="María García" data-testid="input-name" /></div><div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="hola@tuempresa.com" data-testid="input-email" /></div></div>
                <div className="field"><label htmlFor="service">Qué necesitas</label><select id="service" name="service" defaultValue={selectedService?.id ?? ''} data-testid="select-service"><option value="">Elige un servicio</option>{services.map((service) => <option value={service.id} key={service.id}>{service.title}</option>)}</select></div>
                <div className="field"><label htmlFor="message">Cuéntanos un poco más</label><textarea id="message" name="message" required placeholder="Qué quieres conseguir y para cuándo..." data-testid="input-message" /></div>
                <button className="hero-cta" type="submit" style={{ width: '100%', justifyContent: 'center' }} data-testid="button-submit-request">Enviar consulta <ArrowRight size={15} /></button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;