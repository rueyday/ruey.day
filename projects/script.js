document.addEventListener("DOMContentLoaded", () => {

  // 1. Reveal Animation Logic
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // 2. Initialize Slideshows
  document.querySelectorAll('.slideshow-container').forEach((container, idx) => {
    revealObserver.observe(container);

    setTimeout(() => {
      container.classList.add("reveal-active");
    }, 400 + idx * 100);

    const slides = container.querySelectorAll('.slide');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const dotContainer = container.querySelector('.dot-container');
    let currentSlide = 0;

    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.onclick = () => moveSlide(i);
      dotContainer.appendChild(dot);
    });

    function moveSlide(newIndex) {
      if (newIndex === currentSlide) return;

      const direction = newIndex > currentSlide ? 'right' : 'left';
      const oldSlide = slides[currentSlide];
      const newSlide = slides[newIndex];

      slides.forEach(s => {
        s.classList.remove(
          'active',
          'slide-in-left',
          'slide-in-right',
          'slide-out-left',
          'slide-out-right'
        );
      });

      oldSlide.classList.add('active');
      oldSlide.classList.add(direction === 'right' ? 'slide-out-left' : 'slide-out-right');

      newSlide.style.display = 'flex';
      newSlide.classList.add('active');
      newSlide.classList.add(direction === 'right' ? 'slide-in-right' : 'slide-in-left');

      currentSlide = newIndex;

      setTimeout(() => {
        slides.forEach((s, i) => {
          if (i !== currentSlide) {
            s.style.display = 'none';
            s.classList.remove('active');
          }
        });
      }, 400);

      dotContainer.querySelectorAll('.dot')
        .forEach((d, i) => d.classList.toggle('active', i === newIndex));
    }
    
    prevBtn.addEventListener('click', () => {
      moveSlide((currentSlide - 1 + slides.length) % slides.length);
    });

    nextBtn.addEventListener('click', () => {
      moveSlide((currentSlide + 1) % slides.length);
    });
  });

  // 3. Smooth Navigation
  document.querySelectorAll('.nav-secondary a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 110,
          behavior: 'smooth'
        });
      }
    });
  });

});
