document.querySelectorAll('.slideshow-container').forEach(container => {
    const slides = container.querySelectorAll('.slide');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const dotContainer = container.querySelector('.dot-container');
    let currentSlide = 0;
    const updateSlides = (newIndex, direction = 'right') => {
      if (newIndex === currentSlide) return;
      const oldSlide = slides[currentSlide];
      const newSlide = slides[newIndex];
      slides.forEach(slide => {
        slide.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right');
      });
      newSlide.style.display = 'flex';
      oldSlide.classList.add(direction === 'right' ? 'slide-out-left' : 'slide-out-right');
      newSlide.classList.add(direction === 'right' ? 'slide-in-right' : 'slide-in-left');
      setTimeout(() => {
        oldSlide.style.display = 'none';
      }, 200);
      dotContainer.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === newIndex);
      });
      currentSlide = newIndex;
    };
    const createDots = () => {
      slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          const direction = i > currentSlide ? 'right' : 'left';
          updateSlides(i, direction);
        });
        dotContainer.appendChild(dot);
      });
    };
    prevBtn.addEventListener('click', () => {
      const nextIndex = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides(nextIndex, 'left');
    });
    nextBtn.addEventListener('click', () => {
      const nextIndex = (currentSlide + 1) % slides.length;
      updateSlides(nextIndex, 'right');
    });
    slides.forEach((slide, i) => {
      slide.style.display = i === 0 ? 'flex' : 'none';
    });
    createDots();
  });
  