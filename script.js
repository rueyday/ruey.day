const workBtn = document.getElementById('workBtn');
const eduBtn = document.getElementById('eduBtn');
const workContent = document.getElementById('workExperience');
const eduContent = document.getElementById('eduExperience');

workBtn.addEventListener('click', () => {
  workBtn.classList.add('active');
  eduBtn.classList.remove('active');
  workContent.classList.add('show');
  eduContent.classList.remove('show');
});

eduBtn.addEventListener('click', () => {
  eduBtn.classList.add('active');
  workBtn.classList.remove('active');
  eduContent.classList.add('show');
  workContent.classList.remove('show');
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
