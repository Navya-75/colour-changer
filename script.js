function changeColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  document.getElementById("colorCode").textContent = "Current Color: " + randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
