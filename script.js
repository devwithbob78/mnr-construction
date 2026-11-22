const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) quoteForm.addEventListener('submit', event => {
  event.preventDefault();
  const note = document.getElementById('formNote');
  note.textContent = 'Thank you. This is a frontend preview: your inquiry has not been sent or stored. The form will be connected to MNR Construction during backend development.';
  note.classList.add('form-note-alert');
});
