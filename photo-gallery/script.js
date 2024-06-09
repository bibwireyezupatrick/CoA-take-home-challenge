document.addEventListener('DOMContentLoaded', () => {
  const imageBoxes = document.querySelectorAll('.image-box');

  imageBoxes.forEach(box => {
    box.addEventListener('click', () => {
      alert(`You clicked on ${box.querySelector('h1').textContent}`);
    });
  });
});
