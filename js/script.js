/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
var board = document.querySelector('#board');
var colors = ['#e74c3c', '#8e44ad', '#3498bd', '#e67e22', '#2ecc71'];
var SQUARES_NUM = 500;

var _loop = function _loop(i) {
  var square = document.createElement('div');
  square.classList.add('square');
  board.append(square);
  square.addEventListener('mouseover', function () {
    changeColor(square);
  });
  square.addEventListener('mouseleave', function () {
    removeColor(square);
  });
};

for (var i = 0; i < SQUARES_NUM; i++) {
  _loop(i);
}

;

function changeColor(element) {
  var color = randomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = "0 0 2px ".concat(color, ", 0 0 10px ").concat(color);
}

function removeColor(element) {
  element.style.backgroundColor = 'rgb(29, 29, 29)';
  element.style.boxShadow = "0 0 2px #000";
}

;

function randomColor() {
  var numColor = Math.floor(Math.random() * colors.length);
  return colors[numColor];
}

;
/******/ })()
;