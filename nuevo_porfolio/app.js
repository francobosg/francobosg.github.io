 // Video hover effects
 const videoList = [
    document.getElementById('projectVideo1'),
    document.getElementById('projectVideo2'),
    document.getElementById('projectVideo3')
  ];
  
  const hoverSign = document.querySelector('.hover-sign');
  
  videoList.forEach(video => {
    video?.addEventListener('mouseenter', () => {
      video.play();
      hoverSign?.classList.add("active");
    });
  
    video?.addEventListener('mouseleave', () => {
      video.pause();
      hoverSign?.classList.remove("active");
    });
  });
  
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const progress = bar.dataset.progress;
    bar.style.setProperty('--hover-progress', `${progress}%`);
  });

  

  const cookieBanner = document.querySelector('.cookie-banner');
const acceptBtn = document.querySelector('#accept-cookies');
const rejectBtn = document.querySelector('#reject-cookies');
const readMoreBtn = document.querySelector('#read-more');

function hideCookieBanner() {
  localStorage.setItem('cookieConsent', 'true');
  cookieBanner.style.display = 'none';
  document.body.style.overflow = 'auto'; // Habilita el desplazamiento de la página
  document.body.classList.remove('no-scroll'); // Elimina la clase que bloquea el scroll
  document.body.style.position = ''; // Elimina el estilo de posición que bloquea el scroll
  document.body.style.paddingRight = ''; // Restablece el padding en el body
  document.body.classList.remove('blurred'); // Elimina la clase que aplica el difuminado
}

function rejectCookies() {
  localStorage.setItem('cookieConsent', 'false');
  cookieBanner.style.display = 'none';
  document.body.style.overflow = 'auto'; // Habilita el desplazamiento de la página
  document.body.classList.remove('no-scroll'); // Elimina la clase que bloquea el scroll
  document.body.style.position = ''; // Elimina el estilo de posición que bloquea el scroll
  document.body.style.paddingRight = ''; // Restablece el padding en el body
  document.body.classList.remove('blurred'); // Elimina la clase que aplica el difuminado
}

acceptBtn.addEventListener('click', hideCookieBanner);
rejectBtn.addEventListener('click', rejectCookies);

if (localStorage.getItem('cookieConsent') === 'true') {
  cookieBanner.style.display = 'none';
  document.body.style.overflow = 'auto'; // Habilita el desplazamiento
  document.body.classList.remove('no-scroll'); // Elimina la clase de no-scroll
  document.body.style.position = ''; // Elimina el estilo de posición
  document.body.style.paddingRight = ''; // Restablece el padding
  document.body.classList.remove('blurred'); // Elimina la clase que aplica el difuminado
}



 // Observer para autoBlur
const observerBlur = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  document.querySelectorAll('.autoBlur').forEach(el => observerBlur.observe(el));
  
  // Observer para autoDisplay
  const observerDisplay = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.2
  });
  document.querySelectorAll('.autoDisplay').forEach(el => observerDisplay.observe(el));
  