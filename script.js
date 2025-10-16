<script>
const button = document.getElementById('toggle-shorts');
const shortsTitle = document.querySelector('.shorts-title');
const shortsContainer = document.querySelector('.shorts-container');

button.addEventListener('click', () => {
  const isVisible = window.getComputedStyle(shortsContainer).display !== 'none';
  
  if (isVisible) {
    shortsContainer.style.display = 'none';
    shortsTitle.style.display = 'none';
  } else {
    shortsContainer.style.display = 'flex';
    shortsTitle.style.display = 'block';
  }
});
</script>
