/**
 * ATOM CLUB DE RUNNING - ADMIN CMS CONTROLLER
 * Gestión de entrenamientos, eventos, galería, sedes, coach y contactos
 */

let currentAdminData = null;

document.addEventListener("DOMContentLoaded", () => {
  currentAdminData = typeof getAtomData === "function" ? getAtomData() : DEFAULT_ATOM_DATA;

  loadClubInfoForm();
  loadLocationsForm();
  loadTrainingsAdmin();
  loadRacesAdmin();
  loadGalleryAdmin();
  loadTestimonialsAdmin();
  loadFAQsAdmin();

  setupGlobalAdminActions();
  if (typeof lucide !== "undefined") lucide.createIcons();
});

/* ==========================================================================
   1. INFORMACIÓN GENERAL Y COACH
   ========================================================================== */
function loadClubInfoForm() {
  const { clubInfo } = currentAdminData;
  if (!clubInfo) return;

  setValue("ci_name", clubInfo.name);
  setValue("ci_tagline", clubInfo.tagline);
  setValue("ci_headline", clubInfo.headline);
  setValue("ci_subheadline", clubInfo.subheadline);
  setValue("ci_instagram", clubInfo.instagram);
  setValue("ci_instagramUser", clubInfo.instagramUser);
  setValue("ci_whatsapp", clubInfo.whatsappNumber);
  setValue("ci_whatsappMsg", clubInfo.whatsappDefaultMsg);

  if (clubInfo.headCoach) {
    setValue("coach_name", clubInfo.headCoach.name);
    setValue("coach_role", clubInfo.headCoach.title);
    setValue("coach_ig", clubInfo.headCoach.instagram);
    setValue("coach_bio", clubInfo.headCoach.bio);
    setValue("coach_photo", clubInfo.headCoach.photo);
  }
}

function saveClubInfo() {
  currentAdminData.clubInfo.name = getValue("ci_name");
  currentAdminData.clubInfo.tagline = getValue("ci_tagline");
  currentAdminData.clubInfo.headline = getValue("ci_headline");
  currentAdminData.clubInfo.subheadline = getValue("ci_subheadline");
  currentAdminData.clubInfo.instagram = getValue("ci_instagram");
  currentAdminData.clubInfo.instagramUser = getValue("ci_instagramUser");
  currentAdminData.clubInfo.whatsappNumber = getValue("ci_whatsapp");
  currentAdminData.clubInfo.whatsappDefaultMsg = getValue("ci_whatsappMsg");

  if (!currentAdminData.clubInfo.headCoach) currentAdminData.clubInfo.headCoach = {};
  currentAdminData.clubInfo.headCoach.name = getValue("coach_name");
  currentAdminData.clubInfo.headCoach.title = getValue("coach_role");
  currentAdminData.clubInfo.headCoach.instagram = getValue("coach_ig");
  currentAdminData.clubInfo.headCoach.bio = getValue("coach_bio");
  currentAdminData.clubInfo.headCoach.photo = getValue("coach_photo");

  commitChanges("Información general y entrenador guardados con éxito.");
}

/* ==========================================================================
   2. SEDES Y HORARIOS
   ========================================================================== */
function loadLocationsForm() {
  const container = document.getElementById("adminLocationsList");
  if (!container || !currentAdminData.clubInfo.locations) return;

  container.innerHTML = currentAdminData.clubInfo.locations.map((loc, idx) => `
    <div class="admin-item-card" data-idx="${idx}">
      <div class="admin-item-header">
        <h4>${loc.name} (${loc.department})</h4>
      </div>
      <div class="admin-item-body">
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Nombre de Sede</label>
            <input type="text" class="form-control" id="loc_name_${idx}" value="${loc.name}">
          </div>
          <div class="form-group">
            <label class="form-label">Departamento</label>
            <input type="text" class="form-control" id="loc_dept_${idx}" value="${loc.department}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Dirección o Punto de Encuentro</label>
          <input type="text" class="form-control" id="loc_addr_${idx}" value="${loc.address}">
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Días</label>
            <input type="text" class="form-control" id="loc_days_${idx}" value="${loc.days}">
          </div>
          <div class="form-group">
            <label class="form-label">Horarios</label>
            <input type="text" class="form-control" id="loc_hours_${idx}" value="${loc.hours}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Descripción</label>
          <input type="text" class="form-control" id="loc_desc_${idx}" value="${loc.description}">
        </div>
        <div class="form-group">
          <label class="form-label">Ruta de Foto</label>
          <input type="text" class="form-control" id="loc_photo_${idx}" value="${loc.photo || ''}">
        </div>
      </div>
    </div>
  `).join("");
}

function saveLocations() {
  currentAdminData.clubInfo.locations.forEach((loc, idx) => {
    loc.name = getValue(`loc_name_${idx}`);
    loc.department = getValue(`loc_dept_${idx}`);
    loc.address = getValue(`loc_addr_${idx}`);
    loc.days = getValue(`loc_days_${idx}`);
    loc.hours = getValue(`loc_hours_${idx}`);
    loc.description = getValue(`loc_desc_${idx}`);
    loc.photo = getValue(`loc_photo_${idx}`);
  });
  commitChanges("Sedes y horarios actualizados.");
}

/* ==========================================================================
   3. ENTRENAMIENTOS
   ========================================================================== */
function loadTrainingsAdmin() {
  const container = document.getElementById("adminTrainingsList");
  if (!container || !currentAdminData.trainings) return;

  container.innerHTML = currentAdminData.trainings.map((t, idx) => `
    <div class="admin-item-card" data-idx="${idx}">
      <div class="admin-item-header">
        <h4>Modalidad: ${t.title}</h4>
        <button class="btn btn-outline-white btn-sm" onclick="removeTraining(${idx})" style="color:#FF6B4A;border-color:rgba(255,107,74,0.4)">
          Eliminar
        </button>
      </div>
      <div class="admin-item-body">
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Título</label>
            <input type="text" class="form-control" id="trn_title_${idx}" value="${t.title}">
          </div>
          <div class="form-group">
            <label class="form-label">Etiqueta / Badge</label>
            <input type="text" class="form-control" id="trn_badge_${idx}" value="${t.badge}">
          </div>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Nivel</label>
            <input type="text" class="form-control" id="trn_level_${idx}" value="${t.level}">
          </div>
          <div class="form-group">
            <label class="form-label">Categoría Filtro (salud, calle, trail, fuerza)</label>
            <input type="text" class="form-control" id="trn_cat_${idx}" value="${t.category}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Resumen</label>
          <textarea class="form-control" id="trn_summary_${idx}" rows="2">${t.summary}</textarea>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Días y Horarios</label>
            <input type="text" class="form-control" id="trn_sched_${idx}" value="${t.schedule}">
          </div>
          <div class="form-group">
            <label class="form-label">Ruta de Foto</label>
            <input type="text" class="form-control" id="trn_photo_${idx}" value="${t.photo}">
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function saveTrainings() {
  currentAdminData.trainings.forEach((t, idx) => {
    t.title = getValue(`trn_title_${idx}`);
    t.badge = getValue(`trn_badge_${idx}`);
    t.level = getValue(`trn_level_${idx}`);
    t.category = getValue(`trn_cat_${idx}`);
    t.summary = getValue(`trn_summary_${idx}`);
    t.schedule = getValue(`trn_sched_${idx}`);
    t.photo = getValue(`trn_photo_${idx}`);
  });
  commitChanges("Entrenamientos actualizados correctamente.");
}

function addTraining() {
  currentAdminData.trainings.push({
    id: "trn_" + Date.now(),
    title: "Nueva Modalidad",
    badge: "Programa",
    category: "calle",
    level: "Todos los niveles",
    target: "Corredores de ATOM",
    summary: "Descripción de los objetivos y técnica del entrenamiento.",
    schedule: "La Dormida y La Paz",
    photo: "assets/img/library/atom-running-calle-01.webp"
  });
  loadTrainingsAdmin();
  commitChanges("Nueva modalidad agregada.");
}

function removeTraining(idx) {
  if (confirm("¿Estás seguro de eliminar este entrenamiento?")) {
    currentAdminData.trainings.splice(idx, 1);
    loadTrainingsAdmin();
    commitChanges("Entrenamiento eliminado.");
  }
}

/* ==========================================================================
   4. CARRERAS Y EVENTOS
   ========================================================================== */
function loadRacesAdmin() {
  const container = document.getElementById("adminRacesList");
  if (!container || !currentAdminData.races) return;

  container.innerHTML = currentAdminData.races.map((r, idx) => `
    <div class="admin-item-card" data-idx="${idx}">
      <div class="admin-item-header">
        <h4>${r.name}</h4>
        <button class="btn btn-outline-white btn-sm" onclick="removeRace(${idx})" style="color:#FF6B4A;border-color:rgba(255,107,74,0.4)">
          Eliminar
        </button>
      </div>
      <div class="admin-item-body">
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Nombre del Evento</label>
            <input type="text" class="form-control" id="race_name_${idx}" value="${r.name}">
          </div>
          <div class="form-group">
            <label class="form-label">Distancias</label>
            <input type="text" class="form-control" id="race_dist_${idx}" value="${r.distances}">
          </div>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Ubicación</label>
            <input type="text" class="form-control" id="race_loc_${idx}" value="${r.location}">
          </div>
          <div class="form-group">
            <label class="form-label">Fecha o Temporada</label>
            <input type="text" class="form-control" id="race_date_${idx}" value="${r.date}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Resumen / Detalle</label>
          <textarea class="form-control" id="race_summary_${idx}" rows="2">${r.summary}</textarea>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Impacto / Logros ATOM</label>
            <input type="text" class="form-control" id="race_achieve_${idx}" value="${r.highlight}">
          </div>
          <div class="form-group">
            <label class="form-label">Foto</label>
            <input type="text" class="form-control" id="race_photo_${idx}" value="${r.photo}">
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function saveRaces() {
  currentAdminData.races.forEach((r, idx) => {
    r.name = getValue(`race_name_${idx}`);
    r.distances = getValue(`race_dist_${idx}`);
    r.location = getValue(`race_loc_${idx}`);
    r.date = getValue(`race_date_${idx}`);
    r.summary = getValue(`race_summary_${idx}`);
    r.highlight = getValue(`race_achieve_${idx}`);
    r.photo = getValue(`race_photo_${idx}`);
  });
  commitChanges("Carreras y eventos actualizados.");
}

function addRace() {
  currentAdminData.races.push({
    id: "race_" + Date.now(),
    name: "Nueva Carrera",
    location: "Mendoza",
    date: "Temporada Actual",
    distances: "10K · 5K",
    category: "calle",
    summary: "Participación del club en pruebas del circuito mendocino.",
    photo: "assets/img/library/atom-competencia-01.webp",
    highlight: "Inscripciones y preparación con el club."
  });
  loadRacesAdmin();
  commitChanges("Nueva carrera añadida.");
}

function removeRace(idx) {
  if (confirm("¿Eliminar esta carrera del listado?")) {
    currentAdminData.races.splice(idx, 1);
    loadRacesAdmin();
    commitChanges("Carrera eliminada.");
  }
}

/* ==========================================================================
   5. GALERÍA
   ========================================================================== */
function loadGalleryAdmin() {
  const container = document.getElementById("adminGalleryList");
  if (!container || !currentAdminData.gallery) return;

  container.innerHTML = currentAdminData.gallery.map((g, idx) => `
    <div class="admin-item-card" data-idx="${idx}">
      <div class="admin-item-header">
        <h4>Foto #${g.id}: ${g.title}</h4>
        <button class="btn btn-outline-white btn-sm" onclick="removeGalleryItem(${idx})" style="color:#FF6B4A;border-color:rgba(255,107,74,0.4)">
          Eliminar
        </button>
      </div>
      <div class="admin-item-body">
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Título</label>
            <input type="text" class="form-control" id="gal_title_${idx}" value="${g.title}">
          </div>
          <div class="form-group">
            <label class="form-label">Categoría (entrenamientos, trail, calle, competencias, comunidad)</label>
            <input type="text" class="form-control" id="gal_cat_${idx}" value="${g.category}">
          </div>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Ruta de Foto</label>
            <input type="text" class="form-control" id="gal_photo_${idx}" value="${g.photo}">
          </div>
          <div class="form-group">
            <label class="form-label">Epígrafe</label>
            <input type="text" class="form-control" id="gal_cap_${idx}" value="${g.caption}">
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

function saveGallery() {
  currentAdminData.gallery.forEach((g, idx) => {
    g.title = getValue(`gal_title_${idx}`);
    g.category = getValue(`gal_cat_${idx}`);
    g.photo = getValue(`gal_photo_${idx}`);
    g.caption = getValue(`gal_cap_${idx}`);
  });
  commitChanges("Galería actualizada.");
}

function addGalleryItem() {
  currentAdminData.gallery.push({
    id: currentAdminData.gallery.length + 1,
    title: "Nueva Foto",
    category: "comunidad",
    photo: "assets/img/library/atom-comunidad-01.webp",
    caption: "Momentos del club."
  });
  loadGalleryAdmin();
  commitChanges("Nueva foto agregada.");
}

function removeGalleryItem(idx) {
  if (confirm("¿Eliminar esta imagen?")) {
    currentAdminData.gallery.splice(idx, 1);
    loadGalleryAdmin();
    commitChanges("Foto eliminada.");
  }
}

/* ==========================================================================
   6. TESTIMONIOS & FAQs
   ========================================================================== */
function loadTestimonialsAdmin() {
  const container = document.getElementById("adminTestimonialsList");
  if (!container || !currentAdminData.testimonials) return;

  container.innerHTML = currentAdminData.testimonials.map((t, idx) => `
    <div class="admin-item-card" data-idx="${idx}">
      <div class="admin-item-header">
        <h4>Testimonio: ${t.name}</h4>
      </div>
      <div class="admin-item-body">
        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label">Nombre del Corredor</label>
            <input type="text" class="form-control" id="test_name_${idx}" value="${t.name}">
          </div>
          <div class="form-group">
            <label class="form-label">Rol / Logro</label>
            <input type="text" class="form-control" id="test_race_${idx}" value="${t.race}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Testimonio / Frase</label>
          <textarea class="form-control" id="test_quote_${idx}" rows="2">${t.quote}</textarea>
        </div>
      </div>
    </div>
  `).join("");
}

function saveTestimonials() {
  currentAdminData.testimonials.forEach((t, idx) => {
    t.name = getValue(`test_name_${idx}`);
    t.race = getValue(`test_race_${idx}`);
    t.quote = getValue(`test_quote_${idx}`);
  });
  commitChanges("Testimonios guardados.");
}

function loadFAQsAdmin() {
  const container = document.getElementById("adminFAQsList");
  if (!container || !currentAdminData.faqs) return;

  container.innerHTML = currentAdminData.faqs.map((f, idx) => `
    <div class="admin-item-card" data-idx="${idx}">
      <div class="admin-item-header">
        <h4>FAQ #${idx + 1}</h4>
      </div>
      <div class="admin-item-body">
        <div class="form-group">
          <label class="form-label">Pregunta</label>
          <input type="text" class="form-control" id="faq_q_${idx}" value="${f.q}">
        </div>
        <div class="form-group">
          <label class="form-label">Respuesta</label>
          <textarea class="form-control" id="faq_a_${idx}" rows="3">${f.a}</textarea>
        </div>
      </div>
    </div>
  `).join("");
}

function saveFAQs() {
  currentAdminData.faqs.forEach((f, idx) => {
    f.q = getValue(`faq_q_${idx}`);
    f.a = getValue(`faq_a_${idx}`);
  });
  commitChanges("Preguntas Frecuentes guardadas.");
}

/* ==========================================================================
   GLOBAL ACTIONS & EXPORT/IMPORT
   ========================================================================== */
function setupGlobalAdminActions() {
  document.getElementById("btnExportJSON")?.addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentAdminData, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `atom_club_data_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchor.click();
    showToast("Archivo JSON exportado correctamente.");
  });

  document.getElementById("btnResetDefault")?.addEventListener("click", () => {
    if (confirm("¿Estás seguro de restablecer todos los datos a la configuración inicial confirmada?")) {
      currentAdminData = resetAtomData();
      location.reload();
    }
  });

  document.getElementById("btnSaveAll")?.addEventListener("click", () => {
    saveClubInfo();
    saveLocations();
    saveTrainings();
    saveRaces();
    saveGallery();
    saveTestimonials();
    saveFAQs();
    showToast("¡TODOS LOS CAMBIOS FUERON GUARDADOS CON ÉXITO!");
  });
}

function commitChanges(message) {
  saveAtomData(currentAdminData);
  showToast(message);
}

function getValue(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : "";
}

function setValue(id, val) {
  const el = document.getElementById(id);
  if (el && val !== undefined) el.value = val;
}

function showToast(msg) {
  let toast = document.getElementById("adminToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "adminToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #00E5FF;
      color: #001524;
      font-family: 'Outfit', sans-serif;
      font-weight: 800;
      padding: 16px 28px;
      border-radius: 6px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      z-index: 9999;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.25s ease;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 3000);
}
