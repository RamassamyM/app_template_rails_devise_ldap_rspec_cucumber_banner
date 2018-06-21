function initUpdateNavbarOnScroll () {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-dark', 'bg-dark');
      } else {
        navbar.classList.remove('navbar-dark', 'bg-dark');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
