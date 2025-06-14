// dark-mode.js - gestione tema chiaro/scuro con persistenza
// Il tema viene salvato in localStorage e applicato aggiungendo/rimuovendo
// la classe "dark" sull'elemento <html>. Se non c'e' preferenza salvata
// viene usato prefers-color-scheme.

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  // Applica il tema salvato; se assente, controlla la preferenza di sistema
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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

  // Cambia l'icona del pulsante in base al tema attivo
  function updateIcon() {
    if (!toggle) return;
    if (root.classList.contains('dark')) {
      toggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      toggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }
});
