document.addEventListener("DOMContentLoaded", function () {
	const cookieBanner = document.querySelector('.cookie-banner');
	const acceptBtn = document.querySelector('#accept-cookies');
	const rejectBtn = document.querySelector('#reject-cookies');
  
	function hideCookieBanner() {
	  localStorage.setItem('cookieConsent', 'true');
	  cookieBanner.style.display = 'none';
	}
  
	function rejectCookies() {
	  localStorage.setItem('cookieConsent', 'false');
	  cookieBanner.style.display = 'none';
	}
  
	if (acceptBtn && rejectBtn) {
	  acceptBtn.addEventListener('click', hideCookieBanner);
	  rejectBtn.addEventListener('click', rejectCookies);
	}
  
	if (localStorage.getItem('cookieConsent') === 'true' || localStorage.getItem('cookieConsent') === 'false') {
	  cookieBanner.style.display = 'none';
	}
  });
  
