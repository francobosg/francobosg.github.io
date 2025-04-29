document.addEventListener("DOMContentLoaded", () => {
  // 🎥 Video hover effects
  const videoList = [
    document.getElementById('projectVideo1'),
    document.getElementById('projectVideo2'),
    document.getElementById('projectVideo3')
  ];

  const hoverSign = document.querySelector('.hover-sign');

  videoList.forEach(video => {
    if (!video) return;
    video.addEventListener('mouseenter', () => {
      video.play();
      hoverSign?.classList.add("active");
    });
    video.addEventListener('mouseleave', () => {
      video.pause();
      hoverSign?.classList.remove("active");
    });
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
    cookieBanner?.style.setProperty('display', 'none');
    document.body.style.overflow = 'auto';
    document.body.classList.remove('no-scroll', 'blurred');
    document.body.style.position = '';
    document.body.style.paddingRight = '';
  };

  acceptBtn?.addEventListener('click', () => hideCookieBanner(true));
  rejectBtn?.addEventListener('click', () => hideCookieBanner(false));

  if (localStorage.getItem('cookieConsent') === 'true' || localStorage.getItem('cookieConsent') === 'false') {
    hideCookieBanner(true);
  }

  // 👀 IntersectionObserver reusable logic
  const createObserver = (selector) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    }, {
      threshold: window.innerWidth < 768 ? 0.1 : 0.2
    });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  };

  // Inicializar observers
  createObserver('.autoBlur');
  createObserver('.autoDisplay');
  createObserver('.fadeInRight');
});


