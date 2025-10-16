<script>
const button = document.getElementById('toggle-shorts');
const shortsTitle = document.querySelector('.shorts-title');
const shortsContainer = document.querySelector('.shorts-container');

button.addEventListener('click', () => {
  const isHidden = shortsContainer.style.display === 'none' || shortsContainer.style.display === '';
  
  if (isHidden) {
    shortsContainer.style.display = 'flex';
    shortsTitle.style.display = 'block';
  } else {
    shortsContainer.style.display = 'none';
    shortsTitle.style.display = 'none';
  }
});
</script>
