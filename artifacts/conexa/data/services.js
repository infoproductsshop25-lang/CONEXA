const services = [
  // ==========================================
  // BLOQUE 1: WEB & RENDIMIENTO
  // ==========================================
  {
    id: "web-low",
    title: "Aceleración de Velocidad Web",
    price: 49,
    time: "24h",
    category: "Web & Rendimiento",
    tier: "Bajo",
    slug: "aceleracion-velocidad-web",
    stripeUrl: "https://buy.stripe.com/3cI6oJ2qNg8C179bvK0gw0d",
    subtitle: "Haz que tu web cargue en menos de 2 segundos y retén a tus clientes.",
    problem:
      "Una web lenta destruye tus conversiones. Si un cliente espera más de 3 segundos frente a una pantalla en blanco en su teléfono, se va con la competencia y Google hunde tu posición.",
    solution: [
      "Compresión y conversión masiva de imágenes a formatos ligeros de nueva generación (WebP).",
      "Minificación y depuración de código crítico (HTML, CSS y JavaScript).",
      "Configuración de sistema de caché avanzado y optimización de entrega para móviles.",
    ],
  },
  {
    id: "web-mid",
    title: "Terminal Virtual de Cobro In Situ",
    price: 79,
    time: "24h",
    category: "Web & Rendimiento",
    tier: "Medio",
    slug: "terminal-virtual-cobro-in-situ",
    stripeUrl: "https://buy.stripe.com/28E28taXj8Ga8zB0R60gw0e",
    subtitle: "Cobra al instante desde tu móvil con tarjeta o Bizum sin pagar cuotas fijas de datáfono.",
    problem:
      "Tener que esperar a transferencias bancarias lentas o depender de datáfonos físicos con cuotas de mantenimiento mensual hace que pierdas cobros in situ tras terminar una reparación o servicio.",
    solution: [
      "Despliegue de web-app/PWA con teclado táctil corporativo para teclear el importe en segundos.",
      "Generación de código QR dinámico y enlace directo para pago móvil (Apple Pay, Google Pay, Bizum y tarjeta).",
      "Configuración de pasarela Stripe segura a tu cuenta bancaria sin costes fijos de mantenimiento.",
      "Emisión de justificante digital de pago al segundo por correo o WhatsApp para tu cliente.",
    ],
  },
  {
    id: "web-high",
    title: "Landing Page One-Page Exprés",
    price: 149,
    time: "48h",
    category: "Web & Rendimiento",
    tier: "Alto",
    slug: "landing-page-one-page-expres",
    stripeUrl: "https://buy.stripe.com/5kQ7sN4yVe0u7vx6bq0gw0f",
    subtitle: "Tu máquina de captación online lista para facturar en 48 horas.",
    problem:
      "Las páginas tradicionales con 10 pestañas aburridas no convierten. Necesitas un embudo directo de una sola página que dirija la atención hacia la llamada o el mensaje de WhatsApp.",
    solution: [
      "Diseño responsive en una sola página (One-Page) estructurado 100% para captación comercial.",
      "Copywriting persuasivo adaptado a tu sector: Hero, Beneficios, Servicios y Prueba Social.",
      "Integración de botones directos a WhatsApp, llamada rápida y formulario verificado.",
      "Publicación y conexión técnica con tu dominio corporativo.",
    ],
  },

  // ==========================================
  // BLOQUE 2: CAPTACIÓN & AUTOMATIZACIÓN
  // ==========================================
  {
    id: "cap-low",
    title: "Auditoría Google Maps / SEO Local",
    price: 49,
    time: "24h",
    category: "Captación & Automatización",
    tier: "Bajo",
    slug: "auditoria-google-maps-seo-local",
    stripeUrl: "https://buy.stripe.com/7sYcN7d5r1dI9DF8jy0gw0g",
    subtitle: "Aparece en los primeros resultados de búsqueda cuando busquen tu servicio en tu ciudad.",
    problem:
      "Cuando un cliente busca en Google un profesional cerca de su ubicación, encuentra a tu competencia. Tu ficha de Maps no está optimizada y estás regalando clientes de tu propio barrio.",
    solution: [
      "Auditoría y corrección técnica completa de tu ficha de Google Business Profile (NAP y categorías).",
      "Selección de 15 palabras clave locales de alta intención de compra.",
      "Textos optimizados listos para copiar en descripciones y catálogo de servicios de Google.",
      "Plantilla probada para pedir reseñas a clientes satisfechos y responder quejas de forma profesional.",
    ],
  },
  {
    id: "cap-mid",
    title: "Sistema Completo de Email Automation",
    price: 79,
    time: "24h",
    category: "Captación & Automatización",
    tier: "Medio",
    slug: "sistema-email-automation",
    stripeUrl: "https://buy.stripe.com/5kQ4gB2qN1dI03557m0gw0h",
    subtitle: "Convierte contactos fríos en compradores recurrentes en piloto automático.",
    problem:
      "Capturar correos o teléfonos no sirve de nada si no mantienes el contacto. Si solo mandas promociones frías o no envías nada tras una compra, el cliente se olvida de ti y no vuelve.",
    solution: [
      "Secuencia automatizada de 3 correos estratégicos: Bienvenida y autoridad, Seguimiento de servicio y Fidelización/Petición de reseña.",
      "Redacción persuasiva con el tono corporativo de tu negocio orientada a generar respuesta.",
      "Configuración e integración técnica en tu plataforma de email marketing (Brevo o MailerLite).",
    ],
  },
  {
    id: "cap-high",
    title: "Chatbot de Respuestas & Captura de Leads",
    price: 129,
    time: "48h",
    category: "Captación & Automatización",
    tier: "Alto",
    slug: "chatbot-respuestas-captura-leads",
    stripeUrl: "https://buy.stripe.com/aFa14pd5rg8C179bvK0gw0i",
    subtitle: "Atiende clientes las 24 horas del día y recoge presupuestos mientras duermes.",
    problem:
      "Muchos clientes buscan servicios por la tarde o en fin de semana. Si no reciben una respuesta inmediata a sus dudas básicas, cierran tu web y le escriben al siguiente negocio.",
    solution: [
      "Instalación del widget de chat interactivo en tu página sin ralentizar la velocidad.",
      "Programación de flujos de respuesta para las preguntas más habituales (horarios, zonas, tarifas base).",
      "Captura obligatoria de datos de contacto (nombre y teléfono) antes de transferir la consulta.",
      "Aviso inmediato a tu correo o móvil con los datos de cada lead cualificado en tiempo real.",
    ],
  },

  // ==========================================
  // BLOQUE 3: MARCA & CONFIANZA DIGITAL
  // ==========================================
  { 
    id: 'brand-low', 
    title: 'Sistema NFC & QR de Reseñas Directas de Google', 
    price: 49, time: '24h', category: 'Marca & Confianza', tier: 'Bajo',
    slug: 'resenas-google-nfc-qr',
    stripeUrl: 'https://buy.stripe.com/00wfZjc1n5tYcPRdDS0gw0j',
    subtitle: 'Consigue valoraciones de 5 estrellas al instante en tu mostrador sin fricción.',
    problem: 'El 90% de los clientes satisfechos dicen que dejarán una reseña en Google, pero nunca lo hacen porque les da pereza buscar el negocio y encontrar el botón de valorar.',
    solution: [
      'Enlace oficial directo acortado que abre el pop-up de 5 estrellas en 1 segundo.',
      'Diseño corporativo de alta resolución listo para imprimir en adhesivo o soporte de mostrador.',
      'Codificación y archivo listo para vincular a cualquier pegatina o placa NFC.'
    ]
  },
  { 
    id: 'brand-mid', 
    title: 'Adaptación Legal Web + RGPD', 
    price: 89, time: '24h', category: 'Marca & Confianza', tier: 'Medio',
    slug: 'adaptacion-legal-web-rgpd',
    stripeUrl: 'https://buy.stripe.com/5kQ9AVd5r7C62bd43i0gw0k',
    subtitle: 'Protege tu negocio frente a multas de protección de datos con textos en regla.',
    problem: 'Copiar avisos legales de otras páginas o no contar con un banner de cookies real deja a tu empresa expuesta a inspecciones y sanciones graves de la Agencia Española de Protección de Datos.',
    solution: [
      'Redacción personalizada de Aviso Legal, Política de Privacidad y Política de Cookies adaptadas a tu actividad.',
      'Configuración e instalación del banner técnico de cookies por niveles conforme a la normativa europea.',
      'Inyección de la primera capa legal informativa con casilla obligatoria en tus formularios de contacto.'
    ]
  },
  { 
    id: 'brand-high', 
    title: 'Blindaje de Cabeceras HTTP & Certificación A+', 
    price: 139, time: '48h', category: 'Marca & Confianza', tier: 'Alto',
    slug: 'blindaje-cabeceras-http-seguridad',
    stripeUrl: 'https://buy.stripe.com/8x2cN78PbbSmaHJeHW0gw0l',
    subtitle: 'Protección perimetral de servidor contra inyecciones y robo de datos.',
    problem: 'La mayoría de webs corporativas tienen calificación F en auditorías de seguridad, careciendo de cabeceras CSP, HSTS y directivas anti-clickjacking, dejando el dominio vulnerable.',
    solution: [
      'Configuración en servidor de las directivas de seguridad críticas (CSP, HSTS, X-Frame-Options).',
      'Ocultación de cabeceras informativas de versión de servidor frente a escaneos automatizados.',
      'Comprobación y certificación oficial verificada con calificación A/A+ en securityheaders.com.',
      'Opción a cuota mensual de mantenimiento de directivas y excepciones por 29 €/mes.'
    ]
  }
];

export default services;
