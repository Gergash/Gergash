/* eslint-disable */
window.GSE_I18N = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.cases': 'Cases',
    'nav.education': 'Education',
    'nav.applied': 'Applied',
    'nav.lab': 'Lab',
    'nav.contact': 'Contact',
    'nav.logoAria': 'Go to top — Geronimo Saldaña',

    'hero.h1': "I'm Geronimo Saldaña Espinal",
    'hero.desc': 'I build production document AI (RAG) systems: I turn documents and manual workflows into automatic answers and faster decisions — saving hours of work every week.',
    'cta.primary': 'Email me to automate workflows',
    'cta.primary.calendly': 'Book 20 min',
    'cta.cv': 'Download CV (PDF)',

    'intro.title': 'HELLO AND WELCOME',
    'intro.subtitle': 'EXPLORE MY PURPOSE',
    'intro.s1.title': 'Focused on information quality',
    'intro.s1.body': 'Over 2 years building pipelines for collection, transformation, and data preparation for reports and dashboards with actionable information.',
    'intro.s2.title': 'Concise communication',
    'intro.s2.body': 'I built PDF reports, Power BI dashboards, and infographics with Gemini; also web dashboards with Apache ECharts.',
    'intro.s3.title': 'Process automation',
    'intro.s3.body': 'I built n8n flows and automations with Selenium or Bash depending on the process: less manual time generating, sending, and transforming records.',
    'intro.s4.title': 'Verifiable, easy-to-read results',
    'intro.s4.body': 'Clear methodologies, realistic timelines, and deliverables focused on actionable business insights.',

    'quote.body': 'I structure work with <span>CRISP-DM</span> and <span>medallion</span> architecture when volume requires it.<br>I have supported data collection and cleaning for more informed decisions in real contexts.',

    'about.title': 'ABOUT MY WORK',
    'about.subtitle': 'My goal is to strengthen data governance for companies by implementing each level of analytics to generate value',
    'about.descriptive.title': 'Descriptive',
    'about.descriptive.body': 'What happened? I collect and analyze historical data (sales reports, KPI dashboards).',
    'about.diagnostic.title': 'Diagnostic',
    'about.diagnostic.body': 'Why did it happen? I identify causes through correlations or drill-down (e.g. a sales drop in a given period).',
    'about.predictive.title': 'Predictive',
    'about.predictive.body': 'What will happen? I apply ML when there is data and a clear business question (forecasts, customer segmentation).',
    'about.prescriptive.title': 'Prescriptive',
    'about.prescriptive.body': 'What to do? I recommend actions based on predictions (e.g. adjust inventory from forecast or promote products by purchase patterns).',

    'services.title': 'SERVICES',
    'services.subtitle': 'Services aligned to the problem, with measurable deliverables',
    'services.tab1': 'Business understanding',
    'services.tab2': 'Data architecture',
    'services.tab3': 'Predictive models',
    'services.tab4': 'LLMs & integrations',
    'services.tab5': 'Automation & reporting',
    'services.s1.title': 'Strategic consulting to start using data',
    'services.s1.p1': 'I implemented data source inventories, Typeform forms, and n8n automation.',
    'services.s1.p2': 'I digitized paper or PDF processes into queryable structured data.',
    'services.s2.title': 'Data architecture',
    'services.s2.p1': 'I built data pipelines with a medallion approach when the case requires it.',
    'services.s2.p2': 'The first step is usually capturing orderly, reliable information before scaling analytics.',
    'services.s3.title': 'Predictive model development',
    'services.s3.p1': 'I implemented predictive models for sales, demand, or inventory when data and a clear business question exist.',
    'services.s3.p2': 'The goal is to support decisions with metrics, not replace team judgment.',
    'services.s4.title': 'Custom GPTs for data use',
    'services.s4.p1': 'I built GPT assistants on the business’s own data.',
    'services.s4.p2': 'They answer natural-language queries and integrate with n8n or Power BI.',
    'services.s4.p3': 'They reduce response time for recurring team questions.',
    'services.s5.title': 'Local LLMs for data privacy',
    'services.s5.p1': 'I implemented local LLMs (Ollama and others) for queries without sending data to third parties.',
    'services.s5.p2': 'Useful when privacy requirements apply; integrable with n8n and reporting.',

    'history.title': 'My education path',
    'history.subtitle': 'Training and experience',
    'history.platzi.role': 'Software development fundamentals',
    'history.platzi.p1': 'Certification in Git and GitHub.',
    'history.platzi.p2': 'Certification in software engineering fundamentals.',
    'history.platzi.p3': 'Certification in Docker.',
    'history.platzi.p4': 'Certification in remote work.',
    'history.sena.org': 'National learning service',
    'history.sena.role': 'Software programming technician',
    'history.sena.p1': 'Software programming technician.',
    'history.sena.p2': 'Relational database design.',
    'history.sena.p3': 'Software quality models.',
    'history.sena.p4': 'Computer architecture.',
    'history.umanizales.org': 'University of Manizales',
    'history.umanizales.role': 'Data analytics engineering',
    'history.umanizales.p1': 'Data analytics engineering degree.',

    'cases.badge': 'Production cases',
    'cases.title': 'FROM DOCUMENTS AND PROCESSES TO SYSTEMS THAT ANSWER ON THEIR OWN',
    'cases.intro': 'Document AI and automation systems already running in production. Each case: the problem, the architecture, and a measurable result.',
    'cases.c1.title': 'OCR + semantic document search (RAG)',
    'cases.c1.tag': 'Document AI · production RAG',
    'cases.c1.problem': 'Hundreds of documents (PDFs, scans, contracts) where finding a specific fact took hours of manual reading. Knowledge was trapped in unsearchable files.',
    'cases.c1.flow1': 'Documents (PDF / scan)',
    'cases.c1.flow2': 'OCR + text cleanup',
    'cases.c1.flow4': 'LLM + RAG (cited answer)',
    'cases.c1.metric1': 'less time to find information (hours → seconds)*',
    'cases.c1.metric2': 'natural-language queries across the full archive',
    'cases.c2.title': 'Support orchestration with n8n + Chatwoot',
    'cases.c2.tag': 'Automation · AI agents',
    'cases.c2.problem': '100% manual customer support: slow replies, agents overwhelmed by repeated questions, and no coverage outside business hours.',
    'cases.c2.flow1': 'Customer (Chatwoot / messaging)',
    'cases.c2.flow2': 'n8n orchestration',
    'cases.c2.flow3': 'AI agent + RAG (knowledge base)',
    'cases.c2.flow4': 'Auto-reply / escalate to human',
    'cases.c2.metric1': 'of queries resolved without human intervention*',
    'cases.c2.metric2': 'first-response time, any hour of the day',
    'cases.label.problem': 'Problem',
    'cases.label.architecture': 'Architecture',
    'cases.label.result': 'Result',
    'cases.disclaimer': '*Approximate, anonymized metrics for client confidentiality.',

    'works.title': 'APPLIED TECHNICAL WORK',
    'works.subtitle': 'Near-production implementations: automation, data, and reporting',
    'works.n8n.title': 'AI workflows with n8n',
    'works.n8n.desc': 'Automation · agents and orchestration',
    'works.python.title': 'Python + PostgreSQL pipeline',
    'works.python.desc': 'ETL, models, and RFM segmentation',
    'works.powerbi.title': 'Power BI dashboards',
    'works.powerbi.desc': 'Reporting · KPIs and tracking',

    'lab.title': 'FUNDAMENTALS / LAB',
    'lab.subtitle': 'Training notebooks in ML and statistics — solid analytical base, not production cases',
    'lab.eda.title': 'Exploratory analysis (EDA)',
    'lab.eda.desc': 'Lab · data quality and patterns',
    'lab.kmeans.title': 'K-means segmentation',
    'lab.kmeans.desc': 'Lab · clustering',
    'lab.trees.title': 'Decision trees',
    'lab.trees.desc': 'Lab · interpretable classification',

    'stack.title': 'TECH STACK',
    'stack.subtitle': 'Tools I use depending on the problem',
    'stack.ai.title': 'AI & RAG',
    'stack.ai.body': 'LangChain, Qdrant, embeddings, OCR, Gemini / Ollama (local LLMs)',
    'stack.auto.title': 'Automation',
    'stack.auto.body': 'n8n, Chatwoot, Selenium, Bash scripting, Typeform',
    'stack.data.title': 'Data & BI',
    'stack.data.body': 'PostgreSQL, SQLAlchemy, Power BI, Apache ECharts',
    'stack.bigdata.title': 'Big Data',
    'stack.bigdata.body': 'Apache Spark, PySpark, Hadoop',

    'me.title': 'Ready to automate a document or support workflow?',

    'contact.title': 'CONTACT',
    'contact.subtitle': 'One conversation to scope the problem, the stack, and a realistic timeline.',
    'contact.formLabel': 'Or send a message',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.message': 'Your message',
    'contact.submit': 'Send message',
    'contact.sending': 'Sending...',
    'contact.sent': 'Message sent. I will get back to you soon.',
    'contact.sentBtn': 'Sent',
    'contact.error': 'Error sending. Email me directly at gerosaldana2004@gmail.com',

    'modal.viewProject': 'View project',
    'modal.viewSql': 'View SQL script',
    'modal.sqlTitle': 'SQL script — Bike store database (PostgreSQL)',
    'modal.viewWorkflow': 'View workflow',
    'modal.workflowTitle': 'Ingelean workflow JSON structure (sanitized)',

    'chart.line.title': 'Growth in demand, needs, and problems (2020–2030)',
    'chart.line.xAxis': 'Year',
    'chart.line.yAxis': 'Growth level (relative index)',
    'chart.factor1': 'Demand for data professionals',
    'chart.factor2': 'Industry needs growth',
    'chart.factor3': 'Industry problems solved with data & AI',

    'meta.description': 'I build production document AI (RAG) and workflow automation with n8n and LLMs — turning manual document work into fast, searchable answers.'
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.cases': 'Casos',
    'nav.education': 'Educación',
    'nav.applied': 'Aplicado',
    'nav.lab': 'Laboratorio',
    'nav.contact': 'Contacto',
    'nav.logoAria': 'Ir al inicio — Geronimo Saldaña',

    'hero.h1': 'Soy Geronimo Saldaña Espinal',
    'hero.desc': 'Construyo sistemas de IA documental (RAG) en producción: convierto documentos y procesos manuales en respuestas automáticas y decisiones más rápidas — recuperando horas de trabajo cada semana.',
    'cta.primary': 'Escríbeme para automatizar',
    'cta.primary.calendly': 'Agenda 20 min',
    'cta.cv': 'Descargar CV (PDF)',

    'intro.title': 'HOLA Y BIENVENID@',
    'intro.subtitle': 'EXPLORA MI PROPÓSITO',
    'intro.s1.title': 'Enfocado en la calidad de la información',
    'intro.s1.body': 'Más de 2 años construyendo pipelines de recolección, transformación y preparación de datos para informes y dashboards con información accionable.',
    'intro.s2.title': 'Comunicación concisa',
    'intro.s2.body': 'Construí informes en PDF, dashboards en Power BI e infografías con Gemini; también dashboards web con Apache ECharts.',
    'intro.s3.title': 'Automatización de procesos',
    'intro.s3.body': 'Construí flujos en n8n y automatizaciones con Selenium o Bash según el proceso: menos tiempo manual en generación, envío y transformación de registros.',
    'intro.s4.title': 'Resultados verificables y graficamente entendibles',
    'intro.s4.body': 'Metodologías claras, cronogramas realistas y entregables enfocados en la creacion de insights accionables para el negocio.',

    'quote.body': 'Estructuro el trabajo con <span>CRISP-DM</span> y arquitectura <span>medallion</span> cuando el volumen lo pide.<br>He apoyado la recolección y limpieza de datos para decisiones más informadas en contextos reales.',

    'about.title': 'SOBRE MI TRABAJO',
    'about.subtitle': 'Mi objetivo es fortalecer la Gobernanza del Dato para empresas implementando cada nivel de la analítica para generar valor',
    'about.descriptive.title': 'Descriptivo',
    'about.descriptive.body': '¿Qué pasó? Recolecto y analizo datos históricos (reportes de ventas, KPIs en dashboard).',
    'about.diagnostic.title': 'Diagnóstico',
    'about.diagnostic.body': '¿Por qué pasó? Identifica causas de eventos mediante correlaciones o drill-down (ej. caída de ventas en cierto periodo de tiempo).',
    'about.predictive.title': 'Predictivo',
    'about.predictive.body': '¿Qué pasará? Aplico ML cuando hay datos y pregunta clara (pronósticos, segmentación de clientes).',
    'about.prescriptive.title': 'Prescriptivo',
    'about.prescriptive.body': '¿Qué hacer? Recomienda acciones basadas en las predicciones (ej. ajustar inventario según forecast o promocionar productos según patrones de compra en el cliente).',

    'services.title': 'SERVICIOS',
    'services.subtitle': 'Servicios alineados al problema, con entregables medibles',
    'services.tab1': 'Entendimiento del negocio',
    'services.tab2': 'Arquitectura de datos',
    'services.tab3': 'Algoritmos y modelos predictivos',
    'services.tab4': "Uso de LLM's e integraciones",
    'services.tab5': 'Automatización y reportes',
    'services.s1.title': 'Consultoría estratégica para empezar a usar los datos',
    'services.s1.p1': 'Implementé inventarios de fuentes de datos, formularios con Typeform y automatización con n8n.',
    'services.s1.p2': 'Digitalicé procesos en papel o PDF hacia datos estructurados consultables.',
    'services.s2.title': 'Arquitectura de Datos',
    'services.s2.p1': 'Construí pipelines de datos con enfoque medallion cuando el caso lo requiere.',
    'services.s2.p2': 'El primer paso suele ser capturar información ordenada y confiable antes de escalar analítica.',
    'services.s3.title': 'Desarrollo de Modelos Predictivos',
    'services.s3.p1': 'Implementé modelos predictivos para ventas, demanda o inventario cuando hay datos y pregunta de negocio claras.',
    'services.s3.p2': 'El objetivo es apoyar decisiones con métricas, no reemplazar el criterio del equipo.',
    'services.s4.title': "GPT's personalizados para el uso de datos",
    'services.s4.p1': 'Construí asistentes con GPT sobre datos propios del negocio.',
    'services.s4.p2': 'Responden consultas en lenguaje natural e integran con n8n o Power BI.',
    'services.s4.p3': 'Reducen el tiempo de respuesta frente a preguntas recurrentes del equipo.',
    'services.s5.title': 'Modelos LLM locales para privacidad de datos',
    'services.s5.p1': 'Implementé LLMs locales (Ollama u otros) para consultas sin enviar datos a terceros.',
    'services.s5.p2': 'Útil cuando hay requisitos de privacidad; integrable con n8n y reporting.',

    'history.title': 'Mi trayectoria educativa',
    'history.subtitle': 'Formación y experiencia',
    'history.platzi.role': 'Fundamentos para el desarrollo de software',
    'history.platzi.p1': 'Certificación en uso de Git y Github.',
    'history.platzi.p2': 'Certificación en Fundamentos de Ingeniería del software.',
    'history.platzi.p3': 'Certificación en uso de Docker.',
    'history.platzi.p4': 'Certificación en Teletrabajo o trabajo remoto.',
    'history.sena.org': 'Servicio nacional de aprendizaje',
    'history.sena.role': 'Técnico en programación de software',
    'history.sena.p1': 'Técnico en programación de software.',
    'history.sena.p2': 'Diseño de bases de datos relacionales.',
    'history.sena.p3': 'Modelos de calidad de software.',
    'history.sena.p4': 'Arquitectura de computadores.',
    'history.umanizales.org': 'Universidad de manizales',
    'history.umanizales.role': 'Ingeniería en Analítica de datos',
    'history.umanizales.p1': 'Ingeniería en Analítica de datos.',

    'cases.badge': 'Casos en producción',
    'cases.title': 'DE DOCUMENTOS Y PROCESOS A SISTEMAS QUE RESPONDEN SOLOS',
    'cases.intro': 'Sistemas de IA documental y automatización que ya operan resolviendo problemas reales de negocio. Cada caso: el problema, la arquitectura y el resultado medible.',
    'cases.c1.title': 'OCR + búsqueda semántica documental (RAG)',
    'cases.c1.tag': 'IA documental · RAG en producción',
    'cases.c1.problem': 'Cientos de documentos (PDFs, escaneos, contratos) donde encontrar un dato concreto tomaba horas de lectura manual. El conocimiento estaba atrapado en archivos sin buscar.',
    'cases.c1.flow1': 'Documentos (PDF / escaneo)',
    'cases.c1.flow2': 'OCR + limpieza de texto',
    'cases.c1.flow4': 'LLM + RAG (respuesta con cita)',
    'cases.c1.metric1': 'menos tiempo para encontrar información (de horas a segundos)*',
    'cases.c1.metric2': 'consultas en lenguaje natural sobre el archivo completo',
    'cases.c2.title': 'Orquestación de atención con n8n + Chatwoot',
    'cases.c2.tag': 'Automatización · Agentes de IA',
    'cases.c2.problem': 'Atención al cliente 100% manual: respuestas lentas, agentes saturados con preguntas repetidas y sin cobertura fuera de horario laboral.',
    'cases.c2.flow1': 'Cliente (Chatwoot / mensajería)',
    'cases.c2.flow2': 'Orquestación en n8n',
    'cases.c2.flow3': 'Agente IA + RAG (base de conocimiento)',
    'cases.c2.flow4': 'Respuesta automática / escala a humano',
    'cases.c2.metric1': 'de consultas resueltas sin intervención humana*',
    'cases.c2.metric2': 'tiempo de primera respuesta, cualquier hora del día',
    'cases.label.problem': 'Problema',
    'cases.label.architecture': 'Arquitectura',
    'cases.label.result': 'Resultado',
    'cases.disclaimer': '*Métricas aproximadas y anonimizadas por confidencialidad de los clientes.',

    'works.title': 'TRABAJO TÉCNICO APLICADO',
    'works.subtitle': 'Implementaciones cercanas a producción: automatización, datos y reporting',
    'works.n8n.title': 'Workflows de IA con n8n',
    'works.n8n.desc': 'Automatización · agentes y orquestación',
    'works.python.title': 'Pipeline Python + PostgreSQL',
    'works.python.desc': 'ETL, modelos y segmentación RFM',
    'works.powerbi.title': 'Dashboards Power BI',
    'works.powerbi.desc': 'Reporting · KPIs y seguimiento',

    'lab.title': 'FUNDAMENTOS / LABORATORIO',
    'lab.subtitle': 'Notebooks de formación en ML y estadística — base analítica sólida, no casos de producción',
    'lab.eda.title': 'Análisis exploratorio (EDA)',
    'lab.eda.desc': 'Laboratorio · calidad y patrones en datos',
    'lab.kmeans.title': 'Segmentación con K-means',
    'lab.kmeans.desc': 'Laboratorio · clustering',
    'lab.trees.title': 'Árboles de decisión',
    'lab.trees.desc': 'Laboratorio · clasificación interpretable',

    'stack.title': 'STACK TÉCNICO',
    'stack.subtitle': 'Herramientas que uso según el problema',
    'stack.ai.title': 'IA & RAG',
    'stack.ai.body': 'LangChain, Qdrant, embeddings, OCR, Gemini / Ollama (LLMs locales)',
    'stack.auto.title': 'Automatización',
    'stack.auto.body': 'n8n, Chatwoot, Selenium, Bash scripting, Typeform',
    'stack.data.title': 'Datos & BI',
    'stack.data.body': 'PostgreSQL, SQLAlchemy, Power BI, Apache ECharts',
    'stack.bigdata.title': 'Big Data',
    'stack.bigdata.body': 'Apache Spark, PySpark, Hadoop',

    'me.title': '¿Listo para automatizar un proceso documental o de atención?',

    'contact.title': 'CONTACTO GERONIMO',
    'contact.subtitle': 'Conversemos sobre objetivos, contexto, procesos y proyecciones.',
    'contact.formLabel': 'O envía un mensaje',
    'contact.name': 'Tu nombre',
    'contact.email': 'Tu correo',
    'contact.message': 'Tu mensaje',
    'contact.submit': 'Enviar mensaje',
    'contact.sending': 'Enviando...',
    'contact.sent': 'Mensaje enviado. Te contactaré pronto.',
    'contact.sentBtn': 'Enviado',
    'contact.error': 'Error al enviar. Escríbeme directamente a gerosaldana2004@gmail.com',

    'modal.viewProject': 'Ver proyecto',
    'modal.viewSql': 'Ver Script SQL',
    'modal.sqlTitle': 'Script SQL — Base de Datos Tienda de Bicicletas (PostgreSQL)',
    'modal.viewWorkflow': 'Ver el workflow',
    'modal.workflowTitle': '📄 Estructura del workflow JSON de Ingelean (sanitized)',

    'chart.line.title': 'Crecimiento en Demanda, Necesidades y Problemas (2020-2030)',
    'chart.line.xAxis': 'Año',
    'chart.line.yAxis': 'Nivel de crecimiento (índice relativo)',
    'chart.factor1': 'Demanda de profesionales en datos',
    'chart.factor2': 'Crecimiento de las necesidades de las industrias',
    'chart.factor3': 'Problemas crecientes en la industria con soluciones basadas en datos e IA',

    'meta.description': 'Automatizo procesos documentales y de negocio con RAG, n8n y LLMs — reduciendo horas de trabajo manual en empresas.'
  }
};

window.GSE_t = function (lang, key) {
  var dict = window.GSE_I18N[lang] || window.GSE_I18N.en;
  return dict[key] != null ? dict[key] : (window.GSE_I18N.en[key] || '');
};

window.GSE_applyI18n = function (lang) {
  if (lang !== 'en' && lang !== 'es') lang = 'en';
  var dict = window.GSE_I18N[lang];

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] != null) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] != null) el.placeholder = dict[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-alt');
    if (dict[key] != null) el.alt = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-aria');
    if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
  });

  var meta = document.querySelector('meta[name="description"]');
  if (meta && dict['meta.description']) meta.setAttribute('content', dict['meta.description']);
  var ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && dict['meta.description']) ogDesc.setAttribute('content', dict['meta.description']);

  if (typeof window.GSE_onLangChange === 'function') {
    window.GSE_onLangChange(lang);
  }
};
