const tabs = [
  {
    button: document.getElementById('workBtn'),
    content: document.getElementById('workExperience'),
  },
  {
    button: document.getElementById('eduBtn'),
    content: document.getElementById('eduExperience'),
  },
  {
    button: document.getElementById('teachBtn'),
    content: document.getElementById('teachExperience'),
  },
];

tabs.forEach(({ button, content }) => {
  button.addEventListener('click', () => {
    // Deactivate all tabs
    tabs.forEach(t => {
      t.button.classList.remove('active');
      t.content.classList.remove('show');
    });

    // Activate selected tab
    button.classList.add('active');
    content.classList.add('show');
  });
});

document.querySelectorAll('.nav-secondary a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 110, // adjust offset for fixed header
        behavior: 'smooth'
      });
    }
  });
});
