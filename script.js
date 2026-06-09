function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

function closeMenu() {
  document.getElementById('mobileNav').classList.remove('open');
}

function sendMessage() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (!name || !email || !message) { alert('Please fill in all fields.'); return; }
  window.location.href = `mailto:adityarnq2005@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const nav = document.getElementById('mobileNav');
  const btn = document.querySelector('.mobile-menu-btn');
  if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
    nav.classList.remove('open');
  }
});
