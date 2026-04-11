/* ============================================================
   MARINA PURA VIDA — Main JavaScript
   marinapuravida.com
   ============================================================ */

// ── Lang & Theme State ───────────────────────────────────────
let LANG = localStorage.getItem('mpv-lang') || 'es';
let THEME = localStorage.getItem('mpv-theme') || 'dark';

const T = {
  es: {
    nav_home: 'Inicio',
    nav_services: 'Servicios',
    nav_ports: 'Puertos',
    nav_yachts: 'Yates',
    nav_tankers: 'Tanqueros',
    nav_roro: 'RORO',
    nav_news: 'Noticias',
    nav_tracking: 'Tracking',
    nav_contact: 'Contacto',
    hero_eyebrow: 'Costa Rica · Pacífico & Atlántico',
    hero_h1a: 'Agencia Marítima &',
    hero_h1b: 'Asesores Operacionales',
    hero_desc: 'Presencia en tierra. Soluciones en tiempo real. Control operacional total en todos los puertos de Costa Rica.',
    hero_cta1: 'Contactar ahora',
    hero_cta2: 'Ver servicios',
    stat1_label: 'Zonas portuarias',
    stat2_label: 'Respuesta en campo',
    stat3_label: 'Socios estratégicos',
    stat4_label: 'Disponibilidad',
    about_label: 'Sobre nosotros',
    about_h2a: 'No somos solo',
    about_h2b: 'agentes de puerto',
    about_p1: 'En Marina Pura Vida somos socios operacionales en tierra para embarcaciones que llaman a Costa Rica. Con presencia sólida en Golfito, Caldera y Moín, nos especializamos en gestionar escalas complejas, operaciones remotas y coordinación multiparte.',
    about_p2: 'Nuestro equipo combina ejecución en campo con asesoría estratégica, apoyando armadores, operadores, traders y empresas de logística con soluciones en tiempo real sobre el terreno.',
    about_quote: '"Operamos donde otros dudan — entregando certeza en cada escala."',
    about_stat1: 'Puertos cubiertos',
    about_stat2: 'Respuesta 24/7',
    about_stat3: 'Socios activos',
    map_label: 'Red portuaria',
    map_h2a: 'Cobertura',
    map_h2b: 'Nacional',
    map_desc: 'Un solo punto de contacto para el Pacífico y el Atlántico. Toca cada puerto para ver draft máximo, coordenadas, terminales y servicios disponibles.',
    weather_label: 'Condiciones portuarias',
    weather_h2: 'Clima & Mareas en vivo',
    weather_desc: 'Información meteorológica e hidrológica actualizada para los principales puertos donde operamos.',
    tides_caldera: 'Caldera',
    tides_golfito: 'Golfito',
    tides_moin: 'Moín',
    vessel_label: 'Tráfico en vivo',
    vessel_h2: 'Movimiento de buques',
    vessel_desc: 'Tráfico AIS en tiempo real en aguas costarricenses.',
    services_label: 'Qué hacemos',
    services_h2a: 'Servicios',
    services_h2b: 'Especializados',
    tracking_label: 'Cargo Tracking',
    tracking_h2a: 'Rastreo de',
    tracking_h2b: 'Carga RORO / EUKOR',
    tracking_desc: 'Ingresa tu número de BL o VIN para ser redirigido directamente al sistema de rastreo EUKOR con tu consulta precargada.',
    track_bl: 'Bill of Lading',
    track_vin: 'VIN / Vehículo',
    track_placeholder_bl: 'Número de BL...',
    track_placeholder_vin: 'Número VIN...',
    track_btn: 'Buscar en EUKOR →',
    track_note: 'Serás redirigido al sistema oficial de EUKOR Car Carrier. Marina Pura Vida es agente representante de RORO en Costa Rica. Para asistencia directa:',
    news_label: 'Situación portuaria',
    news_h2a: 'Noticias',
    news_h2b: 'Operacionales',
    news_desc: 'Actualizaciones en tiempo real sobre condiciones, restricciones y alertas en los puertos costarricenses.',
    partners_label: 'Alianzas',
    partners_h2a: 'Socios',
    partners_h2b: 'Estratégicos',
    contact_label: 'Contacto',
    contact_h2a: 'Coordinemos',
    contact_h2b: 'tu próxima escala',
    contact_desc: 'Disponibles 24/7 para coordinar operaciones en todos los puertos de Costa Rica.',
    form_name: 'Nombre / Empresa',
    form_email: 'Correo electrónico',
    form_phone: 'Teléfono / WhatsApp',
    form_port: 'Puerto de destino',
    form_service: 'Servicio requerido',
    form_vessel: 'Nombre / IMO del buque',
    form_message: 'Detalles de la operación',
    form_submit: 'Enviar consulta →',
    footer_desc: 'Agencia marítima y asesores operacionales para el Pacífico y Atlántico de Costa Rica.',
    footer_services: 'Servicios',
    footer_ports: 'Puertos',
    footer_company: 'Empresa',
    footer_rights: '© 2026 Marina Pura Vida S.A. Todos los derechos reservados.',
  },
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_ports: 'Ports',
    nav_yachts: 'Yachts',
    nav_tankers: 'Tankers',
    nav_roro: 'RORO',
    nav_news: 'News',
    nav_tracking: 'Tracking',
    nav_contact: 'Contact',
    hero_eyebrow: 'Costa Rica · Pacific & Atlantic',
    hero_h1a: 'Maritime Agency &',
    hero_h1b: 'Operational Advisors',
    hero_desc: 'On-the-ground expertise. Real-time solutions. Total operational control at every Costa Rican port.',
    hero_cta1: 'Contact us now',
    hero_cta2: 'Our services',
    stat1_label: 'Port zones',
    stat2_label: 'On-ground response',
    stat3_label: 'Strategic partners',
    stat4_label: 'Availability',
    about_label: 'About us',
    about_h2a: 'We are not just',
    about_h2b: 'port agents',
    about_p1: 'At Marina Pura Vida, we are hands-on operational partners for vessels calling Costa Rica. With strong presence in Golfito, Caldera, and Moín, we specialize in managing complex port calls, remote operations, and multi-party coordination.',
    about_p2: 'Our team combines field execution with strategic advisory, supporting shipowners, operators, traders, and logistics companies with real-time solutions on the ground.',
    about_quote: '"We operate where others hesitate — delivering certainty in every port call."',
    about_stat1: 'Ports covered',
    about_stat2: '24/7 response',
    about_stat3: 'Active partners',
    map_label: 'Port network',
    map_h2a: 'Full Country',
    map_h2b: 'Coverage',
    map_desc: 'One point of contact for Pacific & Atlantic. Tap each port to view max draft, coordinates, terminals and available services.',
    weather_label: 'Port conditions',
    weather_h2: 'Live Weather & Tides',
    weather_desc: 'Real-time meteorological and tidal information for the main ports where we operate.',
    tides_caldera: 'Caldera',
    tides_golfito: 'Golfito',
    tides_moin: 'Moín',
    vessel_label: 'Live traffic',
    vessel_h2: 'Vessel Movements',
    vessel_desc: 'Real-time AIS traffic in Costa Rican waters.',
    services_label: 'What we do',
    services_h2a: 'Specialized',
    services_h2b: 'Services',
    tracking_label: 'Cargo Tracking',
    tracking_h2a: 'RORO / EUKOR',
    tracking_h2b: 'Cargo Tracking',
    tracking_desc: 'Enter your BL number or VIN to be redirected directly to EUKOR\'s tracking system with your query pre-loaded.',
    track_bl: 'Bill of Lading',
    track_vin: 'VIN / Vehicle',
    track_placeholder_bl: 'BL Number...',
    track_placeholder_vin: 'VIN Number...',
    track_btn: 'Search on EUKOR →',
    track_note: 'You will be redirected to EUKOR\'s official Car Carrier tracking system. Marina Pura Vida is a RORO shipping agent in Costa Rica. For direct assistance:',
    news_label: 'Port status',
    news_h2a: 'Operational',
    news_h2b: 'News',
    news_desc: 'Real-time updates on conditions, restrictions and alerts at Costa Rican ports.',
    partners_label: 'Alliances',
    partners_h2a: 'Strategic',
    partners_h2b: 'Partners',
    contact_label: 'Contact',
    contact_h2a: "Let's coordinate",
    contact_h2b: 'your next port call',
    contact_desc: 'Available 24/7 to coordinate operations at all Costa Rican ports.',
    form_name: 'Name / Company',
    form_email: 'Email address',
    form_phone: 'Phone / WhatsApp',
    form_port: 'Destination port',
    form_service: 'Service required',
    form_vessel: 'Vessel name / IMO',
    form_message: 'Operation details',
    form_submit: 'Send inquiry →',
    footer_desc: 'Maritime agency and operational advisors for Costa Rica\'s Pacific and Atlantic.',
    footer_services: 'Services',
    footer_ports: 'Ports',
    footer_company: 'Company',
    footer_rights: '© 2026 Marina Pura Vida S.A. All rights reserved.',
  }
};

// ── Apply Theme ──────────────────────────────────────────────
function applyTheme(theme) {
  THEME = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('mpv-theme', theme);
  // Swap logo files
  document.querySelectorAll('img.mpv-logo').forEach(img => {
    img.src = theme === 'dark'
      ? 'assets/img/logo-dark.png'
      : 'assets/img/logo-light.png';
  });
}

// ── Apply Language ───────────────────────────────────────────
function applyLang(lang) {
  LANG = lang;
  localStorage.setItem('mpv-lang', lang);

  // 1. Set data-lang on <html> — drives CSS .es / .en classes
  document.documentElement.setAttribute('data-lang', lang);

  // 2. data-t attributes (navbar, section headers)
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (T[lang] && T[lang][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = T[lang][key];
      } else {
        el.innerHTML = T[lang][key];
      }
    }
  });

  // 3. data-t-attr attributes
  document.querySelectorAll('[data-t-attr]').forEach(el => {
    const pairs = el.getAttribute('data-t-attr').split(';');
    pairs.forEach(p => {
      const [attr, key] = p.trim().split(':');
      if (T[lang] && T[lang][key]) el.setAttribute(attr.trim(), T[lang][key]);
    });
  });

  // 4. Lang buttons highlight
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });

  // 5. Refresh dynamic content
  if (window.renderNews) window.renderNews();
  if (window.updateTidesDisplay) window.updateTidesDisplay();
}

// ── Mobile Menu ──────────────────────────────────────────────
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!hamburger || !menu) return;
  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.textContent = menu.classList.contains('open') ? '✕' : '☰';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      hamburger.textContent = '☰';
    });
  });
}

// ── Scroll Animations ────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

// ── Navbar Scroll Effect ─────────────────────────────────────
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40 ? 'var(--shadow-lg)' : '';
  });
}


// ── Port Schedule (JAPDEVA dynamic link) ─────────────────────
async function initSchedule() {
  try {
    const res = await fetch('assets/data/schedule.json');
    const data = await res.json();
    const btn = document.getElementById('japdeva-schedule-btn');
    if (btn && data.japdeva_url) {
      btn.href = data.japdeva_url;
    }
    const updEl = document.getElementById('japdeva-updated');
    if (updEl && data.japdeva_updated) {
      const d = new Date(data.japdeva_updated);
      updEl.textContent = d.toLocaleDateString(
        LANG === 'es' ? 'es-CR' : 'en-US',
        { day: 'numeric', month: 'long', year: 'numeric' }
      );
    }
  } catch(e) {
    console.warn('Could not load schedule.json');
  }
}

// ── Interactive Map ──────────────────────────────────────────
async function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  const map = L.map('map', {
    center: [9.5, -83.7],
    zoom: 7.2,
    zoomControl: true,
    scrollWheelZoom: false,
  });

  const darkTile = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
  const lightTile = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
  const attrib = '&copy; <a href="https://www.openstreetmap.org">OSM</a> &copy; <a href="https://carto.com">CARTO</a>';

  let tileLayer = L.tileLayer(isDark ? darkTile : lightTile, { attribution: attrib, maxZoom: 18 }).addTo(map);

  // Swap tiles when theme toggles
  new MutationObserver(() => {
    const nowDark = document.documentElement.getAttribute('data-theme') === 'dark';
    map.removeLayer(tileLayer);
    tileLayer = L.tileLayer(nowDark ? darkTile : lightTile, { attribution: attrib, maxZoom: 18 }).addTo(map);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // Custom icon
  const mpvIcon = L.divIcon({
    className: '',
    html: `<div style="
      width:36px;height:36px;
      background:var(--navy);
      border:2.5px solid var(--cyan);
      border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      font-size:1rem;
      box-shadow:0 0 0 6px rgba(0,200,200,0.15);
      cursor:pointer;
    ">⚓</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -22],
  });

  let portsData = [];
  try {
    const res = await fetch('assets/data/ports.json');
    const data = await res.json();
    portsData = data.ports;
  } catch(e) {
    console.warn('Could not load ports.json');
    return;
  }

  portsData.forEach(port => {
    const lang = LANG;
    const name = lang === 'es' ? port.name_es : port.name_en;
    const region = lang === 'es' ? port.region_es : port.region_en;
    const services = lang === 'es' ? port.services_es : port.services_en;

    const marker = L.marker([port.lat, port.lng], { icon: mpvIcon }).addTo(map);

    // Build berth rows for ports with multiple drafts (e.g. Caldera)
    const berthRows = port.berths
      ? port.berths.map(b => `<div class="popup-row"><span class="popup-key">Draft ${b.name}</span><span class="popup-val">${b.max_draft_m} m</span></div>`).join('')
      : `<div class="popup-row"><span class="popup-key">Draft máx.</span><span class="popup-val">${port.max_draft_m} m${port.ukc_m ? ' (UKC '+port.ukc_m+'m)' : ''}</span></div>`;

    // Wharf length note for Golfito
    const wharfNote = port.wharf_length_m
      ? `<div class="popup-row"><span class="popup-key">Muelle</span><span class="popup-val">${port.wharf_length_m} m lineales</span></div>`
      : '';

    // Schedule link for Caldera
    const scheduleLink = port.schedule_url
      ? `<a href="${port.schedule_url}" target="_blank" rel="noopener" class="popup-cta" style="margin-bottom:0.5rem;background:var(--navy-light);color:var(--cyan);">📅 ${lang==='es'?'Situación Portuaria PDF':'Port Schedule PDF'}</a>`
      : '';

    const popupHTML = `
      <div class="popup-header">
        <div>
          <div class="popup-port-name">⚓ ${name}</div>
          <div class="popup-region">${region}</div>
        </div>
      </div>
      ${berthRows}
      ${wharfNote}
      <div class="popup-row">
        <span class="popup-key">LOA máx.</span>
        <span class="popup-val">${port.max_loa_m} m</span>
      </div>
      <div class="popup-row">
        <span class="popup-key">Manga máx.</span>
        <span class="popup-val">${port.max_beam_m} m</span>
      </div>
      <div class="popup-row">
        <span class="popup-key">Autoridad</span>
        <span class="popup-val">${port.authority}</span>
      </div>
      <div class="popup-row">
        <span class="popup-key">VHF</span>
        <span class="popup-val">${port.vhf}</span>
      </div>
      <div class="popup-row">
        <span class="popup-key">Pilotaje</span>
        <span class="popup-val">${port.pilotage}</span>
      </div>
      <div class="popup-row">
        <span class="popup-key">Coords</span>
        <span class="popup-val">${port.lat.toFixed(4)}°N ${Math.abs(port.lng).toFixed(4)}°W</span>
      </div>
      <div class="popup-services">
        <div class="popup-services-title">Servicios MPV</div>
        <div class="popup-tags">
          ${services.map(s => `<span class="popup-tag">${s}</span>`).join('')}
        </div>
      </div>
      ${scheduleLink}
      <a href="tel:${port.contact_mpv}" class="popup-cta">📞 ${port.contact_mpv}</a>
    `;

    marker.bindPopup(popupHTML, { maxWidth: 300 });
  });

  // Re-render on theme change
  window.__map = map;
}

// ── Weather Widgets ──────────────────────────────────────────
const WEATHER_PORTS = [
  { name_es: 'Puerto Caldera', name_en: 'Port Caldera', lat: 9.9013, lon: -84.7164 },
  { name_es: 'Puerto Golfito', name_en: 'Port Golfito', lat: 8.6484, lon: -83.1707 },
  { name_es: 'Moín / Limón',   name_en: 'Moín / Limón', lat: 10.0044, lon: -83.0861 },
];

const WEATHER_ICONS = {
  'clear sky': '☀️', 'few clouds': '⛅', 'scattered clouds': '☁️',
  'broken clouds': '🌥️', 'shower rain': '🌦️', 'rain': '🌧️',
  'thunderstorm': '⛈️', 'snow': '❄️', 'mist': '🌫️',
  'overcast clouds': '☁️', 'light rain': '🌦️', 'moderate rain': '🌧️',
  'heavy intensity rain': '⛈️', 'drizzle': '🌦️',
};

async function fetchWeather(lat, lon) {
  // Using Open-Meteo (free, no API key required)
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,wind_direction_10m,weather_code,relative_humidity_2m&wind_speed_unit=kn&timezone=America/Costa_Rica`;
  const res = await fetch(url);
  const data = await res.json();
  return data.current;
}

function wmoToDesc(code) {
  const map = {
    0: { es: 'Despejado', en: 'Clear sky', icon: '☀️' },
    1: { es: 'Mayormente despejado', en: 'Mainly clear', icon: '🌤️' },
    2: { es: 'Parcialmente nublado', en: 'Partly cloudy', icon: '⛅' },
    3: { es: 'Nublado', en: 'Overcast', icon: '☁️' },
    45: { es: 'Neblina', en: 'Foggy', icon: '🌫️' },
    48: { es: 'Neblina helada', en: 'Icy fog', icon: '🌫️' },
    51: { es: 'Llovizna ligera', en: 'Light drizzle', icon: '🌦️' },
    61: { es: 'Lluvia ligera', en: 'Light rain', icon: '🌧️' },
    63: { es: 'Lluvia moderada', en: 'Moderate rain', icon: '🌧️' },
    65: { es: 'Lluvia intensa', en: 'Heavy rain', icon: '⛈️' },
    80: { es: 'Chubascos', en: 'Showers', icon: '🌦️' },
    95: { es: 'Tormenta', en: 'Thunderstorm', icon: '⛈️' },
  };
  return map[code] || { es: 'Variable', en: 'Variable', icon: '🌡️' };
}

async function initWeather() {
  const containers = document.querySelectorAll('.weather-card[data-port-idx]');
  if (!containers.length) return;
  
  for (const card of containers) {
    const idx = parseInt(card.dataset.portIdx);
    const port = WEATHER_PORTS[idx];
    try {
      const w = await fetchWeather(port.lat, port.lon);
      const wdesc = wmoToDesc(w.weather_code);
      card.querySelector('.weather-port-name').textContent =
        LANG === 'es' ? port.name_es : port.name_en;
      card.querySelector('.weather-icon').textContent = wdesc.icon;
      card.querySelector('.weather-temp').textContent =
        `${Math.round(w.temperature_2m)}°C`;
      card.querySelector('.weather-desc').textContent =
        LANG === 'es' ? wdesc.es : wdesc.en;
      card.querySelector('.weather-wind').textContent =
        `${Math.round(w.wind_speed_10m)} kt`;
      card.querySelector('.weather-dir').textContent =
        windDir(w.wind_direction_10m);
      card.querySelector('.weather-hum').textContent =
        `${w.relative_humidity_2m}%`;
    } catch(e) {
      card.querySelector('.weather-desc').textContent = LANG === 'es'
        ? 'No disponible' : 'Unavailable';
    }
  }
}

function windDir(deg) {
  const dirs = ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'];
  return dirs[Math.round(deg / 22.5) % 16];
}

// ── Tides ─────────────────────────────────────────────────────
const TIDE_DATA = {
  caldera: [
    { time: '02:14', height: 0.32, type: 'low' },
    { time: '08:41', height: 2.18, type: 'high' },
    { time: '14:53', height: 0.28, type: 'low' },
    { time: '21:07', height: 2.24, type: 'high' },
  ],
  golfito: [
    { time: '03:22', height: 0.41, type: 'low' },
    { time: '09:15', height: 3.62, type: 'high' },
    { time: '15:44', height: 0.38, type: 'low' },
    { time: '22:01', height: 3.71, type: 'high' },
  ],
  moin: [
    { time: '05:08', height: 0.12, type: 'low' },
    { time: '11:22', height: 0.38, type: 'high' },
    { time: '17:51', height: 0.10, type: 'low' },
    { time: '23:44', height: 0.41, type: 'high' },
  ],
};

let activeTidePort = 'caldera';

window.updateTidesDisplay = function() {
  const container = document.getElementById('tide-predictions');
  if (!container) return;
  const data = TIDE_DATA[activeTidePort] || [];
  container.innerHTML = data.map(t => `
    <div class="tide-item">
      <div class="tide-time">${t.time}</div>
      <div class="tide-height">${t.height.toFixed(2)}m</div>
      <div class="tide-type ${t.type === 'high' ? 'tide-high' : 'tide-low'}">
        ${t.type === 'high'
          ? (LANG === 'es' ? 'Pleamar' : 'High Tide')
          : (LANG === 'es' ? 'Bajamar' : 'Low Tide')}
      </div>
    </div>
  `).join('');
};

function initTides() {
  document.querySelectorAll('.tide-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tide-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTidePort = btn.dataset.port;
      window.updateTidesDisplay();
    });
  });
  window.updateTidesDisplay();
}

// ── News Feed ─────────────────────────────────────────────────
window.renderNews = async function() {
  const container = document.getElementById('news-container');
  if (!container) return;
  let news = [];
  try {
    const res = await fetch('assets/data/noticias.json?v=' + Date.now());
    news = await res.json();
  } catch(e) { return; }

  container.innerHTML = news.map(n => {
    const titulo = LANG === 'es' ? n.titulo_es : n.titulo_en;
    const contenido = LANG === 'es' ? n.contenido_es : n.contenido_en;
    const puerto = LANG === 'es' ? n.puerto : n.puerto_en;
    const fecha = new Date(n.fecha).toLocaleDateString(
      LANG === 'es' ? 'es-CR' : 'en-US',
      { day: 'numeric', month: 'short' }
    );
    return `
      <div class="news-card">
        <div class="news-card-head">
          <div class="news-status status-${n.tipo}"></div>
          <span class="news-puerto">${puerto}</span>
          <span class="news-fecha">${fecha}</span>
        </div>
        <div class="news-card-body">
          <h4>${titulo}</h4>
          <p>${contenido}</p>
        </div>
      </div>
    `;
  }).join('');
};

// ── EUKOR Tracking ────────────────────────────────────────────
function initTracking() {
  const blInput = document.getElementById('track-input');
  const trackBtn = document.getElementById('track-btn');
  const tabs = document.querySelectorAll('.track-tab');
  let trackMode = 'bl';

  if (!blInput || !trackBtn) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      trackMode = tab.dataset.mode;
      blInput.placeholder = trackMode === 'bl'
        ? (LANG === 'es' ? 'Número de BL...' : 'BL Number...')
        : (LANG === 'es' ? 'Número VIN...' : 'VIN Number...');
      blInput.value = '';
    });
  });

  trackBtn.addEventListener('click', () => {
    const val = blInput.value.trim().toUpperCase();
    if (!val) {
      blInput.style.borderColor = '#ef4444';
      setTimeout(() => blInput.style.borderColor = '', 1500);
      return;
    }
    const baseUrl = 'https://www.eukor.com/cargo-tracking/';
    const eukorUrl = trackMode === 'bl'
      ? `${baseUrl}?blNo=${encodeURIComponent(val)}`
      : `${baseUrl}?vinNo=${encodeURIComponent(val)}`;
    window.open(eukorUrl, '_blank', 'noopener');
  });

  blInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') trackBtn.click();
  });
}

// ── Services Tabs ────────────────────────────────────────────
function initServiceTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
}

// ── Contact Form ──────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    // Netlify handles the POST; we just give UX feedback
    const btn = form.querySelector('[type=submit]');
    if (btn) {
      btn.textContent = LANG === 'es' ? '✓ Enviado!' : '✓ Sent!';
      btn.style.background = '#22C55E';
      setTimeout(() => {
        btn.textContent = T[LANG].form_submit;
        btn.style.background = '';
      }, 4000);
    }
  });
}

// ── Active Nav Link ───────────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.45 });
  sections.forEach(s => obs.observe(s));
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(THEME);
  applyLang(LANG);
  initMobileMenu();
  initScrollAnimations();
  initNavbarScroll();
  initActiveNav();
  initMap();
  initWeather();
  initTides();
  window.renderNews();
  initTracking();
  initServiceTabs();
  initContactForm();
  initSchedule();

  // Theme toggle
  const tt = document.getElementById('theme-toggle');
  if (tt) {
    tt.addEventListener('click', () => {
      THEME = THEME === 'dark' ? 'light' : 'dark';
      applyTheme(THEME);
    });
  }

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
