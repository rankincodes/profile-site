import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('checkbox');
  const bannerImage = document.getElementById('banner');

  checkbox.addEventListener('change', function() {
    if(this.checked) {
      // Dark mode
      document.documentElement.setAttribute('data-theme', 'dark');
      bannerImage.src = 'banner-dark.png'
    } else {
      // Light mode
      document.documentElement.setAttribute('data-theme', 'light');
      bannerImage.src = 'banner-light.png'
    }
  });
});