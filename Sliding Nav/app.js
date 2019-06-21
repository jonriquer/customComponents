const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  let isActive = false;

  // Toggle Menu
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    isActive = !isActive;

    if (nav.classList.contains('nav-active')) {
      nav.style.animation = `navSlide 0.5s forwards`;
    }
    else {
      nav.style.animation = `navSlideOut 0.5s`;
    }

    // Animate Links
    navLinks.forEach((link, index) => {
      if (isActive) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
      }
      else {
        link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
        
      }
    })
    burger.classList.toggle('toggle');
  });

  
}

navSlide();