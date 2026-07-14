/**
 * main.js — Logique du portfolio Moussa Sarr
 * Vanilla JS uniquement. Compatible GitHub Pages (aucun backend requis).
 */
(() => {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* STATE                                                               */
  /* ------------------------------------------------------------------ */
  const state = {
    lang: localStorage.getItem("ms_lang") || (navigator.language || "fr").slice(0, 2),
    theme: localStorage.getItem("ms_theme") || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"),
    recruiter: false,
    activeSkillCat: "systemes",
    activeArchNode: 0
  };
  if (!I18N[state.lang]) state.lang = "fr";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const t = () => I18N[state.lang];

  /* ------------------------------------------------------------------ */
  /* THEME                                                               */
  /* ------------------------------------------------------------------ */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = $("#theme-toggle");
    if (btn) btn.setAttribute("aria-label", state.theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre");
    const iconMoon = $("#icon-moon"), iconSun = $("#icon-sun");
    if (iconMoon && iconSun) {
      iconMoon.style.display = state.theme === "dark" ? "block" : "none";
      iconSun.style.display = state.theme === "light" ? "block" : "none";
    }
  }
  function toggleTheme() {
    state.theme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("ms_theme", state.theme);
    applyTheme();
  }

  /* ------------------------------------------------------------------ */
  /* LANGUAGE                                                            */
  /* ------------------------------------------------------------------ */
  function setLang(lang) {
    if (!I18N[lang]) return;
    state.lang = lang;
    localStorage.setItem("ms_lang", lang);
    document.documentElement.lang = lang;
    $$(".lang-btn").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"));
    renderAll();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: static text nodes via data-i18n="path.to.key"               */
  /* ------------------------------------------------------------------ */
  function resolve(path, obj) {
    return path.split(".").reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
  }
  function renderStatic() {
    const dict = t();
    $$("[data-i18n]").forEach(el => {
      const val = resolve(el.dataset.i18n, dict);
      if (typeof val === "string") el.textContent = val;
    });
    document.title = dict.meta.title;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict.meta.description);
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: KPI                                                         */
  /* ------------------------------------------------------------------ */
  function renderKPI() {
    const wrap = $("#kpi-grid");
    if (!wrap) return;
    wrap.innerHTML = t().kpi.items.map((item, i) => `
      <div class="kpi-cell reveal">
        <div class="kpi-num" data-target="${item.num}" data-suffix="${item.suffix}">0<span class="suffix"></span></div>
        <div class="kpi-label">${item.label}</div>
      </div>`).join("");
    observeReveals();
    animateCounters();
  }

  function animateCounters() {
    $$(".kpi-num").forEach(el => {
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const isDecimal = String(el.dataset.target).includes(".");
      let started = false;
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started) {
            started = true;
            const dur = 1400;
            const start = performance.now();
            function tick(now) {
              const progress = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const val = target * eased;
              el.childNodes[0].nodeValue = isDecimal ? val.toFixed(1) : Math.round(val);
              el.querySelector(".suffix").textContent = suffix;
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(el);
    });
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: VALUES                                                      */
  /* ------------------------------------------------------------------ */
  const valueIcons = [
    '<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"/>',
    '<path d="M4 4h16v12H8l-4 4V4z"/>',
    '<path d="M12 2v6m0 8v6m10-10h-6M8 12H2m15.5-7.5l-4.2 4.2m-6.6 6.6l-4.2 4.2m14.9 0l-4.2-4.2M8.7 8.7L4.5 4.5"/>',
    '<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/>',
    '<circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><path d="M2 20c0-3 2.5-5 5-5s5 2 5 5M12 20c0-3 2.5-5 5-5s5 2 5 5"/>',
    '<path d="M12 22s8-4.5 8-11V5l-8-3-8 3v6c0 6.5 8 11 8 11z"/>',
    '<path d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M4 6v4h4M20 18v-4h-4"/>',
    '<path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z"/>'
  ];
  function renderValues() {
    const wrap = $("#values-grid");
    if (!wrap) return;
    wrap.innerHTML = t().values.items.map((v, i) => `
      <div class="card value-card reveal">
        <div class="value-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${valueIcons[i % valueIcons.length]}</svg></div>
        <h4>${v.h}</h4>
        <p>${v.p}</p>
      </div>`).join("");
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: ABOUT pillars                                               */
  /* ------------------------------------------------------------------ */
  function renderAbout() {
    const wrap = $("#about-pillars");
    if (!wrap) return;
    wrap.innerHTML = t().about.pillars.map(p => `
      <div class="pillar"><h4>${p.h}</h4><p>${p.p}</p></div>`).join("");
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: VISION items                                                */
  /* ------------------------------------------------------------------ */
  function renderVision() {
    const wrap = $("#vision-grid");
    if (!wrap) return;
    wrap.innerHTML = t().vision.items.map(v => `
      <div class="card reveal"><h4>${v.h}</h4><p style="margin-top:8px">${v.p}</p></div>`).join("");
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: TIMELINE                                                    */
  /* ------------------------------------------------------------------ */
  function renderTimeline() {
    const wrap = $("#timeline");
    if (!wrap) return;
    wrap.innerHTML = t().timeline.items.map((item, i) => `
      <div class="tl-item reveal ${i === 0 ? "current" : ""}">
        <div class="tl-dot"></div>
        <div class="tl-date">${item.date}</div>
        <div class="tl-role">${item.role}</div>
        <div class="tl-org">${item.org}</div>
        <div class="tl-body"><p>${item.body}</p><p style="margin-top:8px;color:var(--text)">${item.results}</p></div>
        <div class="tl-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>`).join("");
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: IMPACT / REALISATIONS                                       */
  /* ------------------------------------------------------------------ */
  function renderImpact() {
    const wrap = $("#impact-list");
    if (!wrap) return;
    wrap.innerHTML = t().impact.items.map((txt, i) => `
      <div class="impact-item reveal">
        <div class="impact-num">${String(i + 1).padStart(2, "0")}</div>
        <p>${txt}</p>
      </div>`).join("");
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: SKILLS                                                      */
  /* ------------------------------------------------------------------ */
  function renderSkills() {
    const tabsWrap = $("#skill-tabs");
    const panelsWrap = $("#skill-panels");
    if (!tabsWrap || !panelsWrap) return;
    const cats = t().skills.cats;
    const data = t().skills.data;
    const levelPct = { "Expert": 95, "Avancé": 80, "Advanced": 80, "Intermédiaire": 55, "Intermediate": 55 };

    tabsWrap.innerHTML = Object.keys(cats).map(key => `
      <button class="skill-tab" role="tab" data-cat="${key}" aria-selected="${key === state.activeSkillCat}">${cats[key]}</button>
    `).join("");

    panelsWrap.innerHTML = Object.keys(data).map(key => `
      <div class="skill-panel ${key === state.activeSkillCat ? "active" : ""}" data-panel="${key}">
        ${data[key].map(s => `
          <div class="card skill-card reveal">
            <div class="skill-top"><strong style="font-size:var(--fs-sm)">${s.name}</strong><span class="skill-level">${s.level}</span></div>
            <div class="skill-bar"><span style="width:${levelPct[s.level] || 60}%"></span></div>
            <p class="skill-usecase">${s.usecase}</p>
          </div>`).join("")}
      </div>
    `).join("");

    $$(".skill-tab", tabsWrap).forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeSkillCat = btn.dataset.cat;
        renderSkills();
      });
    });
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: ARCHITECTURE SI (signature interactive)                     */
  /* ------------------------------------------------------------------ */
  function renderArchitecture() {
    const chain = $("#arch-chain");
    const detail = $("#arch-detail");
    if (!chain || !detail) return;
    const nodes = t().architecture.nodes;

    chain.innerHTML = nodes.map((n, i) => `
      ${i > 0 ? `<div class="arch-link"><span class="packet" style="--i:${i}"></span></div>` : ""}
      <button class="arch-node" data-i="${i}" aria-pressed="${i === state.activeArchNode}">
        <span class="idx">${String(i + 1).padStart(2, "0")}</span>
        <span>${n.name}</span>
      </button>
    `).join("");

    function renderDetail() {
      const n = nodes[state.activeArchNode];
      detail.innerHTML = `
        <h4>${n.name}</h4>
        <div class="role">${n.role}</div>
        <p>${n.desc}</p>
        <div class="stack">${n.stack.map(s => `<span class="tag">${s}</span>`).join("")}</div>
      `;
    }
    renderDetail();

    $$(".arch-node", chain).forEach(btn => {
      btn.addEventListener("click", () => {
        state.activeArchNode = parseInt(btn.dataset.i, 10);
        $$(".arch-node", chain).forEach(b => b.setAttribute("aria-pressed", "false"));
        btn.setAttribute("aria-pressed", "true");
        renderDetail();
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: PROJECTS                                                    */
  /* ------------------------------------------------------------------ */
  const projectGlyphs = [
    `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="var(--accent-2)" stroke-width="2"><rect x="20" y="20" width="60" height="30" rx="4"/><rect x="120" y="20" width="60" height="30" rx="4"/><rect x="70" y="75" width="60" height="30" rx="4"/><path d="M50 50v15h50m0 0h-50m50 0v-15"/><path d="M150 50v40"/></g></svg>`,
    `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="var(--accent-2)" stroke-width="2"><circle cx="100" cy="60" r="34"/><circle cx="100" cy="60" r="6" fill="var(--accent-2)"/><path d="M100 26v10M100 84v10M66 60h10M124 60h10M77 37l7 7M116 76l7 7M123 37l-7 7M84 76l-7 7"/></g></svg>`,
    `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="var(--accent-2)" stroke-width="2"><path d="M55 75a20 20 0 010-40 28 28 0 0154-10 22 22 0 0121 22 18 18 0 01-6 35H55a20 20 0 010-7z"/></g></svg>`
  ];
  function renderProjects() {
    const wrap = $("#projects-grid");
    if (!wrap) return;
    const labels = t().projects.labels;
    wrap.innerHTML = t().projects.items.map((p, i) => `
      <div class="card project-card reveal">
        <div class="project-visual">${projectGlyphs[i % projectGlyphs.length]}<span class="project-num">${String(i + 1).padStart(2, "0")}</span></div>
        <h3>${p.title}</h3>
        <p><strong style="color:var(--text)">${labels.context}: </strong>${p.context}</p>
        <p><strong style="color:var(--text)">${labels.goal}: </strong>${p.goal}</p>
        <p><strong style="color:var(--text)">${labels.architecture}: </strong>${p.architecture}</p>
        <p><strong style="color:var(--accent-2)">${labels.result}: </strong>${p.result}</p>
        <div class="project-meta">${p.tech.map(x => `<span class="tag">${x}</span>`).join("")}</div>
        <div class="project-links">
          <a href="https://github.com/moussasarr" rel="noopener">↗ ${labels.github}</a>
          <a href="#contact">↗ ${labels.doc}</a>
        </div>
      </div>`).join("");
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: CERTIFICATIONS                                              */
  /* ------------------------------------------------------------------ */
  function renderCertifications() {
    const wrap = $("#cert-cols");
    if (!wrap) return;
    const c = t().certifications;
    const statusClass = { done: "done", progress: "progress", target: "target" };
    const statusLabel = { done: "✓", progress: "…", target: "—" };
    wrap.innerHTML = Object.keys(c.cols).map(key => `
      <div class="cert-col reveal">
        <h3>${c.cols[key]}</h3>
        ${c.data[key].map(item => `
          <div class="cert-item"><span>${item}</span><span class="cert-status ${statusClass[key]}">${statusLabel[key]}</span></div>
        `).join("")}
      </div>`).join("");
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: ROADMAP                                                     */
  /* ------------------------------------------------------------------ */
  function renderRoadmap() {
    const wrap = $("#roadmap-track");
    if (!wrap) return;
    wrap.innerHTML = t().roadmap.steps.map((s, i) => `
      <div class="roadmap-step ${i === 0 ? "now" : ""}">
        <div class="step-label">${s.label}</div>
        <h4>${s.title}</h4>
      </div>`).join("");
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: VEILLE                                                      */
  /* ------------------------------------------------------------------ */
  function renderVeille() {
    const wrap = $("#veille-cloud");
    if (!wrap) return;
    wrap.innerHTML = t().veille.items.map(item => `<span class="veille-chip"><span class="dot"></span>${item}</span>`).join("");
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: BLOG                                                        */
  /* ------------------------------------------------------------------ */
  function renderBlog() {
    const wrap = $("#blog-grid");
    if (!wrap) return;
    wrap.innerHTML = t().blog.items.map(item => `
      <div class="card blog-card reveal">
        <span class="blog-tag">${item.tag}</span>
        <h3>${item.title}</h3>
        <p style="margin-top:8px">${item.status}</p>
      </div>`).join("");
    observeReveals();
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: RESOURCES                                                   */
  /* ------------------------------------------------------------------ */
  function renderResources() {
    const wrap = $("#resources-list");
    if (!wrap) return;
    wrap.innerHTML = t().resources.items.map(item => `
      <div class="resource-item">
        <div><div class="r-name">${item.name}</div><div class="r-type">${item.type}</div></div>
        <span class="tag">${t().resources.soon}</span>
      </div>`).join("");
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: FAQ                                                         */
  /* ------------------------------------------------------------------ */
  function renderFAQ() {
    const wrap = $("#faq-list");
    if (!wrap) return;
    wrap.innerHTML = t().faq.items.map((item, i) => `
      <div class="faq-item">
        <button class="faq-q" aria-expanded="false" aria-controls="faq-a-${i}" id="faq-q-${i}">
          <span>${item.q}</span><span class="plus" aria-hidden="true">+</span>
        </button>
        <div class="faq-a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}"><p>${item.a}</p></div>
      </div>`).join("");

    $$(".faq-q", wrap).forEach(btn => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const answer = document.getElementById(btn.getAttribute("aria-controls"));
        btn.setAttribute("aria-expanded", String(!expanded));
        btn.parentElement.setAttribute("aria-expanded", String(!expanded));
        answer.style.maxHeight = expanded ? "0px" : answer.scrollHeight + "px";
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* RENDER: CONTACT cards                                               */
  /* ------------------------------------------------------------------ */
  function renderContact() {
    const wrap = $("#contact-cards");
    if (!wrap) return;
    const c = t().contact.cards;
    const rows = [
      { icon: "pin", label: c.location, val: c.locationVal },
      { icon: "check", label: c.availability, val: c.availabilityVal },
      { icon: "home", label: c.remote, val: c.remoteVal },
      { icon: "clock", label: c.timezone, val: c.timezoneVal }
    ];
    const icons = {
      pin: '<path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
      check: '<path d="M5 13l4 4L19 7"/>',
      home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'
    };
    wrap.innerHTML = rows.map(r => `
      <div class="contact-row">
        <div class="icon-btn" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${icons[r.icon]}</svg></div>
        <div><div class="lbl">${r.label}</div><div class="val">${r.val}</div></div>
      </div>`).join("") + `<div class="availability-badge"><span style="width:8px;height:8px;border-radius:50%;background:var(--success);display:inline-block"></span>${t().contact.availabilityBadge}</div>`;
  }

  /* ------------------------------------------------------------------ */
  /* HERO TYPING EFFECT                                                  */
  /* ------------------------------------------------------------------ */
  let typingTimer = null;
  function startTyping() {
    clearTimeout(typingTimer);
    const el = $("#hero-role-text");
    if (!el) return;
    const roles = t().hero.roles;
    let roleIdx = 0, charIdx = 0, deleting = false;

    function loop() {
      const word = roles[roleIdx];
      if (!deleting) {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          deleting = true;
          typingTimer = setTimeout(loop, 1800);
          return;
        }
        typingTimer = setTimeout(loop, 55);
      } else {
        charIdx--;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          typingTimer = setTimeout(loop, 300);
          return;
        }
        typingTimer = setTimeout(loop, 28);
      }
    }
    loop();
  }

  /* ------------------------------------------------------------------ */
  /* REVEAL ON SCROLL                                                    */
  /* ------------------------------------------------------------------ */
  let revealObserver;
  function observeReveals() {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); revealObserver.unobserve(e.target); } });
      }, { threshold: 0.12 });
    }
    $$(".reveal:not(.in-view)").forEach(el => revealObserver.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* NAV: scroll state + mobile menu                                     */
  /* ------------------------------------------------------------------ */
  function initNav() {
    const nav = $("#nav");
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });

    const burger = $("#hamburger");
    const links = $("#nav-links");
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
    $$("#nav-links a").forEach(a => a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }));
  }

  /* ------------------------------------------------------------------ */
  /* HERO ambient glow follows pointer                                   */
  /* ------------------------------------------------------------------ */
  function initAmbient() {
    const hero = $("#hero");
    if (!hero) return;
    hero.addEventListener("pointermove", (e) => {
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      hero.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  }

  /* ------------------------------------------------------------------ */
  /* RECRUITER MODE                                                      */
  /* ------------------------------------------------------------------ */
  function toggleRecruiterMode(forceOn) {
    state.recruiter = forceOn !== undefined ? forceOn : !state.recruiter;
    document.body.classList.toggle("recruiter-mode", state.recruiter);
    $("#recruiter-banner").classList.toggle("show", state.recruiter);
    if (state.recruiter) {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  /* ------------------------------------------------------------------ */
  /* CV DOWNLOAD                                                         */
  /* ------------------------------------------------------------------ */
  function initCvButtons() {
    $$(".cv-download").forEach(btn => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        try {
          const res = await fetch("cv.pdf", { method: "HEAD" });
          if (res.ok) {
            window.location.href = "cv.pdf";
          } else {
            throw new Error("not found");
          }
        } catch {
          alert(state.lang === "fr"
            ? "Le CV est en cours de mise à jour. Merci de me contacter directement pour l'obtenir."
            : "The CV is currently being updated. Please contact me directly to request it.");
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* CONTACT FORM (Supabase-ready, graceful fallback)                    */
  /* ------------------------------------------------------------------ */
  const SUPABASE_URL = "";   // e.g. "https://xxxxx.supabase.co"
  const SUPABASE_ANON_KEY = ""; // public anon key only

  /*
    SQL de création de la table (à exécuter dans Supabase SQL editor) :

    create table contact_messages (
      id uuid primary key default gen_random_uuid(),
      name text not null,
      email text not null,
      subject text,
      message text not null,
      created_at timestamp with time zone default now()
    );

    alter table contact_messages enable row level security;

    create policy "Allow public insert"
      on contact_messages for insert
      to anon
      with check (true);
  */

  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;
    const statusEl = $("#form-status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = $("#f-name").value.trim();
      const email = $("#f-email").value.trim();
      const subject = $("#f-subject").value.trim();
      const message = $("#f-message").value.trim();
      if (!name || !email || !message) return;

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = t().contact.form.sending;
      submitBtn.disabled = true;
      statusEl.textContent = "";
      statusEl.className = "form-status";

      try {
        if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
          throw new Error("Supabase not configured");
        }
        if (!window.supabase) {
          await loadSupabaseSdk();
        }
        const { createClient } = window.supabase;
        const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        const { error } = await db.from("contact_messages").insert([{ name, email, subject, message }]);
        if (error) throw error;

        statusEl.textContent = t().contact.form.success;
        statusEl.classList.add("success");
        form.reset();
      } catch (err) {
        console.warn("Contact form:", err.message);
        statusEl.textContent = t().contact.form.error;
        statusEl.classList.add("error");
      } finally {
        submitBtn.textContent = originalLabel;
        submitBtn.disabled = false;
      }
    });
  }

  function loadSupabaseSdk() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  /* ------------------------------------------------------------------ */
  /* SHARE / QR CODE MODAL                                               */
  /* ------------------------------------------------------------------ */
  function initShareModal() {
    const overlay = $("#share-modal");
    const openBtns = $$(".open-share");
    const closeBtns = $$(".modal-close", overlay);
    const urlSpan = $("#share-url-text");
    const copyBtn = $("#copy-link-btn");
    const dlBtn = $("#download-qr-btn");
    const nativeShareBtn = $("#native-share-btn");

    function open() {
      const url = window.location.href.split("#")[0];
      urlSpan.textContent = url;
      drawQrPlaceholder(url);
      overlay.classList.add("open");
      loadQrLib().then(() => drawQr(url)).catch(() => {});
    }
    function close() { overlay.classList.remove("open"); }

    openBtns.forEach(b => b.addEventListener("click", open));
    closeBtns.forEach(b => b.addEventListener("click", close));
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(urlSpan.textContent);
        const original = copyBtn.textContent;
        copyBtn.textContent = t().modal.copied;
        setTimeout(() => (copyBtn.textContent = original), 1800);
      } catch { /* clipboard unavailable */ }
    });

    dlBtn.addEventListener("click", () => {
      const canvas = $("#qr-canvas");
      if (!canvas) return;
      const link = document.createElement("a");
      link.download = "moussa-sarr-portfolio-qr.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });

    if (navigator.share) {
      nativeShareBtn.addEventListener("click", () => {
        navigator.share({ title: document.title, url: urlSpan.textContent }).catch(() => {});
      });
    } else {
      nativeShareBtn.style.display = "none";
    }
  }

  function drawQrPlaceholder(url) {
    const wrap = $("#qr-canvas-wrap");
    wrap.innerHTML = `<canvas id="qr-canvas" width="180" height="180" style="width:180px;height:180px"></canvas>`;
  }

  function loadQrLib() {
    return new Promise((resolve, reject) => {
      if (window.QRCode) return resolve();
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function drawQr(url) {
    const canvas = $("#qr-canvas");
    if (!canvas || !window.QRCode) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // qrcodejs draws into a div by default; use its lower-level API when possible.
    const tempDiv = document.createElement("div");
    new window.QRCode(tempDiv, { text: url, width: 180, height: 180, colorDark: "#0A0A0F", colorLight: "#ffffff" });
    setTimeout(() => {
      const img = tempDiv.querySelector("img") || tempDiv.querySelector("canvas");
      if (img && img.tagName === "CANVAS") {
        ctx.drawImage(img, 0, 0, 180, 180);
      } else if (img) {
        const im = new Image();
        im.crossOrigin = "anonymous";
        im.onload = () => ctx.drawImage(im, 0, 0, 180, 180);
        im.src = img.src;
      }
    }, 120);
  }

  /* ------------------------------------------------------------------ */
  /* DIGITAL BUSINESS CARD (download as PNG)                            */
  /* ------------------------------------------------------------------ */
  function initBusinessCard() {
    const btn = $("#download-card-btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const canvas = document.createElement("canvas");
      canvas.width = 640; canvas.height = 360;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#0A0A0F"; ctx.fillRect(0, 0, 640, 360);
      const grad = ctx.createLinearGradient(0, 0, 640, 360);
      grad.addColorStop(0, "#7C3AED"); grad.addColorStop(1, "#A855F7");
      ctx.fillStyle = grad; ctx.fillRect(0, 0, 8, 360);
      ctx.fillStyle = "#F5F5F5"; ctx.font = "700 34px sans-serif";
      ctx.fillText("MOUSSA SARR", 48, 130);
      ctx.fillStyle = "#CFCFCF"; ctx.font = "500 18px sans-serif";
      ctx.fillText(t().hero.roles[0] + " · " + t().hero.roles[1], 48, 165);
      ctx.fillStyle = "#A855F7"; ctx.font = "16px monospace";
      ctx.fillText("Casablanca, Maroc", 48, 220);
      ctx.fillText("github.com/moussasarr", 48, 248);
      ctx.fillText("linkedin.com/in/moussasarr", 48, 276);
      const link = document.createElement("a");
      link.download = "moussa-sarr-carte-visite.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  /* ------------------------------------------------------------------ */
  /* GITHUB STATS (public API, graceful fallback)                        */
  /* ------------------------------------------------------------------ */
  async function loadGithubStats() {
    const wrap = $("#github-stats");
    if (!wrap) return;
    const username = "moussasarr";
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("api error");
      const data = await res.json();
      wrap.innerHTML = `
        <div class="kpi-cell"><div class="kpi-num">${data.public_repos}</div><div class="kpi-label">Repositories</div></div>
        <div class="kpi-cell"><div class="kpi-num">${data.followers}</div><div class="kpi-label">Followers</div></div>
      `;
    } catch {
      wrap.innerHTML = `<p style="font-size:var(--fs-xs)">GitHub — <a href="https://github.com/${username}" style="color:var(--accent-2)">github.com/${username}</a></p>`;
    }
  }

  /* ------------------------------------------------------------------ */
  /* MASTER RENDER                                                       */
  /* ------------------------------------------------------------------ */
  function renderAll() {
    renderStatic();
    renderKPI();
    renderAbout();
    renderVision();
    renderValues();
    renderTimeline();
    renderImpact();
    renderSkills();
    renderArchitecture();
    renderProjects();
    renderCertifications();
    renderRoadmap();
    renderVeille();
    renderBlog();
    renderResources();
    renderFAQ();
    renderContact();
    startTyping();
  }

  /* ------------------------------------------------------------------ */
  /* INIT                                                                */
  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = state.lang;
    applyTheme();
    renderAll();
    initNav();
    initAmbient();
    initCvButtons();
    initContactForm();
    initShareModal();
    initBusinessCard();
    loadGithubStats();
    observeReveals();

    $("#theme-toggle").addEventListener("click", toggleTheme);
    $$(".lang-btn").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    $$(".lang-btn").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === state.lang ? "true" : "false"));

    $$(".recruiter-toggle").forEach(b => b.addEventListener("click", () => toggleRecruiterMode()));
    $("#recruiter-exit").addEventListener("click", () => toggleRecruiterMode(false));

    // Loader
    window.addEventListener("load", () => {
      setTimeout(() => $("#loader").classList.add("hidden"), 400);
    });
    setTimeout(() => $("#loader")?.classList.add("hidden"), 2000);

    // Footer dynamic year + last update
    $("#footer-year").textContent = new Date().getFullYear();
    $("#footer-update").textContent = document.lastModified ? new Date(document.lastModified).toLocaleDateString(state.lang) : "";
  });
})();
