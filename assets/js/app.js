/**
 * ATOM CLUB DE RUNNING - APP CONTROLLER
 * Renderizado dinámico editorial, galería clasificada y enlaces oficiales de WhatsApp / Instagram
 */

let currentGalleryList = [];
let currentGalleryIndex = 0;
window.galleryLists = {};

document.addEventListener("DOMContentLoaded", () => {
  const clubData = typeof getAtomData === "function" ? getAtomData() : DEFAULT_ATOM_DATA;

  initHeader();
  renderEventsSection(clubData);
  setupVideoHeroes();
  renderInstagramFeed(clubData);
  renderTrainingsCatalog(clubData.trainings);
  renderLocationsEditorial(clubData.clubInfo.locations);
  renderRacesEditorial(clubData.races);
  renderGallerySection(clubData);
  renderTestimonialsEditorial(clubData.testimonials);
  renderFAQsClean(clubData.faqs);
  setupLightbox();
  setupCleanContactForm(clubData);
  setupFloatingDock(clubData);
  initLucideIcons();
});

/* ==========================================================================
   OPTIMIZACIÓN DE VIDEOS HERO (LAZY PLAY & CORE WEB VITALS)
   ========================================================================== */
function setupVideoHeroes() {
  const videos = document.querySelectorAll("video.event-video-element, video.featured-card-video");
  if (!videos.length) return;

  videos.forEach(v => {
    v.addEventListener("playing", () => {
      v.classList.add("is-playing");
    });

    // Fallback if autoplay policy pauses it initially
    v.play().catch(() => {});
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const vid = entry.target;
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      });
    }, { threshold: 0.1 });

    videos.forEach(v => observer.observe(v));
  }
}

/* ==========================================================================
   HEADER & SCROLL BEHAVIOR
   ========================================================================== */
function initHeader() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileDrawer = document.getElementById("mobileDrawer");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        if (mobileDrawer.classList.contains("open")) {
          icon.setAttribute("data-lucide", "x");
        } else {
          icon.setAttribute("data-lucide", "menu");
        }
        initLucideIcons();
      }
    });

    mobileDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileDrawer.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.setAttribute("data-lucide", "menu");
          initLucideIcons();
        }
      });
    });
  }
}

/* ==========================================================================
   SECCIÓN DE EVENTOS & COMPETENCIAS (POTRERO CORRE 2026 & 21K BUENOS AIRES)
   ========================================================================== */
function renderEventsSection(clubData) {
  if (!clubData.events) return;

  const potreroEvent = clubData.events.find(e => e.id === "potrero-corre-2026");
  const baEvent = clubData.events.find(e => e.id === "media-maraton-buenos-aires-2026");
  const others = clubData.events.filter(e => !e.featured && e.id !== "potrero-corre-2026" && e.id !== "media-maraton-buenos-aires-2026");

  // 1. Render Otros Eventos (Historial y Próximos)
  const otherGrid = document.getElementById("otherEventsGrid");
  if (otherGrid && others) {
    otherGrid.innerHTML = others.map(ev => `
      <div class="event-box-card">
        <div class="event-box-media">
          <img src="${ev.coverPhoto}" alt="${ev.title}" loading="lazy" />
          <span class="event-box-status ${ev.status}">${ev.statusLabel}</span>
        </div>
        <div class="event-box-body">
          <div class="event-box-date">${ev.displayDate} · ${ev.distance}</div>
          <h3 class="event-box-title">${ev.title}</h3>
          <div class="event-box-loc">
            <i data-lucide="map-pin" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:4px;"></i>
            <span>${ev.location}</span>
          </div>
          <p class="event-box-summary">${ev.summary}</p>
          <button class="btn btn-outline-white btn-sm" onclick="openEventWhatsApp('${ev.title}')" style="margin-top:auto;width:100%;">
            <i data-lucide="flag" style="width:16px;height:16px;"></i> Consultar por esta Carrera
          </button>
        </div>
      </div>
    `).join("");
  }

  // 2. Setup Galería Potrero Corre 2026
  if (potreroEvent) {
    setupSpecificEventGallery("potreroGalleryGrid", "potreroGalleryFilters", potreroEvent);
  }

  // 3. Setup Galería 21K Buenos Aires
  if (baEvent) {
    setupSpecificEventGallery("baGalleryGrid", "baGalleryFilters", baEvent);
  }

  // 4. Páginas individuales (evento-21k-buenos-aires.html o evento-potrero-corre-2026.html)
  const singleGalleryGrid = document.getElementById("eventGalleryGrid");
  if (singleGalleryGrid) {
    const pageEventId = singleGalleryGrid.getAttribute("data-event-id") ||
      (window.location.pathname.includes("potrero") ? "potrero-corre-2026" : "media-maraton-buenos-aires-2026");
    const targetEvent = clubData.events.find(e => e.id === pageEventId) || potreroEvent || baEvent;
    if (targetEvent) {
      setupSpecificEventGallery("eventGalleryGrid", "eventGalleryFilters", targetEvent);
    }
  }

  initLucideIcons();
}

function setupSpecificEventGallery(gridId, filterId, eventData) {
  const grid = document.getElementById(gridId);
  if (!grid || !eventData || !eventData.gallery) return;

  let activePhotos = [...eventData.gallery];
  const filterContainer = document.getElementById(filterId);

  function renderGallery() {
    grid.innerHTML = activePhotos.map((item, idx) => {
      const isLandscape = item.aspect === "landscape" || item.aspect === "panoramic";
      const spanClass = item.aspect === "panoramic" ? "span-panoramic span-col-2" : isLandscape ? "span-col-2 span-landscape" : "";
      const catBadge = item.category === "equipo" ? "Equipo ATOM" : item.category === "medallas" ? "Llegada & Premiación" : "Momentos de Carrera";
      return `
        <div class="gallery-card ${spanClass}" onclick="openEventGalleryModal('${gridId}', ${idx})" title="Ampliar fotografía">
          <div class="gallery-card-img-wrap">
            <img src="${item.photo}" alt="${item.title}" loading="lazy" />
          </div>
          <div class="gallery-card-overlay">
            <div class="gallery-card-category">${catBadge}</div>
            <div class="gallery-card-title">${item.title}</div>
            <div class="gallery-card-caption">${item.caption}</div>
          </div>
        </div>
      `;
    }).join("");

    initLucideIcons();
  }

  window.galleryLists[gridId] = activePhotos;

  if (filterContainer) {
    filterContainer.querySelectorAll(".gallery-filter-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        filterContainer.querySelectorAll(".gallery-filter-pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");

        if (filter === "todas") {
          activePhotos = [...eventData.gallery];
        } else {
          activePhotos = eventData.gallery.filter(item => item.category === filter);
        }
        window.galleryLists[gridId] = activePhotos;
        renderGallery();
      });
    });
  }

  renderGallery();
}

window.openEventGalleryModal = function(gridId, idx) {
  const list = (window.galleryLists && window.galleryLists[gridId]) || [];
  openLightboxList(list, idx);
};

// Compatibilidad previa
window.openEventLightboxAtIndex = function(idx) {
  const defaultList = (window.galleryLists && (window.galleryLists["potreroGalleryGrid"] || window.galleryLists["eventGalleryGrid"] || window.galleryLists["baGalleryGrid"])) || [];
  openLightboxList(defaultList, idx);
};

function openEventWhatsApp(eventName) {
  const clubData = typeof getAtomData === "function" ? getAtomData() : DEFAULT_ATOM_DATA;
  const num = clubData.clubInfo.whatsappNumber || "5492610000000";
  const msg = encodeURIComponent(`Hola Profesor César, quiero consultar sobre la participación de ATOM en "${eventName}" y cómo sumarme al equipo.`);
  window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
}

/* ==========================================================================
   INTEGRACIÓN INSTAGRAM (@atomclubderunning)
   ========================================================================== */
function renderInstagramFeed(clubData) {
  const igGrid = document.getElementById("instagramFeedGrid");
  if (!igGrid || !clubData.instagramFeed) return;

  igGrid.innerHTML = clubData.instagramFeed.map(item => `
    <a href="${item.link}" target="_blank" rel="noopener" class="instagram-feed-card" title="Ver publicación en Instagram @atomclubderunning">
      <img src="${item.image}" alt="ATOM Instagram" loading="lazy" />
      <div class="instagram-card-overlay">
        <img src="assets/img/logos/instagram.svg" alt="Instagram" style="width:28px;height:28px;border-radius:6px;box-shadow:0 2px 8px rgba(0,0,0,0.3);" />
        <p>${item.caption}</p>
      </div>
    </a>
  `).join("");

  initLucideIcons();
}

/* ==========================================================================
   CATÁLOGO DE ENTRENAMIENTOS
   ========================================================================== */
function renderTrainingsCatalog(trainings) {
  const grid = document.getElementById("trainingsCatalogGrid");
  if (!grid || !trainings) return;

  grid.innerHTML = trainings.map(t => `
    <div class="training-catalog-item">
      <div class="training-catalog-photo">
        <img src="${t.photo}" alt="${t.title}" loading="lazy" />
        <span class="training-catalog-tag">${t.badge}</span>
      </div>
      <div class="training-catalog-body">
        <h3 class="training-catalog-title">${t.title}</h3>
        <div class="training-catalog-level">${t.level}</div>
        <p class="training-catalog-summary">${t.summary}</p>
        
        <div class="training-catalog-schedule">
          <strong>Días y Sedes:</strong>
          <p>${t.schedule}</p>
        </div>

        <button class="btn btn-outline-white btn-sm" onclick="openTrainingWhatsApp('${t.title}')" style="width:100%;display:inline-flex;align-items:center;justify-content:center;gap:8px;">
          <img src="assets/img/logos/whatsapp.svg" alt="WhatsApp" style="width:16px;height:16px;border-radius:4px;" /> Consultar por WhatsApp
        </button>
      </div>
    </div>
  `).join("");

  initLucideIcons();
}

function openTrainingWhatsApp(trainingName) {
  const clubData = typeof getAtomData === "function" ? getAtomData() : DEFAULT_ATOM_DATA;
  const num = clubData.clubInfo.whatsappNumber || "5492610000000";
  const msg = encodeURIComponent(`Hola Profesor César, quiero consultar sobre los entrenamientos de "${trainingName}" en ATOM Club de Running para sumarme.`);
  window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
}

function openCoachWhatsAppDirect() {
  const clubData = typeof getAtomData === "function" ? getAtomData() : DEFAULT_ATOM_DATA;
  const num = clubData.clubInfo.whatsappNumber || "5492610000000";
  const msg = encodeURIComponent("Hola Prof. César Vergel, te escribo desde la web de ATOM para conocer los entrenamientos y sumarme.");
  window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
}

/* ==========================================================================
   SEDES EDITORIALES (LA DORMIDA & LA PAZ)
   ========================================================================== */
function renderLocationsEditorial(locations) {
  const grid = document.getElementById("locationsEditorialGrid");
  if (!grid || !locations) return;

  grid.innerHTML = locations.map(loc => `
    <div class="location-editorial-card">
      <div class="location-photo-wrapper">
        <img src="${loc.photo}" alt="${loc.name}" loading="lazy" />
      </div>
      <div class="location-content-body">
        <div class="location-dept-tag">${loc.department}</div>
        <h3 class="location-head-title">${loc.name}</h3>
        
        <div class="location-data-list">
          <div class="location-data-row">
            <strong>Punto:</strong>
            <span>${loc.address}</span>
          </div>
          <div class="location-data-row">
            <strong>Días:</strong>
            <span>${loc.days}</span>
          </div>
          <div class="location-data-row">
            <strong>Horarios:</strong>
            <span>${loc.hours}</span>
          </div>
          <div class="location-data-row">
            <strong>Detalle:</strong>
            <span>${loc.description}</span>
          </div>
        </div>

        <button class="btn btn-outline-white btn-sm" onclick="openLocationWhatsApp('${loc.name}')" style="margin-top:auto;width:100%;">
          <i data-lucide="map-pin" style="width:16px;height:16px;"></i> Sumarme en Sede ${loc.name}
        </button>
      </div>
    </div>
  `).join("");

  initLucideIcons();
}

function openLocationWhatsApp(locName) {
  const clubData = typeof getAtomData === "function" ? getAtomData() : DEFAULT_ATOM_DATA;
  const num = clubData.clubInfo.whatsappNumber || "5492610000000";
  const msg = encodeURIComponent(`Hola, me interesa sumarme a los entrenamientos de ATOM Club de Running en la sede de ${locName}. ¿Cómo puedo coordinar?`);
  window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
}

/* ==========================================================================
   CARRERAS Y COMPETENCIAS (COMPATIBILIDAD CON DATA HISTÓRICA)
   ========================================================================== */
function renderRacesEditorial(races) {
  const grid = document.getElementById("racesEditorialGrid");
  if (!grid || !races) return;

  grid.innerHTML = races.map(r => `
    <div class="race-editorial-card">
      <div class="race-card-photo">
        <img src="${r.photo}" alt="${r.name}" loading="lazy" />
      </div>
      <div class="race-card-body">
        <div class="race-distances-tag">${r.distances}</div>
        <h3 class="race-card-name">${r.name}</h3>
        <div class="race-card-location">
          <i data-lucide="map-pin" style="width:14px;height:14px;display:inline-block;vertical-align:middle;margin-right:4px;"></i>
          ${r.location}
        </div>
        <p class="race-card-summary">${r.summary}</p>
        
        <div class="race-card-highlight">
          <strong>ATOM en carrera:</strong> ${r.highlight}
        </div>

        <button class="btn btn-outline-white btn-sm" onclick="openRaceWhatsApp('${r.name}')" style="margin-top:20px;width:100%;">
          <i data-lucide="flag" style="width:16px;height:16px;"></i> Correr esta prueba con ATOM
        </button>
      </div>
    </div>
  `).join("");

  initLucideIcons();
}

function openRaceWhatsApp(raceName) {
  const clubData = typeof getAtomData === "function" ? getAtomData() : DEFAULT_ATOM_DATA;
  const num = clubData.clubInfo.whatsappNumber || "5492610000000";
  const msg = encodeURIComponent(`Hola! Quiero saber cómo se prepara ATOM para participar en "${raceName}" y cómo puedo sumarme al grupo.`);
  window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
}

/* ==========================================================================
   GALERÍA INSTITUCIONAL EDITORIAL (SECCIÓN COMUNIDAD)
   ========================================================================== */
function renderGallerySection(clubData) {
  const filterBar = document.getElementById("galleryFilterBar");
  const grid = document.getElementById("galleryEditorialGrid");
  if (!grid || !clubData.gallery) return;

  if (filterBar && clubData.galleryCategories) {
    filterBar.innerHTML = clubData.galleryCategories.map((cat, idx) => `
      <button class="gallery-filter-btn ${idx === 0 ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `).join("");

    filterBar.querySelectorAll(".gallery-filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterBar.querySelectorAll(".gallery-filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-cat");
        
        if (category === "all") {
          renderGalleryGrid(clubData.gallery);
        } else {
          const filtered = clubData.gallery.filter(item => item.category === category);
          renderGalleryGrid(filtered);
        }
      });
    });
  }

  renderGalleryGrid(clubData.gallery);
}

function renderGalleryGrid(items) {
  const grid = document.getElementById("galleryEditorialGrid");
  if (!grid || !items) return;

  grid.innerHTML = items.map((item, idx) => {
    const spanClass = idx === 0 ? "span-2-col span-2-row" : idx === 5 ? "span-2-col" : "";
    return `
      <div class="gallery-mosaic-item ${spanClass}" onclick="openLightboxItem('${item.photo}', '${escapeHtml(item.title)}', '${escapeHtml(item.caption)}')">
        <img src="${item.photo}" alt="${item.title}" loading="lazy" />
        <div class="gallery-mosaic-overlay">
          <div class="gallery-mosaic-title">${item.title}</div>
          <div class="gallery-mosaic-caption">${item.caption}</div>
        </div>
      </div>
    `;
  }).join("");
}

function escapeHtml(text) {
  if (!text) return "";
  return text.replace(/'/g, "&#39;").replace(/"/g, "&quot;");
}

/* ==========================================================================
   LIGHTBOX MODAL INTERACTIVO CON NAVEGACIÓN Y TECLADO (ESC / FLECHAS)
   ========================================================================== */
function setupLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeLightbox());
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      stepLightbox(-1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      stepLightbox(1);
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowLeft") {
      stepLightbox(-1);
    } else if (e.key === "ArrowRight") {
      stepLightbox(1);
    }
  });
}

function openLightboxList(list, index = 0) {
  if (!list || list.length === 0) return;
  currentGalleryList = list;
  currentGalleryIndex = Math.max(0, Math.min(index, list.length - 1));
  updateLightboxContent();

  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function updateLightboxContent() {
  const img = document.getElementById("lightboxImg");
  const titleEl = document.getElementById("lightboxTitle");
  const captionEl = document.getElementById("lightboxCaption");
  const counterEl = document.getElementById("lightboxCounter");

  if (!currentGalleryList || currentGalleryList.length === 0) return;
  const current = currentGalleryList[currentGalleryIndex];
  if (!current) return;

  if (img) {
    img.src = current.photo;
    img.alt = current.title || "ATOM Running";
  }
  if (titleEl) {
    titleEl.textContent = current.title || "";
  }
  if (captionEl) {
    captionEl.textContent = current.caption || "";
  }
  if (counterEl) {
    counterEl.textContent = `${currentGalleryIndex + 1} / ${currentGalleryList.length}`;
  }
}

function stepLightbox(delta) {
  if (!currentGalleryList || currentGalleryList.length === 0) return;
  currentGalleryIndex = (currentGalleryIndex + delta + currentGalleryList.length) % currentGalleryList.length;
  updateLightboxContent();
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function openLightboxItem(photoUrl, title, caption) {
  openLightboxList([{ photo: photoUrl, title, caption }], 0);
}

/* ==========================================================================
   TESTIMONIOS EDITORIALES
   ========================================================================== */
function renderTestimonialsEditorial(testimonials) {
  const grid = document.getElementById("testimonialsEditorialGrid");
  if (!grid || !testimonials) return;

  grid.innerHTML = testimonials.map(t => `
    <div class="testimonial-editorial-item">
      <div class="testimonial-editorial-quote">
        "${t.quote}"
      </div>
      <div class="testimonial-editorial-author">
        <img src="${t.photo}" alt="${t.name}" class="testimonial-author-avatar" loading="lazy" />
        <div>
          <div class="testimonial-author-name">${t.name}</div>
          <div class="testimonial-author-race">${t.race}</div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   PREGUNTAS FRECUENTES (FAQ ACORDEÓN LIMPIO)
   ========================================================================== */
function renderFAQsClean(faqs) {
  const list = document.getElementById("faqCleanList");
  if (!list || !faqs) return;

  list.innerHTML = faqs.map((f, idx) => `
    <div class="faq-clean-card ${idx === 0 ? 'open' : ''}">
      <button class="faq-clean-trigger" type="button">
        <span>${f.q}</span>
        <i data-lucide="chevron-down" class="faq-clean-arrow"></i>
      </button>
      <div class="faq-clean-body">
        <p>${f.a}</p>
      </div>
    </div>
  `).join("");

  list.addEventListener("click", (e) => {
    const trigger = e.target.closest(".faq-clean-trigger");
    if (!trigger) return;
    const card = trigger.closest(".faq-clean-card");
    card.classList.toggle("open");
  });

  initLucideIcons();
}

/* ==========================================================================
   FORMULARIO LIMPIO DE CONTACTO DIRECTO
   ========================================================================== */
function setupCleanContactForm(clubData) {
  const form = document.getElementById("cleanInquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("inqName")?.value.trim() || "";
    const sede = document.getElementById("inqSede")?.value || "La Dormida";
    const level = document.getElementById("inqLevel")?.value || "Inicial";
    const notes = document.getElementById("inqNotes")?.value.trim() || "";

    const fullMessage = `Hola ATOM Club de Running! Mi nombre es *${name}*.\n` +
      `📍 Sede elegida: ${sede}\n` +
      `🏃‍♂️ Nivel actual: ${level}\n` +
      (notes ? `💬 Comentario: ${notes}\n` : '') +
      `\nQuiero saber cómo puedo sumarme a los entrenamientos.`;

    const num = clubData.clubInfo.whatsappNumber || "5492610000000";
    const url = `https://wa.me/${num}?text=${encodeURIComponent(fullMessage)}`;

    window.open(url, "_blank");
    form.reset();
  });
}

/* ==========================================================================
   BOTÓN FLOTANTE DISCRETO (DOCK WHATSAPP)
   ========================================================================== */
function setupFloatingDock(clubData) {
  const dock = document.getElementById("floatingWaDock");
  if (!dock) return;

  const num = clubData.clubInfo.whatsappNumber || "5492610000000";
  const msg = encodeURIComponent(clubData.clubInfo.whatsappDefaultMsg || "Hola, quiero conocer ATOM Club de Running y saber cómo puedo sumarme.");
  dock.href = `https://wa.me/${num}?text=${msg}`;
}

/* ==========================================================================
   LUCIDE ICONS REFRESH
   ========================================================================== */
function initLucideIcons() {
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }
}
