// dark-mode.js - gestione tema chiaro/scuro con persistenza
// Il tema viene salvato in localStorage e applicato aggiungendo/rimuovendo
// la classe "dark" sull'elemento <html>

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  // Applica il tema salvato se presente
  if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
  }

  // Aggiorna l'icona in base al tema attivo
  updateIcon();

  if (toggle) {
    toggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      const isDark = root.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateIcon();
    });
  }

  function updateIcon() {
    if (!toggle) return;
    if (root.classList.contains('dark')) {
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
});
