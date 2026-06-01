/* ==========================================================================
   ANAND PHYSIOTHERAPY CENTRE — CLIENT-SIDE LOGIC
   ========================================================================== */

(function () {
  'use strict';

  // ==========================================================================
  // CHUNK 03: PHONE NUMBER OBFUSCATION SYSTEM
  // ==========================================================================

  // Split the number into non-obvious parts — never stored as full string in HTML
  const _p = ['85', '44', '15', '43', '16'];
  const _n = () => _p.join('');
  const _wa = () =>
    `https://wa.me/91${_n()}?text=${encodeURIComponent(
      'नमस्ते Dr. Ayush, मेरा नाम ___ है। मेरी समस्या ___ है। मुझे appointment चाहिए।'
    )}`;
  const _tel = () => `tel:+91${_n()}`;

  // Initialize all WhatsApp buttons (navbar, hero, floating, footer)
  function initWhatsAppLinks() {
    document.querySelectorAll('.js-whatsapp-btn').forEach(btn => {
      btn.setAttribute('href', _wa());
      btn.setAttribute('target', '_blank');
      btn.setAttribute('rel', 'noopener noreferrer');
      btn.addEventListener('click', () => trackAnalyticsEvent('whatsapp_click'));
    });
  }

  // Initialize phone reveal / direct-call buttons
  function initPhoneButtons() {
    document.querySelectorAll('.js-phone-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const number = _n();
        const telLink = _tel();
        const formatted = `+91 ${number.slice(0, 5)} ${number.slice(5)}`;
        const isMobile =
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ) || window.innerWidth < 768;

        if (isMobile) {
          window.location.href = telLink;
        } else {
          const a = document.createElement('a');
          a.href = telLink;
          a.className = btn.className;
          a.innerHTML = `
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
            <span>${formatted}</span>`;
          btn.parentNode.replaceChild(a, btn);
        }
        trackAnalyticsEvent('call_click');
      });
    });
  }

  // ==========================================================================
  // CHUNK 08: GOOGLE ANALYTICS 4 + COOKIE CONSENT (GDPR-safe)
  // GA must NOT fire until user explicitly accepts the consent banner.
  // ==========================================================================

  const GA_ID = '<!-- PENDING: Replace with real GA4 Measurement ID e.g. G-XXXXXXXXXX -->';
  const CONSENT_KEY = 'apc_cookie_consent'; // localStorage key

  function loadGA() {
    if (document.getElementById('ga-script')) return; // already loaded
    const s = document.createElement('script');
    s.id = 'ga-script';
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    console.log('[GA] Loaded after consent.');
  }

  function showCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.classList.remove('hidden');
      banner.classList.add('visible');
    }
  }

  function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.classList.remove('visible');
      setTimeout(() => banner.classList.add('hidden'), 400);
    }
  }

  function initCookieConsent() {
    const stored = localStorage.getItem(CONSENT_KEY);

    if (stored === 'accepted') {
      loadGA(); // Previously accepted — load immediately
      return;
    }
    if (stored === 'declined') {
      return; // Respect decline — never show banner again, never load GA
    }

    // First visit — show banner after slight delay
    setTimeout(showCookieBanner, 1500);

    const btnAccept = document.getElementById('btn-cookie-accept');
    const btnDecline = document.getElementById('btn-cookie-decline');

    if (btnAccept) {
      btnAccept.addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        hideCookieBanner();
        loadGA();
      });
    }

    if (btnDecline) {
      btnDecline.addEventListener('click', () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        hideCookieBanner();
      });
    }
  }

  function trackAnalyticsEvent(eventName, params = {}) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    } else {
      console.log(`[GA] Blocked (no consent): ${eventName}`);
    }
  }

  window.trackAnalyticsEvent = trackAnalyticsEvent;

  // ==========================================================================
  // CHUNK 09A: SCROLL NAVBAR SHADOW EFFECT
  // ==========================================================================

  function initScrollNavbar() {
    const header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      header.classList.toggle('navbar-scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // ==========================================================================
  // CHUNK 09B: SCROLL-REVEAL ANIMATIONS (IntersectionObserver)
  // Adds .is-visible class when elements enter viewport
  // ==========================================================================

  function initScrollReveal() {
    const targets = document.querySelectorAll(
      '.service-card, .review-card, .area-pill, .step-item, .about-text, .about-image-wrap, .faq-item, .section-header, .hero-text, .hero-image-col'
    );

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately for older browsers
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el, i) => {
      el.classList.add('reveal');
      // Stagger delay for grid children
      if (el.classList.contains('service-card') || el.classList.contains('area-pill')) {
        el.style.transitionDelay = `${(i % 6) * 0.08}s`;
      }
      observer.observe(el);
    });
  }

  // ==========================================================================
  // CHUNK 09C: FLOATING WHATSAPP BUTTON
  // ==========================================================================

  function initFloatingWhatsApp() {
    const existing = document.getElementById('fab-whatsapp');
    if (existing) {
      existing.setAttribute('href', _wa());
      existing.setAttribute('target', '_blank');
      existing.setAttribute('rel', 'noopener noreferrer');
      existing.addEventListener('click', () => trackAnalyticsEvent('fab_whatsapp_click'));

      // Hide when close to hero section WhatsApp button (first ~300px)
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          existing.classList.add('visible');
        } else {
          existing.classList.remove('visible');
        }
      }, { passive: true });
    }
  }

  // Track scroll milestones (50% and 90%)
  function initScrollTracking() {
    let scrolled50 = false;
    let scrolled90 = false;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      if (scrollPercent >= 50 && !scrolled50) {
        scrolled50 = true;
        trackAnalyticsEvent('page_scroll_50');
      }
      if (scrollPercent >= 90 && !scrolled90) {
        scrolled90 = true;
        trackAnalyticsEvent('page_scroll_90');
      }
    }, { passive: true });
  }

  // ==========================================================================
  // CHUNK 09D: FAQ ACCORDION (CSS-only fallback + JS enhancement)
  // ==========================================================================

  function initFaqAccordion() {
    const faqs = document.querySelectorAll('.faq-item');
    faqs.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;

      question.setAttribute('role', 'button');
      question.setAttribute('tabindex', '0');
      question.setAttribute('aria-expanded', 'false');

      const toggle = () => {
        const isOpen = item.classList.contains('faq-open');
        // Close all others
        faqs.forEach(f => {
          f.classList.remove('faq-open');
          const q = f.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        // Toggle current
        if (!isOpen) {
          item.classList.add('faq-open');
          question.setAttribute('aria-expanded', 'true');
          answer.focus();
        }
        trackAnalyticsEvent('faq_click', { faq_text: question.textContent.trim().substring(0, 60) });
      };

      question.addEventListener('click', toggle);
      question.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });
    });
  }

  // ==========================================================================
  // CHUNK 09E: BACK-TO-TOP BUTTON
  // ==========================================================================

  function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      trackAnalyticsEvent('back_to_top_click');
    });
  }

  // ==========================================================================
  // CHUNK 09F: ACCESSIBILITY — SKIP-LINK & FOCUS TRAP FOR MOBILE NAV
  // ==========================================================================

  function initAccessibility() {
    // Ensure skip-link works properly
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.getElementById('main-content');
    if (skipLink && mainContent) {
      skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.setAttribute('tabindex', '-1');
        mainContent.focus();
      });
    }

    // Add aria-label to all SVG icons that lack one
    document.querySelectorAll('svg:not([aria-label]):not([aria-hidden])').forEach(svg => {
      svg.setAttribute('aria-hidden', 'true');
    });

    // Smooth scroll for all in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  // ==========================================================================
  // CHUNK 09G: REVIEW CARDS TOUCH SCROLL SNAP (mobile)
  // ==========================================================================

  function initReviewSwipe() {
    const carousel = document.querySelector('.reviews-carousel');
    if (!carousel) return;
    // Add keyboard arrow navigation for accessibility
    carousel.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') carousel.scrollBy({ left: 300, behavior: 'smooth' });
      if (e.key === 'ArrowLeft') carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // MULTILINGUAL TRANSLATION SYSTEM
  // ==========================================================================

  const translations = {
    en: {
      btn_appointment: "Book Appointment",
      hero_badge_satisfied: "Satisfied Patients",
      hero_badge_experience: "Years of Experience",
      hero_badge_home: "Home Visit Available",
      hero_title: "Get Pain Relief in the Comfort of Your Home",
      hero_subtitle: "Patna's Trusted Physiotherapist — Online Consultations & Home Visits",
      hero_doc_name: "Dr. Ayush Anand | BPT | Anand Physiotherapy Centre, Ashiana Nagar",
      btn_whatsapp: "WhatsApp Us",
      btn_phone: "📞 Call / View Number",
      hero_reassurance: "Monday to Sunday | 7:00 AM to 10:00 PM",
      about_title: "About Dr. Ayush Anand",
      about_qualification: "BPT — Bachelor of Physiotherapy",
      about_experience: "4 Years of Experience",
      about_bio_1: "Dr. Ayush Anand (BPT) is a dedicated and experienced physiotherapist in Patna. He believes that simply suppressing pain is not a cure; rather, it is essential to find the <strong>root cause</strong> of the pain and eliminate it completely.",
      about_bio_2: "When patients are in severe pain, it becomes difficult for them to travel to a clinic. That is why Dr. Ayush provides therapy sessions directly at your <strong>home (Home Visit)</strong>, allowing you to recover comfortably without any hassle.",
      about_bio_3: "He has successfully treated over 500 patients across Patna. He also offers online consultations so that your condition can be thoroughly understood before a home visit, helping to design the perfect treatment plan.",
      about_cta: "Book a Consultation Today",
      how_title: "How It Works",
      how_subtitle: "3 Simple Steps — Road to Pain-Free Life",
      step1_title: "WhatsApp or Call Us",
      step1_desc: "Describe your issue — Dr. Ayush will carefully listen to your problem and guide you.",
      step2_title: "Online Consultation",
      step2_desc: "A detailed diagnosis will be performed via video call to set up a customized treatment plan.",
      step3_title: "Home Visit (If Required)",
      step3_desc: "Dr. Ayush will visit your home with advanced physiotherapy equipment to start your sessions.",
      how_cta: "Start Now — Chat on WhatsApp",
      services_title: "What Conditions Do We Treat?",
      service_badge_online: "At Home",
      service_badge_home: "In Patna",
      service_title_online: "Online Consultation",
      service_title_home: "Home Visit Physiotherapy",
      service_title_sports: "Sports Injuries",
      service_title_back: "Back & Neck Pain",
      service_title_surgery: "Post-Surgery Rehab",
      service_title_elderly: "Elderly Care & Joint Pain",
      service_title_paralysis: "Paralysis Rehab",
      service_title_neuro: "Neurological Issues",
      service_title_knee: "Knee & Shoulder Pain",
      service_title_general: "General Pain Management",
      areas_title: "Home Visit Available in These Areas",
      areas_subtitle: "Click on your area below to view local physiotherapy on Google Maps",
      areas_footer: "Your area not listed? ",
      areas_whatsapp_link: "Ask on WhatsApp →",
      success_title: "Our Treated Patients (Success Stories)",
      success_subtitle: "Real Patients, Real Results — Active Life After Physiotherapy",
      patient1_name: "Patient 1",
      patient1_cond: "Relief from Back Pain",
      patient1_loc: "Boring Road, Patna",
      patient2_name: "Patient 2",
      patient2_cond: "Knee Pain Treatment",
      patient2_loc: "Ashiana Nagar, Patna",
      patient3_name: "Patient 3",
      patient3_cond: "Frozen Shoulder Recovery",
      patient3_loc: "Kankarbagh, Patna",
      patient4_name: "Patient 4",
      patient4_cond: "Neck Pain Relief",
      patient4_loc: "Patliputra, Patna",
      faq_title: "Frequently Asked Questions",
      faq1_q: "Does online physiotherapy really work?",
      faq1_a: "Yes — Dr. Ayush first understands your complete condition, then builds a proper treatment plan. In many cases, guidance and exercises on video call provide excellent relief.",
      faq2_q: "How much does a home visit cost?",
      faq2_a: "Fees vary depending on the complexity of the case, severity of the pain, and number of sessions required. Please contact Dr. Ayush on WhatsApp for detailed pricing.",
      faq3_q: "Is it mandatory to visit the clinic first?",
      faq3_a: "No. You can directly book an appointment via WhatsApp or call. The doctor will either visit your home or consult online via video call to assess your condition.",
      faq4_q: "In which areas of Patna do you offer home visits?",
      faq4_a: "We offer home visits in Ashiana Nagar, Boring Road, Patliputra, Kankarbagh, Danapur, Saguna More, RPS More, Gola Road, and nearby localities.",
      faq5_q: "Do you treat sports injuries?",
      faq5_a: "Yes — Dr. Ayush treats sports injuries, muscle strains, ligament sprains, joint pain, and other sports-related rehabilitation needs.",
      faq6_q: "What are your clinic timings?",
      faq6_a: "We are available from Monday to Sunday, 7:00 AM to 10:00 PM. Prior appointment is mandatory for home visits or clinic consultations.",
      footer_address_label: "Address:",
      footer_timing_label: "Timings:",
      footer_timing_value: "Mon–Sun | 7:00 AM – 10:00 PM",
      footer_quick_links: "Quick Links",
      nav_services: "Services",
      nav_how_it_works: "How It Works",
      nav_home_visit_areas: "Home Visit Areas",
      nav_faq: "FAQ",
      footer_legal: "Legal",
      nav_privacy_policy: "Privacy Policy",
      nav_disclaimer: "Medical Disclaimer",
      nav_terms: "Terms of Use",
      footer_contact: "Contact",
      footer_maps_btn: "How to reach the clinic?",
      footer_copyright: "© 2024 Anand Physiotherapy Centre. All rights reserved.",
      footer_disclaimer: "Website content is for informational purposes only and does not constitute medical advice.",
      cookie_text: "We use Google Analytics to improve our website. No personal data is collected.",
      cookie_accept: "Yes, Accept",
      cookie_decline: "No, Decline"
    },
    hi: {
      btn_appointment: "Appointment लें",
      hero_badge_satisfied: "संतुष्ट मरीज़",
      hero_badge_experience: "साल का अनुभव",
      hero_badge_home: "Home Visit उपलब्ध",
      hero_title: "घर बैठे पाएं दर्द से राहत",
      hero_subtitle: "Patna के विश्वसनीय Physiotherapist — Online Consultation और Home Visit",
      hero_doc_name: "Dr. Ayush Anand | BPT | Anand Physiotherapy Centre, Ashiana Nagar",
      btn_whatsapp: "WhatsApp करें",
      btn_phone: "📞 नंबर देखें",
      hero_reassurance: "सोमवार से रविवार | सुबह 7 बजे से रात 10 बजे तक",
      about_title: "Dr. Ayush Anand के बारे में",
      about_qualification: "BPT — Bachelor of Physiotherapy",
      about_experience: "4 साल का अनुभव",
      about_bio_1: "Dr. Ayush Anand (BPT) पटना के एक समर्पित और अनुभवी फिजियोथेरेपिस्ट हैं। उनका मानना है कि केवल दर्द को दबाना इलाज नहीं है, बल्कि दर्द के <strong>मूल कारण (Root Cause)</strong> को ढूंढकर उसे जड़ से खत्म करना आवश्यक है।",
      about_bio_2: "जब मरीज अत्यधिक दर्द में होते हैं, तो उनके लिए क्लिनिक तक यात्रा करना मुश्किल हो जाता है। इसीलिए Dr. Ayush सीधे आपके <strong>घर आकर (Home Visit)</strong> थेरेपी प्रदान करते हैं, ताकि आप अपनी आरामदायक जगह पर बिना किसी परेशानी के ठीक हो सकें।",
      about_cta: "आज ही consultation लें",
      about_bio_3: "उन्होंने पूरे पटना में 500 से अधिक मरीजों का सफल इलाज किया है। वे ऑनलाइन परामर्श भी देते हैं ताकि घर आने से पहले आपकी समस्या को अच्छी तरह समझा जा सके और एक सही ट्रीटमेंट प्लान तैयार किया जा सके।",
      how_title: "कैसे काम करता है?",
      how_subtitle: "3 आसान कदम — दर्द से राहत तक",
      step1_title: "WhatsApp या Call करें",
      step1_desc: "अपनी समस्या बताएं — Dr. Ayush आपकी पूरी बात ध्यान से सुनेंगे और सलाह देंगे।",
      step2_title: "Online Consultation",
      step2_desc: "Video call पर विस्तृत diagnosis किया जाएगा और आपके लिए सही treatment plan तय किया जाएगा।",
      step3_title: "Home Visit (जरूरत पड़ने पर)",
      step3_desc: "Dr. Ayush थेरेपी उपकरणों के साथ आपके घर आकर थेरेपी सेशन शुरू करेंगे।",
      how_cta: "अभी शुरू करें — WhatsApp करें",
      services_title: "हम किन समस्याओं का इलाज करते हैं?",
      service_badge_online: "घर बैठे",
      service_badge_home: "Patna में",
      service_title_online: "ऑनलाइन परामर्श",
      service_title_home: "होम विजिट फिजियोथेरेपी",
      service_title_sports: "खेल चोटें",
      service_title_back: "कमर और गर्दन दर्द",
      service_title_surgery: "ऑपरेशन के बाद पुनर्वास",
      service_title_elderly: "बुजुर्गों की देखभाल और जोड़ों का दर्द",
      service_title_paralysis: "लकवे का इलाज",
      service_title_neuro: "नसों की समस्याएं",
      service_title_knee: "घुटने और कंधे का दर्द",
      service_title_general: "सामान्य दर्द प्रबंधन",
      areas_title: "Home Visit उपलब्ध है इन areas में",
      areas_subtitle: "नीचे अपने area पर click करें और Google Maps पर physiotherapy खोजें",
      areas_footer: "आपका area इस list में नहीं है? ",
      areas_whatsapp_link: "WhatsApp पर पूछें →",
      success_title: "हमारे ठीक हुए मरीज़ (Success Stories)",
      success_subtitle: "वास्तविक मरीज़, वास्तविक परिणाम — फिजियोथेरेपी के बाद खुशहाल जीवन",
      patient1_name: "मरीज़ 1",
      patient1_cond: "कमर दर्द से राहत",
      patient1_loc: "Boring Road, Patna",
      patient2_name: "मरीज़ 2",
      patient2_cond: "घुटने के दर्द का उपचार",
      patient2_loc: "Ashiana Nagar, Patna",
      patient3_name: "मरीज़ 3",
      patient3_cond: "कंधे की फिजियोथेरेपी",
      patient3_loc: "Kankarbagh, Patna",
      patient4_name: "मरीज़ 4",
      patient4_cond: "गर्दन दर्द से मुक्ति",
      patient4_loc: "Patliputra, Patna",
      faq_title: "अक्सर पूछे जाने वाले सवाल",
      faq1_q: "क्या ऑनलाइन फिजियोथेरेपी सच में काम करती है?",
      faq1_a: "हाँ — Dr. Ayush पहले आपकी पूरी समस्या समझते हैं, फिर सही treatment plan बनाते हैं। कई cases में online guidance से ही राहत मिल जाती है।",
      faq2_q: "Home visit में कितना charge लगता है?",
      faq2_a: "Fees हर case के हिसाब से अलग होती है। समस्या की गंभीरता और आवश्यक थेरेपी सेशन्स के आधार पर शुल्क तय किया जाता है। कृपया WhatsApp पर बात करके exact जानकारी लें।",
      faq3_q: "क्या पहले consultation के लिए clinic आना जरूरी है?",
      faq3_a: "नहीं। आप WhatsApp या call पर directly appointment ले सकते हैं। डॉक्टर या तो आपके घर आकर विज़िट करेंगे या ऑनलाइन वीडियो कॉल पर समस्या की समीक्षा करेंगे।",
      faq4_q: "Patna के किन areas में home visit होती है?",
      faq4_a: "Ashiana Nagar, Boring Road, Patliputra, Kankarbagh, Danapur, Saguna More, RPS More, और Gola Road में home visit उपलब्ध है।",
      faq5_q: "क्या आप sports injury का इलाज करते हैं?",
      faq5_a: "हाँ — Dr. Ayush sports injuries, muscle strains, ligament injuries, और जोड़ों के खिंचाव जैसी सभी खेल-कूद संबंधी चोटों का इलाज करते हैं।",
      faq6_q: "Clinic का timing क्या है?",
      faq6_a: "हम सोमवार से रविवार, सुबह 7:00 बजे से रात 10:00 बजे तक सेवा प्रदान करते हैं। हालाँकि, होम विज़िट या क्लीनिक विज़िट के लिए पहले से अपॉइंटमेंट लेना अनिवार्य है।",
      footer_address_label: "पता:",
      footer_timing_label: "समय:",
      footer_timing_value: "Mon–Sun | 7:00 AM – 10:00 PM",
      footer_quick_links: "Quick Links",
      nav_services: "Services",
      nav_how_it_works: "How It Works",
      nav_home_visit_areas: "Home Visit Areas",
      nav_faq: "FAQ",
      footer_legal: "Legal",
      nav_privacy_policy: "Privacy Policy",
      nav_disclaimer: "Medical Disclaimer",
      nav_terms: "Terms of Use",
      footer_contact: "Contact",
      footer_maps_btn: "Clinic में कैसे पहुँचें?",
      footer_copyright: "© 2024 Anand Physiotherapy Centre. All rights reserved.",
      footer_disclaimer: "Website content is for informational purposes only and does not constitute medical advice.",
      cookie_text: "हम Google Analytics उपयोग करते हैं ताकि website को बेहतर बना सकें। कोई personal data collect नहीं होता।",
      cookie_accept: "ठीक है, मंजूर है",
      cookie_decline: "नहीं, धन्यवाद"
    }
  };

  let currentLang = 'en';

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('preferred_language', lang);

    document.documentElement.setAttribute('lang', lang);
    document.body.classList.remove('lang-en', 'lang-hi');
    document.body.classList.add(`lang-${lang}`);

    // Update navbar toggle button text
    const btnTextSpan = document.querySelector('#btn-lang-toggle .btn-lang-text');
    if (btnTextSpan) {
      btnTextSpan.textContent = lang === 'en' ? 'हिन्दी' : 'English';
    }

    // Translate elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = translations[lang][key];
      if (translation !== undefined) {
        el.innerHTML = translation;
      }
    });

    console.log(`[Language] Set to ${lang}`);
  }

  function initLanguageSelection() {
    const langModal = document.getElementById('lang-modal');
    const storedLang = localStorage.getItem('preferred_language');

    // Bind Navbar toggle button click
    const toggleBtn = document.getElementById('btn-lang-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nextLang = currentLang === 'en' ? 'hi' : 'en';
        setLanguage(nextLang);
        trackAnalyticsEvent('lang_toggle', { language: nextLang });
      });
    }

    if (!storedLang) {
      // First-time user, check if we are on index.html before showing modal
      const isIndex = document.getElementById('lang-modal') !== null;
      if (isIndex && langModal) {
        langModal.classList.remove('hidden');

        const btnEn = document.getElementById('btn-lang-select-en');
        const btnHi = document.getElementById('btn-lang-select-hi');

        if (btnEn) {
          btnEn.addEventListener('click', () => {
            setLanguage('en');
            langModal.classList.add('hidden');
            trackAnalyticsEvent('lang_select_modal', { language: 'en' });
          });
        }

        if (btnHi) {
          btnHi.addEventListener('click', () => {
            setLanguage('hi');
            langModal.classList.add('hidden');
            trackAnalyticsEvent('lang_select_modal', { language: 'hi' });
          });
        }
      } else {
        // Fallback default language
        setLanguage('en');
      }
    } else {
      // Return visitor
      setLanguage(storedLang);
    }
  }

  // ==========================================================================
  // COUNT-UP ANIMATION (for hero trust badges)
  // ==========================================================================

  function initCountUp() {
    const counters = document.querySelectorAll('.count-up[data-target]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback for old browsers — show final values immediately
      counters.forEach(el => {
        el.textContent = el.getAttribute('data-target');
      });
      return;
    }

    const animate = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const duration = 1200; // ms
      const step = Math.ceil(target / (duration / 16)); // ~60fps
      let current = 0;

      const tick = () => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current < target) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate(entry.target);
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(el => observer.observe(el));
  }

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  document.addEventListener('DOMContentLoaded', () => {
    initWhatsAppLinks();
    initPhoneButtons();
    initCookieConsent();
    initScrollNavbar();
    initScrollReveal();
    initFloatingWhatsApp();
    initScrollTracking();
    initFaqAccordion();
    initBackToTop();
    initAccessibility();
    initLanguageSelection();
    initCountUp();
  });

})();
