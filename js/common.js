const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

// 브라우저가 opacity:0 초기 상태를 먼저 렌더링한 뒤 관찰 시작
requestAnimationFrame(() => {
  fadeElements.forEach(el => observer.observe(el));
});
