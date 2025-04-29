document.addEventListener("DOMContentLoaded", () => {
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

    // Eventos para escritorio (mouseenter y mouseleave)
    video.addEventListener('mouseenter', () => handleInteraction(video));
    video.addEventListener('mouseleave', () => stopInteraction(video));

    // Eventos para móviles/tablets (touchstart y touchend)
    video.addEventListener('touchstart', () => handleInteraction(video));
    video.addEventListener('touchend', () => stopInteraction(video));

    // Prevent touch scrolling on video tap to ensure interaction
    video.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
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

  // 👀 IntersectionObserver reusable logic
  const createObserver = (selector) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, {
      threshold: window.innerWidth < 768 ? 0.1 : 0.2,
      rootMargin: '0px 0px -10% 0px' // Mejora detección en móviles/Safari
    });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  };

  // Inicializar observers
  createObserver('.autoBlur');
  createObserver('.autoDisplay');
  createObserver('.fadeInRight');
});
