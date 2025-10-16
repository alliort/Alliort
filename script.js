<script>
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggle-shorts');
  const shortsTitle = document.querySelector('.shorts-title');
  const shortsContainer = document.querySelector('.shorts-container');

  button.addEventListener('click', () => {
    const isVisible = window.getComputedStyle(shortsContainer).display !== 'none';
    shortsContainer.style.display = isVisible ? 'none' : 'flex';
    shortsTitle.style.display = isVisible ? 'none' : 'block';
  });
});
</script>
