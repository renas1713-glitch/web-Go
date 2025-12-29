// Translations
const translations = {
    ar: {
        dir: 'rtl',
        nav: { home: 'الرئيسية', services: 'خدماتنا', features: 'مميزاتنا', portfolio: 'أعمالنا', contact: 'تواصل معنا' },
        hero: { badge: '🚀 نحول أفكارك إلى واقع رقمي', title: 'تصميم مواقع ومتاجر', titleSpan: 'إلكترونية احترافية', desc: 'نصمم مواقع إلكترونية احترافية ومتاجر إلكترونية متكاملة بشكل تقني، سريع، ومتوافق مع جميع الأجهزة', btn1: 'ابدأ مشروعك الآن', btn2: 'شاهد أعمالنا' },
        stats: { projects: 'مشروع منجز', satisfaction: 'رضا العملاء', experience: 'سنوات خبرة' },
        services: { badge: 'خدماتنا', title: 'حلول رقمية متكاملة', desc: 'نقدم مجموعة شاملة من الخدمات لتلبية جميع احتياجاتك الرقمية' },
        features: { badge: 'لماذا نحن؟', title: 'مميزات تجعلنا خيارك الأول' },
        portfolio: { badge: 'أعمالنا', title: 'مشاريع نفخر بها', desc: 'نماذج من أحدث أعمالنا التي نفذناها لعملائنا' },
        cta: { title: 'جاهز لبدء مشروعك؟', desc: 'تواصل معنا الآن واحصل على استشارة مجانية', btn: 'ابدأ الآن' },
        contact: { badge: 'تواصل معنا', title: 'دعنا نبدأ العمل فوراً', desc: 'أخبرنا عن مشروعك وسنتواصل معك في أقرب وقت', email: 'البريد الإلكتروني', phone: 'الهاتف', whatsapp: 'واتساب', name: 'الاسم الكامل', emailPlaceholder: 'البريد الإلكتروني', phonePlaceholder: 'رقم الهاتف', serviceType: 'نوع الخدمة المطلوبة', message: 'أخبرنا عن مشروعك...', submit: 'أرسل طلبك' },
        footer: { desc: 'نحول أفكارك إلى مواقع ناجحة واحترافية', quickLinks: 'روابط سريعة', ourServices: 'خدماتنا', rights: '© 2024 ويب برو - جميع الحقوق محفوظة' },
        formSuccess: 'شكراً لتواصلك معنا! سنتواصل معك في أقرب وقت ممكن.'
    },
    de: {
        dir: 'ltr',
        nav: { home: 'Startseite', services: 'Leistungen', features: 'Vorteile', portfolio: 'Portfolio', contact: 'Kontakt' },
        hero: { badge: '🚀 Wir verwandeln Ihre Ideen in digitale Realität', title: 'Professionelles Webdesign &', titleSpan: 'E-Commerce Lösungen', desc: 'Wir gestalten professionelle Websites und vollständige Online-Shops - technisch perfekt, schnell und für alle Geräte optimiert', btn1: 'Projekt starten', btn2: 'Portfolio ansehen' },
        stats: { projects: 'Projekte', satisfaction: 'Zufriedenheit', experience: 'Jahre Erfahrung' },
        services: { badge: 'Leistungen', title: 'Komplette digitale Lösungen', desc: 'Wir bieten umfassende Dienstleistungen für alle Ihre digitalen Bedürfnisse' },
        features: { badge: 'Warum wir?', title: 'Vorteile, die uns auszeichnen' },
        portfolio: { badge: 'Portfolio', title: 'Projekte, auf die wir stolz sind', desc: 'Beispiele unserer neuesten Arbeiten für unsere Kunden' },
        cta: { title: 'Bereit, Ihr Projekt zu starten?', desc: 'Kontaktieren Sie uns jetzt für eine kostenlose Beratung', btn: 'Jetzt starten' },
        contact: { badge: 'Kontakt', title: 'Lassen Sie uns sofort beginnen', desc: 'Erzählen Sie uns von Ihrem Projekt und wir melden uns bald', email: 'E-Mail', phone: 'Telefon', whatsapp: 'WhatsApp', name: 'Vollständiger Name', emailPlaceholder: 'E-Mail-Adresse', phonePlaceholder: 'Telefonnummer', serviceType: 'Gewünschte Dienstleistung', message: 'Erzählen Sie uns von Ihrem Projekt...', submit: 'Anfrage senden' },
        footer: { desc: 'Wir verwandeln Ihre Ideen in erfolgreiche Websites', quickLinks: 'Schnelllinks', ourServices: 'Leistungen', rights: '© 2024 WebPro - Alle Rechte vorbehalten' },
        formSuccess: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.'
    },
    en: {
        dir: 'ltr',
        nav: { home: 'Home', services: 'Services', features: 'Features', portfolio: 'Portfolio', contact: 'Contact' },
        hero: { badge: '🚀 We turn your ideas into digital reality', title: 'Professional Web Design &', titleSpan: 'E-Commerce Solutions', desc: 'We design professional websites and complete online stores - technically perfect, fast, and optimized for all devices', btn1: 'Start Your Project', btn2: 'View Portfolio' },
        stats: { projects: 'Projects', satisfaction: 'Satisfaction', experience: 'Years Experience' },
        services: { badge: 'Services', title: 'Complete Digital Solutions', desc: 'We offer comprehensive services to meet all your digital needs' },
        features: { badge: 'Why Us?', title: 'Features that make us your first choice' },
        portfolio: { badge: 'Portfolio', title: 'Projects we are proud of', desc: 'Examples of our latest work for our clients' },
        cta: { title: 'Ready to start your project?', desc: 'Contact us now for a free consultation', btn: 'Start Now' },
        contact: { badge: 'Contact', title: 'Let us start working immediately', desc: 'Tell us about your project and we will contact you soon', email: 'Email', phone: 'Phone', whatsapp: 'WhatsApp', name: 'Full Name', emailPlaceholder: 'Email Address', phonePlaceholder: 'Phone Number', serviceType: 'Service Type', message: 'Tell us about your project...', submit: 'Send Request' },
        footer: { desc: 'We turn your ideas into successful websites', quickLinks: 'Quick Links', ourServices: 'Services', rights: '© 2024 WebPro - All Rights Reserved' },
        formSuccess: 'Thank you for contacting us! We will get back to you soon.'
    }
};

// Current language
let currentLang = 'ar';

// Language Switcher
function switchLanguage(lang) {
    const t = translations[lang];
    currentLang = lang;
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;

    // Update navigation
    const navLinksItems = document.querySelectorAll('.nav-links > li > a');
    if (navLinksItems[0]) navLinksItems[0].textContent = t.nav.home;
    if (navLinksItems[1]) navLinksItems[1].textContent = t.nav.services;
    if (navLinksItems[2]) navLinksItems[2].textContent = t.nav.features;
    if (navLinksItems[3]) navLinksItems[3].textContent = t.nav.portfolio;
    if (navLinksItems[4]) navLinksItems[4].textContent = t.nav.contact;

    // Update hero
    const heroBadge = document.querySelector('.hero-badge');
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero-content > p');
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');

    if (heroBadge) heroBadge.textContent = t.hero.badge;
    if (heroTitle) heroTitle.innerHTML = t.hero.title + '<br><span class="gradient-text">' + t.hero.titleSpan + '</span>';
    if (heroDesc) heroDesc.textContent = t.hero.desc;
    if (heroButtons[0]) heroButtons[0].innerHTML = '<i class="fas fa-rocket"></i> ' + t.hero.btn1;
    if (heroButtons[1]) heroButtons[1].innerHTML = '<i class="fas fa-eye"></i> ' + t.hero.btn2;

    // Update stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.stats.projects;
    if (statLabels[1]) statLabels[1].textContent = t.stats.satisfaction;
    if (statLabels[2]) statLabels[2].textContent = t.stats.experience;

    // Update sections
    const sections = ['services', 'features', 'portfolio', 'contact'];
    sections.forEach(section => {
        const sectionEl = document.getElementById(section);
        if (sectionEl) {
            const badge = sectionEl.querySelector('.section-badge');
            const title = sectionEl.querySelector('.section-header h2');
            const desc = sectionEl.querySelector('.section-header > p');
            if (badge && t[section]) badge.textContent = t[section].badge;
            if (title && t[section]) title.textContent = t[section].title;
            if (desc && t[section] && t[section].desc) desc.textContent = t[section].desc;
        }
    });

    // Update CTA
    const ctaTitle = document.querySelector('.cta h2');
    const ctaDesc = document.querySelector('.cta p');
    const ctaBtn = document.querySelector('.cta .btn');
    if (ctaTitle) ctaTitle.textContent = t.cta.title;
    if (ctaDesc) ctaDesc.textContent = t.cta.desc;
    if (ctaBtn) ctaBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + t.cta.btn;

    // Update contact labels
    const contactLabels = document.querySelectorAll('.contact-item h4');
    if (contactLabels[0]) contactLabels[0].textContent = t.contact.email;
    if (contactLabels[1]) contactLabels[1].textContent = t.contact.phone;
    if (contactLabels[2]) contactLabels[2].textContent = t.contact.whatsapp;

    // Update form
    const formInputs = document.querySelectorAll('.contact-form input');
    const formSelect = document.querySelector('.contact-form select');
    const formTextarea = document.querySelector('.contact-form textarea');
    const formBtn = document.querySelector('.contact-form button');

    if (formInputs[0]) formInputs[0].placeholder = t.contact.name;
    if (formInputs[1]) formInputs[1].placeholder = t.contact.emailPlaceholder;
    if (formInputs[2]) formInputs[2].placeholder = t.contact.phonePlaceholder;
    if (formSelect) formSelect.querySelector('option').textContent = t.contact.serviceType;
    if (formTextarea) formTextarea.placeholder = t.contact.message;
    if (formBtn) formBtn.innerHTML = '<i class="fas fa-paper-plane"></i> ' + t.contact.submit;

    // Update footer
    const footerDesc = document.querySelector('.footer-brand p');
    const footerLinks = document.querySelector('.footer-links h4');
    const footerServices = document.querySelector('.footer-services h4');
    const footerRights = document.querySelector('.footer-bottom p');

    if (footerDesc) footerDesc.textContent = t.footer.desc;
    if (footerLinks) footerLinks.textContent = t.footer.quickLinks;
    if (footerServices) footerServices.textContent = t.footer.ourServices;
    if (footerRights) footerRights.textContent = t.footer.rights;

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Language selector
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
        langSelect.value = savedLang;
        if (savedLang !== 'ar') switchLanguage(savedLang);

        langSelect.addEventListener('change', (e) => {
            switchLanguage(e.target.value);
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert(translations[currentLang].formSuccess);
            contactForm.reset();
        });
    }

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .feature-item, .portfolio-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add styles
const style = document.createElement('style');
style.textContent = `
    .animate { opacity: 1 !important; transform: translateY(0) !important; }
    .nav-links.active { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: rgba(15, 23, 42, 0.98); padding: 20px; gap: 15px; border-radius: 0 0 15px 15px; }
`;
document.head.appendChild(style);

// Slideshow functionality for all devices
let currentSlide = 0;
const allSlideshows = document.querySelectorAll('.device-slideshow');

function goToSlide(index) {
    allSlideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slide');
        slides.forEach(s => s.classList.remove('active'));
        if (slides[index]) slides[index].classList.add('active');
    });
    currentSlide = index;
}

function nextSlide() {
    const firstSlideshow = allSlideshows[0];
    if (firstSlideshow) {
        const slideCount = firstSlideshow.querySelectorAll('.slide').length;
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }
}

// Auto-advance slideshow every 3 seconds
if (allSlideshows.length > 0) {
    setInterval(nextSlide, 3000);
}

