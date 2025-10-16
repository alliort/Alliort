<script>
  const button = document.getElementById('toggle-shorts');
  const shortsTitle = document.querySelector('.shorts-title');
  const shortsContainer = document.querySelector('.shorts-container');

  button.addEventListener('click', () => {
    // toggle visibility
    if (shortsContainer.style.display === 'none') {
      shortsContainer.style.display = 'flex'; // show section
      shortsTitle.style.display = 'block';    // show title
    } else {
      shortsContainer.style.display = 'none'; // hide section
      shortsTitle.style.display = 'none';     // hide title
    }
  });
</script>
