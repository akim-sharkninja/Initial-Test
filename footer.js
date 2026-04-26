(function () {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-inner">
      <p class="footer-name">Andy Kim</p>
      <nav class="footer-nav">
        <a href="work.html">Work</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <p class="footer-copy">&copy; ${new Date().getFullYear()}</p>
    </div>
  `;

  const existing = document.querySelector('footer');
  if (existing) {
    existing.replaceWith(footer);
  } else {
    document.body.appendChild(footer);
  }
})();
