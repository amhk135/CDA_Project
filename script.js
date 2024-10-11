window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
  
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        currentSection = section.getAttribute('id');
      }
    });
  
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
        nav.style.backgroundColor = 'darkgrey';
      } else {
        nav.style.backgroundColor = '#d3d3d3';
      }
    });
  });