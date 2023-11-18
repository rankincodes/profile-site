import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('checkbox');

  checkbox.addEventListener('change', function() {
    if(this.checked) {
      // Dark mode
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      // Light mode
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });
});