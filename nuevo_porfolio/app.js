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
  