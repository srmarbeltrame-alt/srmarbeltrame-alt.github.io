const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
const yearTarget = document.querySelector('[data-current-year]');
if (yearTarget) yearTarget.textContent = new Date().getFullYear();
