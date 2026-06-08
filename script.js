/* ===== DGO Tile Inc — draft site interactions + i18n ===== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   * Translations.  Each key maps to a chunk of innerHTML (markup OK).  *
   * English is also present in the HTML as the default/fallback.       *
   * ------------------------------------------------------------------ */
  var I18N = {
    en: {
      title: 'DGO Tile Inc | Pool Tile Installation & Pool Remodeling — Sacramento Valley',
      nav_home: 'Home', nav_services: 'Services', nav_about: 'About', nav_areas: 'Areas',
      nav_faq: 'FAQ', nav_contact: 'Contact', nav_quote: 'Get a Quote',
      cta_quote: 'Get a Quote <span aria-hidden="true">→</span>',

      hero_badge: 'Top-rated pool tile experts in the Sacramento Valley',
      hero_title: 'Specialists in pool tile<br />installation &amp; <span class="accent">pool remodeling.</span>',
      hero_sub: 'DGO Tile Inc crafts exceptional pool surfaces with precision and skill. We turn ordinary pools into stunning masterpieces across the Sacramento Valley.',
      stat_years: 'Years of Experience', stat_projects: 'Projects Completed', stat_satisfaction: 'Client Satisfaction',

      marquee: '<span>Tile mastery</span><span>•</span><span>Pool precision</span><span>•</span><span>Craft surfaces</span><span>•</span><span>Design vision</span><span>•</span><span>Build beauty</span><span>•</span><span>Expert touch</span><span>•</span><span>Transform spaces</span><span>•</span><span>Skilled work</span><span>•</span><span>Lasting quality</span><span>•</span><span>Tile artistry</span><span>•</span><span>Tile mastery</span><span>•</span><span>Pool precision</span><span>•</span><span>Craft surfaces</span><span>•</span><span>Design vision</span><span>•</span><span>Build beauty</span><span>•</span><span>Expert touch</span><span>•</span><span>Transform spaces</span><span>•</span><span>Skilled work</span><span>•</span><span>Lasting quality</span><span>•</span><span>Tile artistry</span><span>•</span>',

      feat1_t: 'Licensed &amp; Insured', feat1_s: 'Full insurance coverage',
      feat2_t: '20+ Years', feat2_s: 'Master craftsmanship',
      feat3_t: 'Free Estimates', feat3_s: 'On-site, no obligation',
      feat4_t: '500+ Projects', feat4_s: 'Residential &amp; commercial',
      feat5_t: '95% Satisfaction', feat5_s: 'Repeat &amp; referral clients',

      svc_eyebrow: '— Craft', svc_title: 'Our pool tile services',
      svc_lead: 'Transforming Sacramento Valley pools with expert craftsmanship — from waterline to deck, with uncompromising quality.',
      learn_more: 'Learn more <span aria-hidden="true">→</span>',
      svc1_tag: 'Pool', svc1_title: 'Pool Tile Services',
      svc1_desc: 'Precise installations creating lasting visual impact — waterline tile, mosaics, and accents in ceramic, porcelain, glass, and natural stone.',
      svc2_tag: 'Renew', svc2_title: 'Pool Remodeling',
      svc2_desc: 'Reimagine outdoor spaces with bold architectural vision — tile replacement, new coping, resurfacing, and complete design updates.',
      svc3_tag: 'Stone', svc3_title: 'Stone Installation',
      svc3_desc: 'Seamless integration of natural materials and design — travertine, flagstone, and decorative stone that frames your pool with timeless character.',
      svc4_tag: 'Build', svc4_title: 'Brick &amp; Hardscape Services',
      svc4_desc: "Functional landscapes extending your pool's architectural narrative — patios, walkways, and brickwork built to last.",
      svc5_tag: 'Accent', svc5_title: 'Specialty Applications',
      svc5_desc: 'Personalized touches that define individual style — custom mosaics, feature walls, and one-of-a-kind design details.',
      svc6_tag: 'Restore', svc6_title: 'Accent &amp; Decorative Features',
      svc6_desc: 'Breathing new life into weathered and damaged surfaces — repairs and restorations that make old pools look new again.',

      why_eyebrow: '— Trusted', why_title: 'Why DGO Tile stands<br />above other contractors',
      why_lead: "We build more than surfaces. We create enduring relationships through honest work and precise craftsmanship — pool experiences that stand against time and California's harsh elements.",
      why_badge: 'Repeat &amp; referral<br />client satisfaction',
      why1_t: 'Skilled experts', why1_s: 'Licensed contractors who understand the intricate demands of pool tile installation.',
      why2_t: 'Complete services', why2_s: 'Comprehensive pool solutions from waterline to deck with uncompromising quality.',
      why3_t: 'Regional pool experts', why3_s: 'Decades of solving unique pool challenges across the Sacramento Valley landscape.',
      why4_t: 'Quality commitment', why4_s: 'Premium materials and installations that withstand harsh California sun and constant use.',

      proc_eyebrow: '— How It Works', proc_title: 'From quote to finished pool',
      proc_lead: "Remodeling your pool shouldn't be stressful. Here's exactly what to expect when you work with DGO Tile.",
      step1_t: 'Request a Quote', step1_s: 'Call or fill out our quick form. Tell us about your pool and the look you have in mind.',
      step2_t: 'Free On-Site Estimate', step2_s: 'We visit, evaluate your specific needs, and provide a clear, honest estimate — no obligation.',
      step3_t: 'We Build It', step3_s: 'Our crew installs your tile, coping, or remodel with precision and clean, on-time work.',
      step4_t: 'Enjoy Your Pool', step4_s: 'Dive into a stunning finish built to last 15–20 years — backed by our materials &amp; workmanship warranty.',

      area_eyebrow: '— Areas We Serve', area_title: 'Proudly serving the<br />Sacramento Valley',
      area_lead: 'We proudly offer our expert tile contracting services across the greater Sacramento region and beyond — including Sacramento, Placer, El Dorado, Yolo, and Sutter counties.',

      rev_eyebrow: '— What Clients Say', rev_title: 'Craftsmanship that<br />speaks for itself',
      rev_lead: 'Real feedback from pool owners across the Sacramento Valley who trusted DGO Tile with their projects.',
      verified_customer: 'Verified Customer',
      rev1_q: '"Their craftsmanship speaks louder than words. These tile experts transformed our pool into a work of art that feels both timeless and modern."',
      rev1_loc: 'Homeowner, Placer County',
      rev2_q: '"Excellent job replacing the water line tile on our inground pool. Thorough, professional, courteous, and a genuinely hard worker."',
      rev3_q: '"Camilo is great — smart and honest. Repaired our pool tiles quickly at a very reasonable price. Highly recommend!"',

      ctaband_title: 'Ready to transform your pool?',
      ctaband_sub: "Get a free estimate and start your pool renovation journey with Sacramento's trusted tile experts.",

      faq_eyebrow: '— FAQs', faq_title: 'Frequently asked questions',
      faq_lead: 'Answers to common questions about our pool tile and remodeling services.',
      faq1_q: 'How long do tile installations last?',
      faq1_a: "Our premium installations typically last 15–20 years with proper maintenance. We use high-grade materials resistant to California's harsh sunlight and pool chemicals.",
      faq2_q: 'What areas do you serve?',
      faq2_a: 'We cover the entire Sacramento Valley including Sacramento, Placer, El Dorado, Yolo, and Sutter counties. Our local expertise ensures precise regional solutions.',
      faq3_q: 'Do you offer free estimates?',
      faq3_a: 'Yes, we provide complimentary on-site estimates for all pool tile and remodeling projects. Our team evaluates your specific needs with no obligation.',
      faq4_q: 'What tile materials do you use?',
      faq4_a: 'We work with ceramic, porcelain, natural stone, and glass tiles. Each material is carefully selected for durability, aesthetic appeal, and performance in pool environments.',
      faq5_q: 'Are you licensed and insured?',
      faq5_a: 'Absolutely. We are fully licensed contractors with comprehensive insurance coverage. Our credentials ensure professional, reliable service for every project.',
      faq6_q: 'How long do installations take?',
      faq6_a: 'Project timelines vary based on complexity. Typical pool tile installations range from 3–7 days. We provide detailed schedules during our initial consultation.',
      faq7_q: 'What about pool maintenance?',
      faq7_a: 'We offer guidance on maintaining your new tile surfaces. Regular cleaning and proper chemical balance will extend the life of your pool tile installation.',
      faq8_q: 'Can you match existing designs?',
      faq8_a: 'Our skilled team specializes in seamless design integration. We can match or complement existing pool aesthetics with precision and creativity.',
      faq9_q: 'Do you handle commercial projects?',
      faq9_a: 'Yes, we serve both residential and commercial clients across the Sacramento Valley. Our expertise extends to hotels, resorts, and public pool facilities.',
      faq10_q: 'What warranty do you offer?',
      faq10_a: 'We provide comprehensive warranties on materials and workmanship. Specific terms are discussed during project planning to ensure your complete satisfaction.',

      contact_eyebrow: '— Contact', contact_title: 'Get a quote',
      contact_lead: "Precision tile work that transforms your outdoor living space. Tell us about your pool project and we'll follow up with a clear, honest estimate — or call us directly.",
      contact_phone: 'Phone', contact_email: 'Email', contact_office: 'Office',
      contact_area: 'Service Area', contact_area_val: 'Greater Sacramento Valley &amp; nearby counties',
      form_name: 'Full Name', form_name_ph: 'Jane Doe',
      form_phone: 'Phone', form_email: 'Email',
      form_service: 'Service Needed', form_service_ph: 'Select a service…',
      form_opt_commercial: 'Commercial / Resort Pool', form_opt_other: 'Other',
      form_message: 'Tell us about your project', form_message_ph: "Pool size, what you'd like done, timeline…",
      form_submit: 'Send My Request <span aria-hidden="true">→</span>',
      form_note: '✓ Thanks! This is a demo form — connect it to your email or CRM to receive requests.',

      footer_blurb: 'Precision tile work that transforms your outdoor living space. Licensed pool tile contractor crafting durable, beautiful pool surfaces across the Sacramento Valley.',
      footer_services: 'Our Services', footer_brick: 'Brick &amp; Hardscape', footer_accent: 'Accent Features',
      footer_nav: 'Navigation', footer_areas: 'Service Areas', footer_reviews: 'Reviews', footer_touch: 'Get in Touch',
      footer_copy: '© 2026 DGO Tile Inc. All rights reserved.',
      footer_legal: 'Licensed &amp; Insured · Serving the Sacramento Valley'
    },

    es: {
      title: 'DGO Tile Inc | Instalación de Azulejos y Remodelación de Piscinas — Valle de Sacramento',
      nav_home: 'Inicio', nav_services: 'Servicios', nav_about: 'Nosotros', nav_areas: 'Áreas',
      nav_faq: 'Preguntas', nav_contact: 'Contacto', nav_quote: 'Cotización',
      cta_quote: 'Cotización <span aria-hidden="true">→</span>',

      hero_badge: 'Expertos en azulejos de piscina mejor calificados del Valle de Sacramento',
      hero_title: 'Especialistas en instalación de azulejos<br />y <span class="accent">remodelación de piscinas.</span>',
      hero_sub: 'DGO Tile Inc crea superficies de piscina excepcionales con precisión y destreza. Convertimos piscinas comunes en obras maestras impresionantes en todo el Valle de Sacramento.',
      stat_years: 'Años de Experiencia', stat_projects: 'Proyectos Completados', stat_satisfaction: 'Satisfacción del Cliente',

      marquee: '<span>Maestría en azulejos</span><span>•</span><span>Precisión en piscinas</span><span>•</span><span>Crear superficies</span><span>•</span><span>Visión de diseño</span><span>•</span><span>Construir belleza</span><span>•</span><span>Toque experto</span><span>•</span><span>Transformar espacios</span><span>•</span><span>Trabajo experto</span><span>•</span><span>Calidad duradera</span><span>•</span><span>Arte en azulejos</span><span>•</span><span>Maestría en azulejos</span><span>•</span><span>Precisión en piscinas</span><span>•</span><span>Crear superficies</span><span>•</span><span>Visión de diseño</span><span>•</span><span>Construir belleza</span><span>•</span><span>Toque experto</span><span>•</span><span>Transformar espacios</span><span>•</span><span>Trabajo experto</span><span>•</span><span>Calidad duradera</span><span>•</span><span>Arte en azulejos</span><span>•</span>',

      feat1_t: 'Con Licencia y Asegurado', feat1_s: 'Cobertura total de seguro',
      feat2_t: '20+ Años', feat2_s: 'Maestría artesanal',
      feat3_t: 'Presupuestos Gratis', feat3_s: 'En sitio, sin compromiso',
      feat4_t: '500+ Proyectos', feat4_s: 'Residencial y comercial',
      feat5_t: '95% Satisfacción', feat5_s: 'Clientes recurrentes y referidos',

      svc_eyebrow: '— Arte', svc_title: 'Nuestros servicios de azulejos',
      svc_lead: 'Transformamos las piscinas del Valle de Sacramento con artesanía experta — desde la línea de agua hasta el deck, con calidad sin concesiones.',
      learn_more: 'Saber más <span aria-hidden="true">→</span>',
      svc1_tag: 'Piscina', svc1_title: 'Azulejos para Piscinas',
      svc1_desc: 'Instalaciones precisas con impacto visual duradero — azulejo de línea de agua, mosaicos y acentos en cerámica, porcelana, vidrio y piedra natural.',
      svc2_tag: 'Renovar', svc2_title: 'Remodelación de Piscinas',
      svc2_desc: 'Reimagina los espacios exteriores con una visión arquitectónica audaz — reemplazo de azulejos, nueva coronación, resuperficie y actualizaciones de diseño completas.',
      svc3_tag: 'Piedra', svc3_title: 'Instalación de Piedra',
      svc3_desc: 'Integración perfecta de materiales naturales y diseño — travertino, laja y piedra decorativa que enmarcan tu piscina con un carácter atemporal.',
      svc4_tag: 'Construir', svc4_title: 'Ladrillo y Hardscape',
      svc4_desc: 'Paisajes funcionales que extienden la narrativa arquitectónica de tu piscina — patios, senderos y trabajos en ladrillo hechos para durar.',
      svc5_tag: 'Acento', svc5_title: 'Aplicaciones Especiales',
      svc5_desc: 'Toques personalizados que definen un estilo individual — mosaicos personalizados, muros destacados y detalles de diseño únicos.',
      svc6_tag: 'Restaurar', svc6_title: 'Acentos y Detalles Decorativos',
      svc6_desc: 'Dando nueva vida a superficies desgastadas y dañadas — reparaciones y restauraciones que hacen que las piscinas viejas luzcan como nuevas.',

      why_eyebrow: '— Confianza', why_title: 'Por qué DGO Tile destaca<br />sobre otros contratistas',
      why_lead: 'Construimos más que superficies. Creamos relaciones duraderas a través del trabajo honesto y la artesanía precisa — experiencias de piscina que resisten el tiempo y los duros elementos de California.',
      why_badge: 'Satisfacción de clientes<br />recurrentes y referidos',
      why1_t: 'Expertos calificados', why1_s: 'Contratistas con licencia que entienden las exigencias complejas de la instalación de azulejos para piscinas.',
      why2_t: 'Servicios completos', why2_s: 'Soluciones integrales para piscinas desde la línea de agua hasta el deck con calidad sin concesiones.',
      why3_t: 'Expertos regionales en piscinas', why3_s: 'Décadas resolviendo desafíos únicos de piscinas en todo el Valle de Sacramento.',
      why4_t: 'Compromiso con la calidad', why4_s: 'Materiales premium e instalaciones que resisten el duro sol de California y el uso constante.',

      proc_eyebrow: '— Cómo Funciona', proc_title: 'De la cotización a la piscina terminada',
      proc_lead: 'Remodelar tu piscina no debería ser estresante. Esto es exactamente lo que puedes esperar al trabajar con DGO Tile.',
      step1_t: 'Solicita una Cotización', step1_s: 'Llámanos o completa nuestro formulario rápido. Cuéntanos sobre tu piscina y el estilo que tienes en mente.',
      step2_t: 'Presupuesto Gratis en Sitio', step2_s: 'Te visitamos, evaluamos tus necesidades específicas y te damos un presupuesto claro y honesto — sin compromiso.',
      step3_t: 'Lo Construimos', step3_s: 'Nuestro equipo instala tus azulejos, coronación o remodelación con precisión y un trabajo limpio y puntual.',
      step4_t: 'Disfruta tu Piscina', step4_s: 'Sumérgete en un acabado impresionante hecho para durar 15–20 años — respaldado por nuestra garantía de materiales y mano de obra.',

      area_eyebrow: '— Áreas que Servimos', area_title: 'Con orgullo al servicio<br />del Valle de Sacramento',
      area_lead: 'Ofrecemos con orgullo nuestros servicios expertos de instalación de azulejos en toda la región de Sacramento y más allá — incluyendo los condados de Sacramento, Placer, El Dorado, Yolo y Sutter.',

      rev_eyebrow: '— Lo que Dicen los Clientes', rev_title: 'Artesanía que<br />habla por sí sola',
      rev_lead: 'Comentarios reales de dueños de piscinas en todo el Valle de Sacramento que confiaron sus proyectos a DGO Tile.',
      verified_customer: 'Cliente Verificado',
      rev1_q: '"Su artesanía habla más que las palabras. Estos expertos transformaron nuestra piscina en una obra de arte que se siente atemporal y moderna a la vez."',
      rev1_loc: 'Propietaria, Condado de Placer',
      rev2_q: '"Excelente trabajo reemplazando el azulejo de la línea de agua de nuestra piscina. Minucioso, profesional, cortés y un trabajador realmente dedicado."',
      rev3_q: '"Camilo es excelente — inteligente y honesto. Reparó los azulejos de nuestra piscina rápidamente a un precio muy razonable. ¡Muy recomendado!"',

      ctaband_title: '¿Listo para transformar tu piscina?',
      ctaband_sub: 'Obtén un presupuesto gratis y comienza la renovación de tu piscina con los expertos en azulejos de confianza de Sacramento.',

      faq_eyebrow: '— Preguntas Frecuentes', faq_title: 'Preguntas frecuentes',
      faq_lead: 'Respuestas a las preguntas comunes sobre nuestros servicios de azulejos y remodelación de piscinas.',
      faq1_q: '¿Cuánto duran las instalaciones de azulejos?',
      faq1_a: 'Nuestras instalaciones premium suelen durar de 15 a 20 años con el mantenimiento adecuado. Usamos materiales de alta calidad resistentes al duro sol de California y a los químicos de la piscina.',
      faq2_q: '¿Qué áreas atienden?',
      faq2_a: 'Cubrimos todo el Valle de Sacramento incluyendo los condados de Sacramento, Placer, El Dorado, Yolo y Sutter. Nuestra experiencia local garantiza soluciones regionales precisas.',
      faq3_q: '¿Ofrecen presupuestos gratis?',
      faq3_a: 'Sí, ofrecemos presupuestos gratuitos en sitio para todos los proyectos de azulejos y remodelación de piscinas. Nuestro equipo evalúa tus necesidades específicas sin compromiso.',
      faq4_q: '¿Qué materiales de azulejo utilizan?',
      faq4_a: 'Trabajamos con azulejos de cerámica, porcelana, piedra natural y vidrio. Cada material se selecciona cuidadosamente por su durabilidad, atractivo estético y rendimiento en entornos de piscina.',
      faq5_q: '¿Están licenciados y asegurados?',
      faq5_a: 'Por supuesto. Somos contratistas con licencia completa y cobertura de seguro integral. Nuestras credenciales garantizan un servicio profesional y confiable en cada proyecto.',
      faq6_q: '¿Cuánto tardan las instalaciones?',
      faq6_a: 'Los plazos varían según la complejidad. Las instalaciones típicas de azulejos para piscinas toman de 3 a 7 días. Proporcionamos cronogramas detallados durante la consulta inicial.',
      faq7_q: '¿Y el mantenimiento de la piscina?',
      faq7_a: 'Ofrecemos orientación para mantener tus nuevas superficies de azulejo. La limpieza regular y el equilibrio químico adecuado prolongarán la vida de tu instalación.',
      faq8_q: '¿Pueden igualar diseños existentes?',
      faq8_a: 'Nuestro equipo experto se especializa en la integración perfecta de diseños. Podemos igualar o complementar la estética existente de tu piscina con precisión y creatividad.',
      faq9_q: '¿Realizan proyectos comerciales?',
      faq9_a: 'Sí, atendemos clientes residenciales y comerciales en todo el Valle de Sacramento. Nuestra experiencia se extiende a hoteles, resorts e instalaciones de piscinas públicas.',
      faq10_q: '¿Qué garantía ofrecen?',
      faq10_a: 'Ofrecemos garantías integrales sobre materiales y mano de obra. Los términos específicos se discuten durante la planificación del proyecto para asegurar tu total satisfacción.',

      contact_eyebrow: '— Contacto', contact_title: 'Pide tu cotización',
      contact_lead: 'Trabajo de azulejos de precisión que transforma tu espacio exterior. Cuéntanos sobre tu proyecto de piscina y te enviaremos un presupuesto claro y honesto — o llámanos directamente.',
      contact_phone: 'Teléfono', contact_email: 'Correo', contact_office: 'Oficina',
      contact_area: 'Área de Servicio', contact_area_val: 'Gran Valle de Sacramento y condados cercanos',
      form_name: 'Nombre Completo', form_name_ph: 'Juan Pérez',
      form_phone: 'Teléfono', form_email: 'Correo',
      form_service: 'Servicio Requerido', form_service_ph: 'Selecciona un servicio…',
      form_opt_commercial: 'Piscina Comercial / Resort', form_opt_other: 'Otro',
      form_message: 'Cuéntanos sobre tu proyecto', form_message_ph: 'Tamaño de la piscina, qué deseas hacer, plazo…',
      form_submit: 'Enviar Solicitud <span aria-hidden="true">→</span>',
      form_note: '✓ ¡Gracias! Este es un formulario de demostración — conéctalo a tu correo o CRM para recibir solicitudes.',

      footer_blurb: 'Trabajo de azulejos de precisión que transforma tu espacio exterior. Contratista con licencia que crea superficies de piscina duraderas y hermosas en todo el Valle de Sacramento.',
      footer_services: 'Nuestros Servicios', footer_brick: 'Ladrillo y Hardscape', footer_accent: 'Detalles de Acento',
      footer_nav: 'Navegación', footer_areas: 'Áreas de Servicio', footer_reviews: 'Reseñas', footer_touch: 'Contáctanos',
      footer_copy: '© 2026 DGO Tile Inc. Todos los derechos reservados.',
      footer_legal: 'Con Licencia y Asegurado · Al servicio del Valle de Sacramento'
    }
  };

  var STORAGE_KEY = 'dgo-lang';

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;

    // Text / inline-markup nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n')];
      if (val != null) el.innerHTML = val;
    });
    // Placeholder attributes
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var val = dict[el.getAttribute('data-i18n-ph')];
      if (val != null) el.setAttribute('placeholder', val);
    });

    document.documentElement.lang = lang;
    // Toggle button shows the OTHER language
    var label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'es' ? 'English' : 'Español';

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // --- Initialise language (saved → browser → English) ---
  var saved;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  var initial = saved || ((navigator.language || '').slice(0, 2) === 'es' ? 'es' : 'en');
  applyLang(initial);

  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      applyLang(document.documentElement.lang === 'es' ? 'en' : 'es');
    });
  }

  // --- Mobile nav toggle ---
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Scroll-spy: highlight the active nav link ---
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = navAnchors
    .map(function (a) {
      var id = a.getAttribute('href');
      return id && id.length > 1 ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = '#' + entry.target.id;
            navAnchors.forEach(function (a) {
              a.classList.toggle('active', a.getAttribute('href') === id);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  // --- Demo quote form ---
  var form = document.getElementById('quoteForm');
  var note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      if (note) {
        note.hidden = false;
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }
})();
