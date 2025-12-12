// Internationalization Module - EN/ES Toggle
const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_about: "About",
    nav_contact: "Contact",
    nav_language: "ES",
    watermark: "Developed by CodeKey Solutions",

    // Hero Section
    hero_title: "Expert Roofing Services",
    hero_subtitle:
      "Professional Solutions for Residential & Commercial Properties",
    hero_cta_primary: "Request Free Estimate",
    hero_cta_secondary: "Contact Us Today",

    // Services
    services_title: "Comprehensive Roofing Solutions",
    services_subtitle:
      "Professional services designed for both residential and commercial needs",
    service_repair: "Roof Repair",
    service_repair_desc:
      "Expert diagnostics and repair for damaged or aging roofs",
    service_replacement: "Complete Roof Replacement",
    service_replacement_desc:
      "Full system replacement with premium, durable materials",
    service_storm: "Storm Damage Response",
    service_storm_desc:
      "Emergency 24/7 response for severe weather and natural disaster damage",
    service_metal: "Metal Roofing Systems",
    service_metal_desc: "Long-lasting and energy-efficient metal solutions",
    service_commercial: "Commercial Projects",
    service_commercial_desc:
      "Enterprise-scale roofing for businesses and facilities",
    service_gutter: "Gutter & Drainage",
    service_gutter_desc:
      "Complete gutter solutions with professional maintenance",

    // Why Us
    why_us_title: "Why Partner With Us",
    why_us_licensed: "Fully Licensed & Insured",
    why_us_licensed_desc:
      "All team members hold current certifications and comprehensive liability coverage",
    why_us_warranty: "Comprehensive Warranty",
    why_us_warranty_desc: "Industry-leading guarantee on all completed work",
    why_us_experience: "years of Industry Leadership",
    why_us_satisfaction: "Client Satisfaction: 99%+",

    // Process
    process_title: "Our Professional Process",
    process_step1: "Complimentary Inspection",
    process_step1_desc:
      "Comprehensive roof assessment with detailed findings and recommendations",
    process_step2: "Transparent Estimate",
    process_step2_desc:
      "Detailed quote with fixed pricing and no surprise charges",
    process_step3: "Premium Installation",
    process_step3_desc:
      "Expert execution with rigorous quality control standards",
    process_step4: "Ongoing Support",
    process_step4_desc:
      "Long-term maintenance programs and warranty assistance",

    // Portfolio
    portfolio_title: "Project Portfolio",
    portfolio_subtitle:
      "Showcase of our residential and commercial installations",
    portfolio_filter_all: "All Projects",
    portfolio_filter_residential: "Residential",
    portfolio_filter_commercial: "Commercial",
    portfolio_project1: "Modern Shingle Roof - Downtown",
    portfolio_project1_desc:
      "Complete residential roof replacement with architectural shingles",
    portfolio_project2: "Commercial Metal System",
    portfolio_project2_desc:
      "Large-scale commercial metal roofing installation",
    portfolio_project3: "Storm Damage Restoration",
    portfolio_project3_desc: "Emergency hail damage repair and restoration",
    portfolio_project4: "Contemporary Flat Roof",
    portfolio_project4_desc:
      "Modern flat roof installation with superior drainage",
    portfolio_project5: "Heritage Shingle Upgrade",
    portfolio_project5_desc:
      "Traditional home roof upgrade with premium materials",
    portfolio_project6: "Industrial Metal Roof",
    portfolio_project6_desc: "Heavy-duty metal roofing for industrial facility",

    // Testimonials
    testimonial_title: "What Our Clients Say",
    testimonial_client1: "John Mitchell",
    testimonial_client1_location: "Denver, CO",
    testimonial_text1:
      "SkyShield did an exceptional job replacing our roof. Professional, punctual, and the quality is outstanding. Highly recommended!",
    testimonial_client2: "Maria González",
    testimonial_client2_location: "Boulder, CO",
    testimonial_text2:
      "After the hail storm, they came quickly and fixed everything. Their customer service is incredible. Five stars!",
    testimonial_client3: "Robert Chen",
    testimonial_client3_location: "Fort Collins, CO",
    testimonial_text3:
      "Licensed, insured, and professional. They treated my home like their own. Worth every penny.",
    testimonial_client4: "Sarah Williams",
    testimonial_client4_location: "Littleton, CO",
    testimonial_text4:
      "Great communication throughout the project. They explained everything clearly and delivered exactly what was promised.",

    // CTA Section
    cta_title: "Get Your Free Roofing Estimate Today",
    cta_subtitle: "No obligations. No hidden fees. Just honest pricing.",
    form_name: "Full Name",
    form_email: "Email Address",
    form_phone: "Phone Number",
    form_zip: "ZIP Code",
    form_message: "Message",
    form_service: "Service Needed",
    form_service_repair: "Roof Repair",
    form_service_replacement: "Roof Replacement",
    form_service_storm: "Storm Damage",
    form_service_other: "Other",
    form_submit: "Send Request",
    form_success: "Thank you! We'll contact you within 24 hours.",
    form_error: "Please fill in all fields correctly.",

    // Footer
    footer_services_served: "Areas We Serve",
    footer_service1: "Denver & Surrounding Areas",
    footer_service2: "Boulder County",
    footer_service3: "Fort Collins Region",
    footer_service4: "50+ Mile Radius",
    footer_contact: "Contact Us",
    footer_phone: "Phone",
    footer_email: "Email",
    footer_hours: "Hours",
    footer_hours_detail: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
    footer_copyright: "© 2024 SkyShield Roofing. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",

    // About Page
    about_title: "About SkyShield Roofing",
    about_hero: "Your Trusted Roofing Partner Since 2010",
    about_intro:
      "At SkyShield Roofing, we believe that quality craftsmanship and honest service are the foundation of any successful business. For over a decade, we've been protecting Colorado homes and businesses with superior roofing solutions.",
    about_mission: "Our Mission",
    about_mission_text:
      "To provide exceptional roofing services with integrity, transparency, and a commitment to customer satisfaction. We treat every project like our own home.",
    about_values: "Our Values",
    about_value1: "Excellence in every project, no matter the size",
    about_value2: "Transparent pricing and honest communication",
    about_value3: "Licensed, insured, and fully accountable",
    about_value4: "Warranty on all workmanship",
    about_team_title: "Meet Our Team",
    about_team_lead: "Project Lead & Founder",
    about_team_manager: "Operations Manager",
    about_team_supervisor: "Lead Supervisor",
    about_certifications: "Certifications & Affiliations",
    about_cert1: "Colorado Roofing Association Member",
    about_cert2: "GAF Master Elite Contractor",
    about_cert3: "OSHA Certified",
    about_cert4: "General Contractor License",

    // Contact Page
    contact_title: "Contact SkyShield Roofing",
    contact_subtitle: "Get in touch for a free estimate or inspection",
    contact_call_us: "Call Us",
    contact_email_us: "Email Us",
    contact_visit_us: "Service Area",
    contact_response: "Response Time: Within 24 hours",
    contact_form_title: "Send us a Message",
    contact_address: "Denver Metro Area & Beyond",

    // General
    loading: "Loading...",
    close: "Close",
  },
  es: {
    // Navegación
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_portfolio: "Portafolio",
    nav_about: "Acerca De",
    nav_contact: "Contacto",
    nav_language: "EN",
    watermark: "Desarrollado por CodeKey Solutions",

    // Sección Hero
    hero_title: "Soluciones Premium de Techado",
    hero_subtitle: "Protegiendo tu Hogar y Negocio desde 2010",
    hero_cta_primary: "Obtener Cotización Gratis",
    hero_cta_secondary: "Llamar Ahora",

    // Servicios
    services_title: "Nuestros Servicios",
    services_subtitle:
      "Soluciones de techado experto para propiedades residenciales y comerciales",
    service_repair: "Reparación de Techos",
    service_repair_desc:
      "Reparaciones rápidas y confiables para techos dañados o antiguos",
    service_replacement: "Reemplazo de Techo",
    service_replacement_desc:
      "Reemplazo completo de techo con materiales premium",
    service_storm: "Daño por Tormenta",
    service_storm_desc:
      "Respuesta de emergencia y restauración después del mal clima",
    service_metal: "Techado de Metal",
    service_metal_desc:
      "Sistemas de techado metálico duradero y eficiente energéticamente",
    service_commercial: "Techado Comercial",
    service_commercial_desc:
      "Soluciones a gran escala para propiedades comerciales",
    service_gutter: "Instalación de Canaletas",
    service_gutter_desc: "Sistemas de canaletas profesionales y mantenimiento",

    // Por Qué Elegir
    why_us_title: "Por Qué Elegir SkyShield Roofing",
    why_us_licensed: "Licenciado y Asegurado",
    why_us_licensed_desc:
      "Profesionales totalmente certificados con cobertura de responsabilidad",
    why_us_warranty: "Garantía de Por Vida",
    why_us_warranty_desc:
      "Todos los trabajos respaldados por nuestra garantía de satisfacción",
    why_us_experience: "años de Experiencia",
    why_us_satisfaction: "Tasa de Satisfacción del Cliente",

    // Proceso
    process_title: "Nuestro Proceso",
    process_step1: "Inspección Gratuita",
    process_step1_desc:
      "Evaluamos el estado de tu techo y proporcionamos un informe detallado",
    process_step2: "Cotización Personalizada",
    process_step2_desc: "Precios transparentes sin cargos ocultos",
    process_step3: "Instalación Experta",
    process_step3_desc: "Instalación profesional con aseguramiento de calidad",
    process_step4: "Apoyo de Por Vida",
    process_step4_desc: "Mantenimiento continuo y soporte de garantía",

    // Portafolio
    portfolio_title: "Galería de Proyectos",
    portfolio_subtitle:
      "Vea nuestros proyectos residenciales y comerciales recientes",
    portfolio_filter_all: "Todos los Proyectos",
    portfolio_filter_residential: "Residencial",
    portfolio_filter_commercial: "Comercial",
    portfolio_project1: "Techo Moderno de Tejas - Centro",
    portfolio_project1_desc:
      "Reemplazo completo de techo residencial con tejas arquitectónicas",
    portfolio_project2: "Sistema Metal Comercial",
    portfolio_project2_desc:
      "Instalación de techos metálicos comerciales a gran escala",
    portfolio_project3: "Restauración por Daño de Tormenta",
    portfolio_project3_desc:
      "Reparación y restauración de daño por granizo de emergencia",
    portfolio_project4: "Techo Plano Contemporáneo",
    portfolio_project4_desc:
      "Instalación de techo plano moderno con drenaje superior",
    portfolio_project5: "Actualización de Tejas Clásicas",
    portfolio_project5_desc:
      "Actualización de techos tradicionales con materiales premium",
    portfolio_project6: "Techo Metal Industrial",
    portfolio_project6_desc:
      "Techos metálicos de servicio pesado para instalaciones industriales",

    // Testimonios
    testimonial_title: "Lo Que Dicen Nuestros Clientes",
    testimonial_client1: "Juan Rodríguez",
    testimonial_client1_location: "Denver, CO",
    testimonial_text1:
      "SkyShield hizo un trabajo excepcional en el reemplazo de nuestro techo. Profesionales, puntuales y la calidad es sobresaliente. ¡Altamente recomendado!",
    testimonial_client2: "María García",
    testimonial_client2_location: "Boulder, CO",
    testimonial_text2:
      "Después de la tormenta de granizo, vinieron rápidamente y arreglaron todo. Su servicio al cliente es increíble. ¡Cinco estrellas!",
    testimonial_client3: "Roberto Chen",
    testimonial_client3_location: "Fort Collins, CO",
    testimonial_text3:
      "Licenciado, asegurado y profesional. Trataron mi hogar como propio. Vale cada centavo.",
    testimonial_client4: "Sara Williams",
    testimonial_client4_location: "Littleton, CO",
    testimonial_text4:
      "Excelente comunicación durante todo el proyecto. Explicaron todo claramente y entregaron exactamente lo prometido.",

    // Sección CTA
    cta_title: "Obtén Tu Cotización de Techado Gratuita Hoy",
    cta_subtitle:
      "Sin obligaciones. Sin cargos ocultos. Solo precios honestos.",
    form_name: "Nombre Completo",
    form_email: "Correo Electrónico",
    form_phone: "Número Telefónico",
    form_zip: "Código Postal",
    form_message: "Mensaje",
    form_service: "Servicio Necesario",
    form_service_repair: "Reparación de Techo",
    form_service_replacement: "Reemplazo de Techo",
    form_service_storm: "Daño por Tormenta",
    form_service_other: "Otro",
    form_submit: "Enviar Solicitud",
    form_success: "Gracias! Nos contactaremos dentro de 24 horas.",
    form_error: "Por favor, completa todos los campos correctamente.",

    // Pie de Página
    footer_services_served: "Áreas que Servimos",
    footer_service1: "Denver y Áreas Cercanas",
    footer_service2: "Condado de Boulder",
    footer_service3: "Región de Fort Collins",
    footer_service4: "Radio de 50+ Millas",
    footer_contact: "Contáctanos",
    footer_phone: "Teléfono",
    footer_email: "Correo",
    footer_hours: "Horario",
    footer_hours_detail: "Lun-Vie 8AM-6PM, Sáb 9AM-4PM",
    footer_copyright:
      "© 2024 SkyShield Roofing. Todos los derechos reservados.",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Servicio",

    // Página Acerca De
    about_title: "Acerca de SkyShield Roofing",
    about_hero: "Tu Socio de Confianza en Techado desde 2010",
    about_intro:
      "En SkyShield Roofing, creemos que la artesanía de calidad y el servicio honesto son la base de cualquier negocio exitoso. Durante más de una década, hemos estado protegiendo hogares y negocios de Colorado con soluciones de techado superiores.",
    about_mission: "Nuestra Misión",
    about_mission_text:
      "Proporcionar servicios de techado excepcionales con integridad, transparencia y compromiso con la satisfacción del cliente. Tratamos cada proyecto como si fuera nuestro hogar.",
    about_values: "Nuestros Valores",
    about_value1: "Excelencia en cada proyecto, sin importar el tamaño",
    about_value2: "Precios transparentes y comunicación honesta",
    about_value3: "Licenciado, asegurado y completamente responsable",
    about_value4: "Garantía en todos los trabajos",
    about_team_title: "Conoce a Nuestro Equipo",
    about_team_lead: "Líder de Proyecto y Fundador",
    about_team_manager: "Gerente de Operaciones",
    about_team_supervisor: "Supervisor Principal",
    about_certifications: "Certificaciones y Afiliaciones",
    about_cert1: "Miembro de la Asociación de Techadores de Colorado",
    about_cert2: "Contratista Master Elite de GAF",
    about_cert3: "Certificado por OSHA",
    about_cert4: "Licencia de Contratista General",

    // Página Contacto
    contact_title: "Contacta a SkyShield Roofing",
    contact_subtitle:
      "Pónte en contacto para una cotización o inspección gratuita",
    contact_call_us: "Llámanos",
    contact_email_us: "Envíanos un Correo",
    contact_visit_us: "Área de Servicio",
    contact_response: "Tiempo de Respuesta: Dentro de 24 horas",
    contact_form_title: "Envíanos un Mensaje",
    contact_address: "Área Metropolitana de Denver y Más Allá",

    // General
    loading: "Cargando...",
    close: "Cerrar",
  },
};

// Initialize language
let currentLanguage = localStorage.getItem("language") || "en";

function initI18n() {
  setLanguage(currentLanguage);
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLanguage = lang;
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;

  // Update meta tags
  const description =
    lang === "en"
      ? "Premium roofing solutions for residential and commercial properties in Colorado. Licensed & Insured."
      : "Soluciones premium de techado para propiedades residenciales y comerciales en Colorado. Licenciado y Asegurado.";

  document.querySelector('meta[name="description"]').content = description;

  // Update all text elements
  updatePageText();
}

function t(key) {
  return translations[currentLanguage][key] || key;
}

function updatePageText() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.getAttribute("data-i18n-title");
    el.title = t(key);
  });
}

function toggleLanguage() {
  const newLang = currentLanguage === "en" ? "es" : "en";
  setLanguage(newLang);
}

// Initialize on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
