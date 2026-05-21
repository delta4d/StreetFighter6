function toggleSection(id) {
  const sec = document.getElementById(id);
  const header = sec.querySelector('.section-header');
  const body = document.getElementById('body-' + id);
  const isOpen = body.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}

function toggleGlossary() {
  const body = document.getElementById('gloss-body');
  const header = document.querySelector('.glossary-header');
  const chevron = document.getElementById('gloss-chevron');
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  header.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}
