////////////////////////////////
// Global Variables Here
// need a score variable

let score = 0
let dotSquare = 0
const dot = document.getElementsByClassName('dot')
const squares = document.getElementsByClassName('square')
// console.log(squares)
////////////////////////////////
// Functions For Game Logic Here

//function moveDot()
for (i = 0; i < squares.length; i++) {
  if (squares[i].innerHTML === '<div class="dot"></div>') {
    dotSquare = i
  }
}
console.log(dotSquare)
// select divs from html file

// make a dot

// function that makes dot appear in random location on screen
// make css grid "container" w/ 9 cells
// each cell is it's own div
// populate divs one at a time with the dot

////////////////////////////////
// Event Listeners Here
// .addEventListener('click', () =>
// listen for click event on the dot
// when the click event happens, we need to fire a function
// function that fires needs to increase score and needs to invoke the function that moves the dot
