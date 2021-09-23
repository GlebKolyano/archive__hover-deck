const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#3498bd', '#e67e22', '#2ecc71']
const SQUARES_NUM = 500;


for (let i = 0; i < SQUARES_NUM; i++) {
 const square = document.createElement('div')
 square.classList.add('square')
 board.append(square)

 square.addEventListener('mouseover', () =>{ 
   changeColor(square)})
 square.addEventListener('mouseleave', () => {
   removeColor(square)})
 
};

function changeColor(element) {
  const color = randomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
  element.style.backgroundColor = 'rgb(29, 29, 29)'
  element.style.boxShadow = `0 0 2px #000`
};
function randomColor() {
  const numColor = Math.floor(Math.random() * colors.length)
  return colors[numColor]
};