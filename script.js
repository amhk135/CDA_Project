// Smooth Scroll Navigation - Active Link Highlight
window.addEventListener('scroll', function() {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav ul li a');

  sections.forEach((section, index) => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;

      if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
              link.classList.remove('active');
          });
          navLinks[index].classList.add('active');
      }
  });
});

// Dynamic Add/Remove References
document.getElementById('add-reference').addEventListener('click', function() {
  const referenceSection = document.getElementById('reference-section');
  const newReference = document.createElement('div');
  newReference.classList.add('reference-fields');

  newReference.innerHTML = `
        <div class="col">
            <label for="reference-name">Reference Name:</label>
            <input type="text" id="reference-name" name="reference-name" placeholder="Name" required>
        </div>
        <div class="col">
            <label for="reference-title">Title:</label>
            <input type="text" id="reference-title" name="reference-title" placeholder="Title" required>
        </div>
        <div class="col">
            <label for="reference-company">Company:</label>
            <input type="text" id="reference-company" name="reference-company" placeholder="Company" required>
        </div>
        <div class="col">
            <label for="reference-phone">Phone:</label>
            <input type="tel" id="reference-phone" name="reference-phone" placeholder="Phone" required>
  `;

  referenceSection.appendChild(newReference);

  newReference.querySelector('.remove-reference').addEventListener('click', function() {
      referenceSection.removeChild(newReference);
  });
});
