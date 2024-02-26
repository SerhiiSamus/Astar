const callBtn = document.querySelector('.call-us-btn');
const contactBtn = document.querySelector('.consultation-btn');
const closeModalBtn = document.querySelector('.modal-close-btn');
const modalBg = document.querySelector('.modal-bg');
const modalFormBtn = document.querySelector('.modal-form-btn');

callBtn.addEventListener('click', () => {
  modalBg.classList.add('visible');
  document.body.classList.add('modal-open');
});
contactBtn.addEventListener('click', () => {
  modalBg.classList.add('visible');
  document.body.classList.add('modal-open');
});
closeModalBtn.addEventListener('click', () => {
  modalBg.classList.remove('visible');
  document.body.classList.remove('modal-open');
});
modalBg.addEventListener('click', (event) => {
  if (event.target === modalBg) {
    modalBg.classList.remove('visible');
    document.body.classList.remove('modal-open');
  }
});

modalFormBtn.addEventListener('click', () => {
  modalBg.classList.remove('visible');
  document.body.classList.remove('modal-open');
});
