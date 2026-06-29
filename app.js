// GSAP animations guarded so page still works if CDN is blocked
(function () {
  if (typeof window.gsap === 'undefined') return;

  gsap.from('.hero h1', {
    y: 30,
    opacity: 0,
    duration: 0.8
  });

  gsap.from('.bento-item', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.bento',
      start: 'top 80%'
    }
  });
})();