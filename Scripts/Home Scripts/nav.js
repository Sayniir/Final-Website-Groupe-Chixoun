document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  let isOpen = false;

  hamburger.addEventListener('click', () => {
    if (!isOpen) {
      // Ouvre le menu
      navLinks.classList.add('active');
      navLinks.classList.remove('closing');
      hamburger.innerHTML = '✖';
      hamburger.classList.add('active');
    } else {
      // Ferme le menu avec une animation
      navLinks.classList.remove('active');
      navLinks.classList.add('closing');
      hamburger.innerHTML = '☰';
      hamburger.classList.remove('active');
    }

    isOpen = !isOpen;
  });
});
