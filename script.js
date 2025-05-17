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
