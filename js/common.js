const fadeElements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

// 이중 rAF: 브라우저가 opacity:0 초기 상태를 완전히 렌더링한 뒤 관찰 시작
// 모바일에서 transition skip 방지
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    fadeElements.forEach(el => observer.observe(el));
  });
});
