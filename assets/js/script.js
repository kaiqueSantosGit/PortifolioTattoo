// Efeito de scroll suave nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Animação ao rolar a página (opcional)
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.hero, .orcamento, .portfolio');
  elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < window.innerHeight * 0.8) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
      }
  });
});