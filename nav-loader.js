// nav-loader.js — docs.willbfine.com
document.addEventListener('DOMContentLoaded', function () {
  fetch('/nav.html')
    .then(r => r.text())
    .then(html => {
      const el = document.getElementById('nav-placeholder');
      if (!el) return;
      el.innerHTML = html;

      // Determine current path for active state
      let path = window.location.pathname;
      if (path === '/' || path === '/index.html') path = '/';

      const links = el.querySelectorAll('nav a');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === '/' && path === '/') {
          link.classList.add('active');
        } else if (href !== '/' && path.startsWith(href)) {
          link.classList.add('active');
        }
      });
    })
    .catch(err => console.error('Nav load error:', err));
});
