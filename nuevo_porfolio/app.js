document.addEventListener("DOMContentLoaded", () => {
  const isMobileOrTablet = window.innerWidth < 1024;

  // 🎥 Video hover/touch effects
  const videoList = [
    document.getElementById('projectVideo1'),
    document.getElementById('projectVideo2'),
    document.getElementById('projectVideo3')
  ];

  const hoverSign = document.querySelector('.hover-sign');

  const handleInteraction = (video) => {
    video.play();
    hoverSign?.classList.add("active");
  };

  const stopInteraction = (video) => {
    video.pause();
    hoverSign?.classList.remove("active");
  };

  videoList.forEach(video => {
    if (!video) return;

    // Reproducción automática y configuración del video
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    if (!isMobileOrTablet) {
      // Solo para escritorio
      video.addEventListener('mouseenter', () => handleInteraction(video));
      video.addEventListener('mouseleave', () => stopInteraction(video));
    } else {
      // Opcional: reproducir directamente en móviles/tablets
      video.play().catch(() => {});
    }
  });

  // 📊 Progress bar setup
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.dataset.progress;
    bar.style.setProperty('--hover-progress', `${progress}%`);
  });

  // 🍪 Cookie banner logic
  const cookieBanner = document.querySelector('.cookie-banner');
  const acceptBtn = document.querySelector('#accept-cookies');
  const rejectBtn = document.querySelector('#reject-cookies');

  const hideCookieBanner = (accepted) => {
    localStorage.setItem('cookieConsent', accepted ? 'true' : 'false');
    if (cookieBanner) cookieBanner.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.classList.remove('no-scroll', 'blurred');
    document.body.style.position = '';
    document.body.style.paddingRight = '';
  };

  acceptBtn?.addEventListener('click', () => hideCookieBanner(true));
  rejectBtn?.addEventListener('click', () => hideCookieBanner(false));

  if (['true', 'false'].includes(localStorage.getItem('cookieConsent'))) {
    hideCookieBanner(true);
  }

  // 👀 IntersectionObserver reusable logic (solo en escritorio)
  if (!isMobileOrTablet) {
    const createObserver = (selector) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
        });
      }, {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
      });

      document.querySelectorAll(selector).forEach(el => observer.observe(el));
    };

    createObserver('.autoBlur');
    createObserver('.autoDisplay');
    createObserver('.fadeInRight');
  }
});
