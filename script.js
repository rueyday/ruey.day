const workBtn = document.getElementById('workBtn');
const eduBtn = document.getElementById('eduBtn');
const teachBtn = document.getElementById('teachBtn');
const workContent = document.getElementById('workExperience');
const eduContent = document.getElementById('eduExperience');
const teachContent = document.getElementById('teachExperience');

workBtn.addEventListener('click', () => {
  workBtn.classList.add('active');
  eduBtn.classList.remove('active');
  teachBtn.classList.remove('active');
  workContent.classList.add('show');
  eduContent.classList.remove('show');
  teachContent.classList.remove('show');
});

eduBtn.addEventListener('click', () => {
  eduBtn.classList.add('active');
  workBtn.classList.remove('active');
  teachBtn.classList.remove('active');
  eduContent.classList.add('show');
  workContent.classList.remove('show');
  teachContent.classList.remove('show');
});

teachBtn.addEventListener('click', () => {
  teachBtn.classList.add('active');
  workBtn.classList.remove('active');
  eduBtn.classList.remove('active');
  teachContent.classList.add('show');
  workContent.classList.remove('show');
  eduContent.classList.remove('show');
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
