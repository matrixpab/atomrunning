/**
 * ATOM CLUB DE RUNNING - Base de Datos Centralizada
 * Información real y verificada del perfil @atomclubderunning
 * Sedes: La Dormida (Santa Rosa) y La Paz, Mendoza
 * Dirección Técnica: Prof. César Vergel (@cesarvergel1986)
 */

const DEFAULT_ATOM_DATA = {
  clubInfo: {
    name: "ATOM Club de Running",
    shortName: "ATOM RUNNING",
    tagline: "Running, salud y comunidad",
    headline: "NO CORRÉS SOLO. CORRÉS CON ATOM.",
    subheadline: "Una comunidad que comparte kilómetros, desafíos y experiencias.",
    eventsHeadline: "CORREMOS JUNTOS. SUPERAMOS LÍMITES.",
    eventsSubheadline: "El atletismo se vive en cada entrenamiento semanal y se consagra cuando viajamos en equipo a desafiar las calles y los senderos más exigentes del país.",
    instagram: "https://www.instagram.com/atomclubderunning/",
    instagramUser: "@atomclubderunning",
    phoneDisplay: "+54 9 261 (Mendoza)",
    whatsappNumber: "5492610000000",
    whatsappDefaultMsg: "Hola, quiero conocer ATOM Club de Running y saber cómo puedo sumarme.",
    province: "Mendoza, Argentina",
    heroImage: "assets/img/library/atom-entrenamiento-grupal-01.webp",
    locations: [
      {
        id: "la-dormida",
        name: "La Dormida",
        department: "Santa Rosa, Mendoza",
        address: "Puntos de encuentro: Plaza Central y Circuitos Pedestres",
        days: "Lunes, Miércoles y Viernes",
        hours: "19:30 a 21:00 hs",
        description: "Entrenamientos grupales de asfalto, pasadas de velocidad, acondicionamiento funcional y salidas a senderos esteños.",
        photo: "assets/img/library/atom-sedes-circuito-01.webp"
      },
      {
        id: "la-paz",
        name: "La Paz",
        department: "La Paz, Mendoza",
        address: "Puntos de encuentro: Pista y Circuitos de La Paz",
        days: "Martes y Jueves",
        hours: "19:30 a 21:00 hs",
        description: "Técnica biomecánica de carrera, trabajos de fondo, resistencia aeróbica y preparación para pruebas zonales.",
        photo: "assets/img/library/atom-comunidad-01.webp"
      }
    ],
    headCoach: {
      name: "César Vergel",
      title: "Profesor de Educación Física · Entrenador de ATOM",
      instagram: "@cesarvergel1986",
      instagramUrl: "https://www.instagram.com/cesarvergel1986/",
      bio: "Profesor de educación física y entrenador a cargo de la preparación física y deportiva de ATOM Club de Running. Su trabajo se enfoca en enseñar a correr con técnica adecuada, acompañar a quienes dan sus primeros pasos, evitar lesiones y motivar a cada corredor a superarse semana a semana.",
      photo: "assets/img/library/atom-entrenador-cesar-01.webp",
      methodology: [
        {
          title: "Adaptación Progresiva",
          desc: "Cada persona arranca desde su nivel real. Si nunca corriste, el método combina caminata y trote suave sin exigencias desmedidas."
        },
        {
          title: "Técnica de Carrera & Biomecánica",
          desc: "Correcciones de postura, cadencia y pisada en cada sesión para economizar energía y cuidar rodillas y tobillos."
        },
        {
          title: "Fuerza Funcional Integrada",
          desc: "Trabajos de zona media (core), estabilidad y fuerza de piernas antes y después de rodar para prevenir sobrecargas."
        },
        {
          title: "Acompañamiento en Grupo",
          desc: "El profesor acompaña de cerca los ritmos de cada pelotón, garantizando que nadie quede solo ni se sobreentrene."
        }
      ]
    }
  },

  // SECCIÓN EVENTOS Y COMPETENCIAS (EXTENSIBLE PARA FUTUROS EVENTOS)
  events: [
    {
      id: "potrero-corre-2026",
      featured: true,
      status: "realizado",
      statusLabel: "Evento Realizado",
      badge: "9ª Edición · San Luis",
      edition: "9ª Edición",
      title: "Potrero Corre 2026",
      shortTitle: "Potrero Corre 2026",
      date: "2026-11-07",
      displayDate: "7 de noviembre de 2026",
      distance: "22K · 12K · 6K",
      distances: ["22K", "12K", "6K"],
      location: "Potrero de los Funes, San Luis, Argentina",
      venue: "Boxes del Circuito Internacional de Potrero de los Funes",
      startTime: "Largada desde Boxes",
      organization: "Estatus Run",
      milestone: "Edición récord con más de 1.500 atletas e incorporación histórica de los 42K de calle en San Luis.",
      trophyAward: "Trofeo Oficial: Team Más Numeroso Fuera de la Provincia",
      coverPhoto: "assets/img/eventos/potrero2026/atom-potrero-equipo-dique.webp",
      heroBanner: "assets/img/eventos/potrero2026/atom-potrero-equipo-pista.webp",
      heroVideo: "assets/img/eventos/potrero2026/atom-potrero-hero.mp4",
      tagline: "El equipo mendocino copó el Circuito Internacional de San Luis y fue premiado como el Team Más Numeroso Fuera de la Provincia.",
      summary: "Más de 25 atletas de ATOM RUNNING de La Dormida y La Paz viajaron a San Luis para disputar la 9ª edición de Potrero Corre en las distancias de 22K, 12K y 6K. Sobre el asfalto del Circuito Internacional, rodeados de sierras y el lago, el club brilló con podios, medallas finisher y el trofeo al equipo más numeroso proveniente de otra provincia.",
      experienceStory: `
        La 9ª edición de Potrero Corre convocó a más de 1.500 corredores en el imponente Circuito Internacional de Potrero de los Funes. La delegación de ATOM RUNNING partió en caravana desde La Dormida y La Paz (Mendoza), viviendo un fin de semana inolvidable de deporte y amistad.
        
        El viernes, el equipo retiró sus kits en la Expo en Cinemacenter San Luis, visitó el Monumento al Cóndor y compartió la concentración con vistas al dique.
        
        El sábado 7 de noviembre, la largada en el sector de boxes del circuito fue una fiesta. Nuestros corredores se midieron en las exigentes curvas y pendientes del trazado en las distancias de 22K, 12K y 6K.
        
        El momento cumbre llegó en la ceremonia de premiación, donde la organización oficial (Estatus Run) otorgó a ATOM el trofeo especial como el 'Team Más Numeroso Fuera de la Provincia', coronando el viaje con la bandera en alto y festejos compartidos.
      `,
      athletes: [
        { name: "Equipo 22K ATOM", bib: "Dorsales 313 · 285 · 308 · 309 · 286", photo: "assets/img/eventos/potrero2026/atom-potrero-corredores-22k.webp", note: "Desafío de fondo completado en el circuito internacional" },
        { name: "Equipo 12K & 6K ATOM", bib: "Dorsales 1428 · 6385 · 6551 · 6426 · 6387", photo: "assets/img/eventos/potrero2026/atom-potrero-equipo-pista.webp", note: "Velocidad y resistencia en asfalto serrano" },
        { name: "Prof. César Vergel", bib: "Director Técnico & Guía", photo: "assets/img/eventos/potrero2026/atom-potrero-viaje-ruta.webp", note: "Coordinación de la delegación y motivación constante" },
        { name: "Delegación Completa", bib: "Trofeo Team Más Numeroso", photo: "assets/img/eventos/potrero2026/atom-potrero-trofeo-team-numeroso.webp", note: "Reconocimiento oficial Estatus Run" }
      ],
      galleryCategories: [
        { id: "todas", label: "Todas las Fotos (9)" },
        { id: "equipo", label: "Equipo ATOM" },
        { id: "carrera", label: "Momentos de Carrera" },
        { id: "medallas", label: "Llegada & Premiación" }
      ],
      gallery: [
        {
          id: "pc-1",
          title: "Delegación ATOM frente al Dique y Sierras de Potrero",
          category: "equipo",
          photo: "assets/img/eventos/potrero2026/atom-potrero-equipo-dique.webp",
          caption: "Más de 25 corredores de ATOM RUNNING reunidos frente al Dique Potrero de los Funes y las sierras con la bandera oficial del club.",
          aspect: "landscape"
        },
        {
          id: "pc-2",
          title: "El Equipo en la Pista del Circuito Internacional",
          category: "carrera",
          photo: "assets/img/eventos/potrero2026/atom-potrero-equipo-pista.webp",
          caption: "Atletas de ATOM en la zona de boxes y largada sobre el asfalto del circuito internacional luciendo sus dorsales oficiales.",
          aspect: "landscape"
        },
        {
          id: "pc-3",
          title: "Corredores de los 22K con el Profe César",
          category: "carrera",
          photo: "assets/img/eventos/potrero2026/atom-potrero-corredores-22k.webp",
          caption: "Los atletas que compitieron en la exigente distancia de 22K (Dorsales 313, 285, 308, 309, 286) junto al entrenador César Vergel.",
          aspect: "portrait"
        },
        {
          id: "pc-4",
          title: "Trofeo Oficial: Team Más Numeroso Fuera de la Provincia",
          category: "medallas",
          photo: "assets/img/eventos/potrero2026/atom-potrero-trofeo-team-numeroso.webp",
          caption: "Distinción oficial otorgada por Estatus Run a ATOM RUNNING (Mendoza) por convocar la delegación foránea más grande en Potrero Corre 2026.",
          aspect: "portrait"
        },
        {
          id: "pc-5",
          title: "Celebración Finisher y Medallas en Meta",
          category: "medallas",
          photo: "assets/img/eventos/potrero2026/atom-potrero-medallas-bandera.webp",
          caption: "El equipo festejando con las medallas al cuello y la bandera de La Dormida y La Paz desplegada tras completar sus respectivas distancias.",
          aspect: "landscape"
        },
        {
          id: "pc-6",
          title: "Retiro de Kits y Dorsales en la Expo San Luis",
          category: "equipo",
          photo: "assets/img/eventos/potrero2026/atom-potrero-expo-dorsales.webp",
          caption: "La previa de la carrera en Cinemacenter San Luis retirando remeras, dorsales y carteles de las distancias 22K, 12K y 6K.",
          aspect: "portrait"
        },
        {
          id: "pc-7",
          title: "Salida del Viaje en Ruta desde Mendoza",
          category: "equipo",
          photo: "assets/img/eventos/potrero2026/atom-potrero-viaje-ruta.webp",
          caption: "La caravana de ATOM en la parada de La Paz sobre la ruta rumbo a San Luis, con mates, sonrisas y el entusiasmo del viaje.",
          aspect: "landscape"
        },
        {
          id: "pc-8",
          title: "Visita al Monumento al Cóndor",
          category: "equipo",
          photo: "assets/img/eventos/potrero2026/atom-potrero-monumento-condor.webp",
          caption: "Postal nocturna del grupo en el emblemático monumento de Potrero de los Funes disfrutando de la camaradería.",
          aspect: "portrait"
        },
        {
          id: "pc-9",
          title: "Festejo Nocturno del Equipo",
          category: "equipo",
          photo: "assets/img/eventos/potrero2026/atom-potrero-festejo-noche.webp",
          caption: "Cierre de jornada a pura celebración compartiendo risas y brindis tras los objetivos deportivos cumplidos.",
          aspect: "panoramic"
        }
      ]
    },
    {
      id: "media-maraton-buenos-aires-2026",
      featured: true,
      status: "realizado", // 'realizado' o 'proximo'
      statusLabel: "Experiencia Realizada",
      badge: "Hito Destacado ATOM",
      title: "Media Maratón de Buenos Aires 2026",
      shortTitle: "21K Buenos Aires 2026",
      date: "2026-08-23",
      displayDate: "23 de agosto de 2026",
      distance: "21 Kilómetros",
      location: "Av. Figueroa Alcorta y Dorrego, Palermo, Buenos Aires",
      startTime: "08:00 hs",
      coverPhoto: "assets/img/eventos/ba21k/atom-ba21k-equipo-medallas.webp",
      heroBanner: "assets/img/eventos/ba21k/atom-ba21k-largada-arboleda.webp",
      tagline: "El viaje del equipo desde Mendoza para conquistar la media maratón más multitudinaria de Latinoamérica.",
      summary: "Una delegación de corredores de ATOM RUNNING de La Dormida y La Paz viajó a la Ciudad de Buenos Aires para medirse en los 21K más importantes del cono sur. Meses de fondos largos, pasadas nocturnas y disciplina se transformaron en abrazos, banderas en alto y medallas colgadas al cruzar la meta en Palermo.",
      experienceStory: `
        La preparación para la Media Maratón de Buenos Aires 2026 fue un punto de inflexión para ATOM RUNNING. Desde el este mendocino, el equipo trazó un plan de meses que combinó tiradas largas los fines de semana, pasadas cronometradas sobre asfalto y fortalecimiento específico bajo la dirección del Prof. César Vergel.
        
        El viaje comenzó con la ilusión de abordar el vuelo juntos en el aeropuerto rumbo a Aeroparque. En Buenos Aires, la delegación retiró sus kits en la Expo oficial de Adidas, recorrió la ciudad compartiendo la noche previa en el Obelisco porteño y se preparó para el gran día.
        
        El domingo 23 de agosto a las 08:00 hs, con una mañana fría y despejada, más de 25.000 corredores colmaron la Av. Figueroa Alcorta. Nuestros atletas —Daniela, Eliana, Maira, Sonia, Yair y el entrenador César— corrieron con ritmo firme por los puntos más emblemáticos de la capital argentina: el Obelisco, la Casa Rosada y los bosques de Palermo.
        
        Cruzar el arco de llegada con la camiseta azul y cyan de ATOM y desplegar la bandera de La Dormida - Mendoza fue la confirmación de que con esfuerzo, método y amistad, ningún objetivo es inalcanzable.
      `,
      athletes: [
        { name: "Yair", bib: "07850", photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-yair.webp", note: "Finisher 21K con gran ritmo sostenido" },
        { name: "Daniela", bib: "21621", photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-daniela.webp", note: "Superación y sonrisa en la meta" },
        { name: "Eliana", bib: "28774", photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-eliana.webp", note: "Constancia y logro personal cumplido" },
        { name: "Maira", bib: "21243", photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-maira.webp", note: "Garra y alegría finisher" },
        { name: "Sonia", bib: "28786", photo: "assets/img/eventos/ba21k/atom-ba21k-equipo-medallas.webp", note: "Compromiso de equipo incondicional" },
        { name: "Prof. César Vergel", bib: "Team Director", photo: "assets/img/eventos/ba21k/atom-ba21k-previa-palermo.webp", note: "Conducción técnica y motivación continua" }
      ],
      galleryCategories: [
        { id: "todas", label: "Todas las Fotos (13)" },
        { id: "equipo", label: "Equipo ATOM" },
        { id: "medallas", label: "Llegada & Medallas" },
        { id: "carrera", label: "Momentos de Carrera" }
      ],
      gallery: [
        {
          id: "ba-1",
          title: "Equipo Completo con Bandera y Medallas Finisher",
          category: "medallas",
          photo: "assets/img/eventos/ba21k/atom-ba21k-equipo-medallas.webp",
          caption: "Daniela, Eliana, Sonia y Yair celebrando en Palermo con la bandera oficial de ATOM Club de Running (La Dormida - Mendoza) tras completar los 21 kilómetros.",
          aspect: "portrait"
        },
        {
          id: "ba-2",
          title: "Previa de Largada en Palermo",
          category: "equipo",
          photo: "assets/img/eventos/ba21k/atom-ba21k-equipo-bandera.webp",
          caption: "El equipo ATOM reunido al amanecer antes de ingresar a los cajones de largada sobre Av. Figueroa Alcorta.",
          aspect: "portrait"
        },
        {
          id: "ba-3",
          title: "Marea Humana en la Largada",
          category: "carrera",
          photo: "assets/img/eventos/ba21k/atom-ba21k-largada-arboleda.webp",
          caption: "Miles de corredores concentrados bajo el túnel de árboles en Av. Figueroa Alcorta a minutos de la largada de las 08:00 hs.",
          aspect: "portrait"
        },
        {
          id: "ba-4",
          title: "Selfie Grupal en el Parque",
          category: "equipo",
          photo: "assets/img/eventos/ba21k/atom-ba21k-previa-palermo.webp",
          caption: "El profe César junto a las corredoras y corredores en el sector de carpas de running teams en Palermo.",
          aspect: "landscape"
        },
        {
          id: "ba-5",
          title: "Yair · Finisher 21K Buenos Aires",
          category: "medallas",
          photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-yair.webp",
          caption: "Yair exhibiendo con orgullo la medalla finisher oficial con cinta violeta de la Media Maratón de Buenos Aires 2026 (Dorsal 07850).",
          aspect: "portrait"
        },
        {
          id: "ba-6",
          title: "Daniela · Meta Cumplida",
          category: "medallas",
          photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-daniela.webp",
          caption: "Daniela con su medalla de 21K y dorsal 21621 tras completar la exigente prueba porteña.",
          aspect: "portrait"
        },
        {
          id: "ba-7",
          title: "Eliana · Sonrisa en la Llegada",
          category: "medallas",
          photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-eliana.webp",
          caption: "Eliana (Dorsal 28774) mostrando su medalla finisher luego de cruzar el arco con los colores de ATOM.",
          aspect: "portrait"
        },
        {
          id: "ba-8",
          title: "Maira · Alegría en Palermo",
          category: "medallas",
          photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-maira.webp",
          caption: "Maira celebrando con su medalla y dorsal 21243 en los jardines de Palermo.",
          aspect: "portrait"
        },
        {
          id: "ba-9",
          title: "Medalla Finisher Oficial 21K 2026",
          category: "medallas",
          photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-corredora.webp",
          caption: "Primer plano de la medalla con el logo de la Media Maratón de Buenos Aires 2026 y el pulgar arriba del equipo.",
          aspect: "portrait"
        },
        {
          id: "ba-10",
          title: "Retiro de Kits en la Expo Oficial",
          category: "carrera",
          photo: "assets/img/eventos/ba21k/atom-ba21k-expo-dorsales.webp",
          caption: "El equipo retirando los números oficiales de carrera frente al gran mapa del circuito de los 21 kilómetros.",
          aspect: "portrait"
        },
        {
          id: "ba-11",
          title: "Noche Previa en el Obelisco",
          category: "equipo",
          photo: "assets/img/eventos/ba21k/atom-ba21k-obelisco-noche.webp",
          caption: "Recorriendo Buenos Aires antes de la competencia: el equipo ATOM en Plaza de la República frente al Obelisco iluminado.",
          aspect: "portrait"
        },
        {
          id: "ba-12",
          title: "El Viaje: Salida desde Mendoza",
          category: "equipo",
          photo: "assets/img/eventos/ba21k/atom-ba21k-viaje-aeropuerto.webp",
          caption: "Iniciando la travesía deportiva: el grupo con mochilas y expectativas en el aeropuerto rumbo a Buenos Aires.",
          aspect: "landscape"
        },
        {
          id: "ba-13",
          title: "Calentamiento de Atletas Elite",
          category: "carrera",
          photo: "assets/img/eventos/ba21k/atom-ba21k-calentamiento-elites.webp",
          caption: "El espectáculo del atletismo internacional: corredores de elite realizando pasadas de activación en la recta previa a la largada.",
          aspect: "portrait"
        }
      ]
    },
    {
      id: "desafio-nacunan-terra-trail",
      featured: false,
      status: "realizado",
      statusLabel: "Carrera Emblemática",
      badge: "Trail & Dunas",
      title: "Desafío Ñacuñán Terra Trail",
      shortTitle: "Ñacuñán Terra Trail",
      date: "2026-06-20",
      displayDate: "Edición Anual Confirmada",
      distance: "21K · 10K · 5K",
      location: "Reserva de Biósfera de Ñacuñán, Santa Rosa, Mendoza",
      startTime: "09:30 hs",
      coverPhoto: "assets/img/library/atom-competencia-01.webp",
      heroBanner: "assets/img/library/atom-trail-running-01.webp",
      tagline: "El corazón del trail mendocino: arena, huellas y algarrobos protegidos.",
      summary: "Competencia insignia para ATOM RUNNING en nuestra propia tierra esteña. Atletas del club copan las distancias de 21K, 10K y 5K sobre terreno arenoso con destacados resultados y podios en categorías master.",
      experienceStory: "La carrera en la Reserva de Biósfera de Ñacuñán representa la identidad pura de nuestro club. Dunas exigentes, senderos de campo y el aliento inquebrantable de los corredores locales.",
      athletes: [
        { name: "Viviana Fernández", bib: "21K Master", photo: "assets/img/library/atom-integrantes-01.webp", note: "Gran desempeño y podio en 21K Trail" }
      ]
    },
    {
      id: "circuito-running-360-santa-rosa",
      featured: false,
      status: "realizado",
      statusLabel: "Carrera Zonal",
      badge: "Calle & Velocidad",
      title: "Circuito Running 360° Santa Rosa",
      shortTitle: "Circuito 360° Santa Rosa",
      date: "2026-08-15",
      displayDate: "Temporada Zonal",
      distance: "10K · 5K",
      location: "Santa Rosa, Mendoza",
      startTime: "10:00 hs",
      coverPhoto: "assets/img/library/atom-running-calle-02.webp",
      heroBanner: "assets/img/library/atom-running-calle-01.webp",
      tagline: "Velocidad en asfalto con la fuerza de la comunidad esteña.",
      summary: "Prueba rápida de calle donde atletas de ATOM (como Aldana Urquiza en el podio de 10K) demuestran la evolución biomecánica y el ritmo sostenido en asfalto.",
      experienceStory: "Una fiesta del atletismo local con presencia masiva de corredores de La Dormida y La Paz compitiendo codo a codo.",
      athletes: [
        { name: "Aldana Urquiza", bib: "10K Competitiva", photo: "assets/img/library/atom-running-calle-01.webp", note: "Podio general en 10K" }
      ]
    },
    {
      id: "proximo-desafio-trail-2026",
      featured: false,
      status: "proximo",
      statusLabel: "Próximo Desafío",
      badge: "Inscripciones Abiertas",
      title: "Desafío Aventura del Este Mendocino",
      shortTitle: "Aventura del Este",
      date: "2026-11-28",
      displayDate: "28 de Noviembre de 2026",
      distance: "15K Trail · 7K Participativa",
      location: "La Paz / Santa Rosa, Mendoza",
      startTime: "08:30 hs",
      coverPhoto: "assets/img/library/atom-paisajes-mendoza-01.webp",
      heroBanner: "assets/img/library/atom-sedes-circuito-01.webp",
      tagline: "El próximo gran objetivo del club antes de cerrar el año.",
      summary: "Nos preparamos en ambas sedes para disputar la prueba de cierre de temporada. Entrenamientos especiales los sábados en huellas de arena y circuitos naturales.",
      experienceStory: "Sumate a los entrenamientos preparatorios para vivir tu primera carrera o buscar una nueva marca personal junto al equipo.",
      athletes: []
    }
  ],

  trainings: [
    {
      id: "inicial",
      title: "Running Inicial & Salud",
      badge: "Iniciación",
      category: "salud",
      level: "Principiante · Sin experiencia previa",
      target: "Personas que desean empezar a correr desde cero, mejorar su salud física o volver al deporte de forma guiada.",
      summary: "Método progresivo que alterna caminata activa y trote suave con ejercicios de movilidad. Aprendés a respirar, regular tu esfuerzo y disfrutar del entrenamiento.",
      schedule: "Lunes y Miércoles 19:30 hs (La Dormida) · Martes 19:30 hs (La Paz)",
      photo: "assets/img/library/atom-grupo-inicial-01.webp"
    },
    {
      id: "calle",
      title: "Running de Calle (5K · 10K · 21K)",
      badge: "Rendimiento",
      category: "calle",
      level: "Intermedio a Avanzado",
      target: "Corredores que ya tienen base aeróbica y buscan optimizar sus tiempos en pruebas de 5K, 10K o medio maratón.",
      summary: "Planificación específica con pasadas de velocidad, fondos de ritmo controlado y cambios de ritmo (fartlek) adaptados al calendario mendocino.",
      schedule: "Lunes, Miércoles y Viernes 20:00 hs (La Dormida) · Jueves 20:00 hs (La Paz)",
      photo: "assets/img/library/atom-running-calle-01.webp"
    },
    {
      id: "trail",
      title: "Trail Running & Aventura",
      badge: "Trail & Dunas",
      category: "trail",
      level: "Todos los niveles (grupos por ritmo)",
      target: "Amantes de los senderos agrestes, el aire libre y los desafíos fuera del asfalto.",
      summary: "Entrenamientos en tierra, huellas de campo y dunas de Santa Rosa. Preparación técnica para pruebas de aventura como el Desafío Ñacuñán Terra Trail.",
      schedule: "Sábados por la mañana · Salidas programadas a circuitos de aventura",
      photo: "assets/img/library/atom-trail-running-01.webp"
    },
    {
      id: "fuerza",
      title: "Acondicionamiento Físico & Core",
      badge: "Fuerza y Prevención",
      category: "fuerza",
      level: "Complementario para todo el club",
      target: "Indispensable para todo corredor que quiera correr más sólido, con mayor potencia y libre de lesiones.",
      summary: "Circuitos de fuerza funcional para corredores: glúteos, cuádriceps, gemelos, propiocepción de tobillos y estabilidad de la zona media.",
      schedule: "Martes y Jueves (Turnos integrados en La Dormida y La Paz)",
      photo: "assets/img/library/atom-acondicionamiento-01.webp"
    }
  ],

  // Instagram showcase fotos reales
  instagramPosts: [
    {
      id: "ig-1",
      image: "assets/img/eventos/ba21k/atom-ba21k-equipo-medallas.webp",
      caption: "¡Los 21K de Buenos Aires fueron una fiesta para ATOM RUNNING! Orgullo esteño en la capital.",
      link: "https://www.instagram.com/atomclubderunning/"
    },
    {
      id: "ig-2",
      image: "assets/img/eventos/ba21k/atom-ba21k-equipo-bandera.webp",
      caption: "La bandera de La Dormida y La Paz flameando en Palermo. El running une caminos.",
      link: "https://www.instagram.com/atomclubderunning/"
    },
    {
      id: "ig-3",
      image: "assets/img/library/atom-entrenador-cesar-01.webp",
      caption: "César Vergel guiando la técnica y dosificación de ritmos. Cada paso suma.",
      link: "https://www.instagram.com/atomclubderunning/"
    },
    {
      id: "ig-4",
      image: "assets/img/eventos/ba21k/atom-ba21k-medalla-yair.webp",
      caption: "Las medallas se forjan en cada entrenamiento nocturno de la semana.",
      link: "https://www.instagram.com/atomclubderunning/"
    },
    {
      id: "ig-5",
      image: "assets/img/eventos/ba21k/atom-ba21k-obelisco-noche.webp",
      caption: "Comunidad, viaje y amistad: lo más lindo de correr en equipo.",
      link: "https://www.instagram.com/atomclubderunning/"
    },
    {
      id: "ig-6",
      image: "assets/img/library/atom-sedes-circuito-01.webp",
      caption: "Atardeceres que inspiran en La Dormida. Te esperamos para entrenar.",
      link: "https://www.instagram.com/atomclubderunning/"
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Viviana Fernández",
      race: "Corredora 21K Trail · Desafío Ñacuñán",
      quote: "Empecé buscando una actividad física para despejarme y terminé corriendo 21K en las dunas de Ñacuñán. El profe César sabe cómo llevarte paso a paso, cuidándote de las lesiones, y el grupo de ATOM te da un empuje único en cada kilómetro.",
      photo: "assets/img/library/atom-integrantes-01.webp"
    },
    {
      id: "t2",
      name: "Daniela & Eliana",
      race: "Finishers 21K Media Maratón de Buenos Aires",
      quote: "Viajar juntas a Buenos Aires y cruzar la meta de los 21K con la remera de ATOM fue un sueño cumplido. Entrenamos con frío y de noche en Mendoza, pero cuando llegás a la meta con tus compañeros, todo el esfuerzo vale oro.",
      photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-daniela.webp"
    },
    {
      id: "t3",
      name: "Yair",
      race: "Finisher 21K Buenos Aires · Atleta ATOM",
      quote: "El plan de entrenamiento de César fue impecable. Llegué a los 21 kilómetros sintiéndome entero, disfrutando cada kilómetro por Palermo y cruzando la meta con una alegría inmensa.",
      photo: "assets/img/eventos/ba21k/atom-ba21k-medalla-yair.webp"
    }
  ],

  faqs: [
    {
      id: "faq1",
      q: "¿Cómo puedo sumarme a ATOM Club de Running?",
      a: "Es muy fácil: hacé clic en el botón de WhatsApp o escribinos por mensaje directo a nuestro Instagram @atomclubderunning. Nos contás tu nombre, si querés empezar de cero o ya venís corriendo, y en cuál de nuestras dos sedes (La Dormida o La Paz) te gustaría entrenar. Te esperamos para tu primera clase de bienvenida sin compromiso."
    },
    {
      id: "faq2",
      q: "¿Necesito tener experiencia previa corriendo?",
      a: "No, en absoluto. En ATOM dividimos los grupos por nivel. El grupo de Running Inicial trabaja con un método progresivo de caminata y trote suave con ejercicios de movilidad para que tu cuerpo se adapte con seguridad, sin impacto lesivo y a tu propio ritmo."
    },
    {
      id: "faq3",
      q: "¿Dónde y en qué días entrenan?",
      a: "Entrenamos de manera regular en dos sedes de Mendoza: en La Dormida (Santa Rosa) los lunes, miércoles y viernes a las 19:30 hs; y en La Paz los martes y jueves a las 19:30 hs. Los fines de semana realizamos salidas grupales de trail running. Al escribirnos por WhatsApp te confirmamos los puntos exactos de encuentro de esta semana."
    },
    {
      id: "faq4",
      q: "¿Qué indumentaria o elementos necesito para empezar?",
      a: "Solo ropa deportiva cómoda (remera transpirable y short o calza), zapatillas aptas para trotar y tu botella individual de hidratación. A medida que avances, el Prof. César Vergel te asesorará de forma personalizada sobre qué tipo de calzado te conviene según tu pisada."
    },
    {
      id: "faq5",
      q: "¿Es obligatorio competir en carreras de fin de semana?",
      a: "No, para nada. La participación en carreras de calle o trail es 100% opcional. Muchos miembros corren exclusivamente por salud física, para despejar la mente después del trabajo y disfrutar del grupo. Para quienes sí eligen competir, organizamos entrenamientos específicos y viajes en equipo."
    },
    {
      id: "faq6",
      q: "¿Cómo son los entrenamientos con el Prof. César Vergel?",
      a: "Cada sesión dura aproximadamente una hora y media. Inicia con una entrada en calor y movilidad articular guiada, continúa con el bloque principal (aeróbico continuo, pasadas de ritmo o circuitos de fuerza según el día y nivel), y finaliza con elongación asistida y vuelta a la calma."
    }
  ]
};

// LocalStorage Persistence Layer
const STORAGE_KEY = "atom_club_data_v4";

function getAtomData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn("Error reading from localStorage, using default data:", e);
  }
  return DEFAULT_ATOM_DATA;
}

function saveAtomData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Error saving to localStorage:", e);
    return false;
  }
}

function resetAtomData() {
  localStorage.removeItem(STORAGE_KEY);
  return DEFAULT_ATOM_DATA;
}
