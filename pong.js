////////////////////////////////
// Global Variables Here
// need a score variable

let score = 0
let dotSquare = 0
const dot = document.querySelector('.dot')
const squares = document.getElementsByClassName('square')

////////////////////////////////
// Functions For Game Logic Here

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    // console.log(event.target.children)
    // console.log(dot)
    if (event.target.children.length > 0) {
      removeDot = true
      // console.log('this condition is true')
    }
  })

  // if (squares[i].innerHTML === '<div class="dot"></div>') {
  //   dotSquare = i
  // }
}

// select divs from html file

// function moveDot() {
//   const square1 = document.querySelector('#square1').innerText
//   const square2 = document.querySelector('#square2').innerText
//   const square3 = document.querySelector('#square3').innerText
//   const square4 = document.querySelector('#square4').innerText
//   const square5 = document.querySelector('#square5').innerText
//   const square6 = document.querySelector('#square6').innerText
//   const square7 = document.querySelector('#square7').innerText
//   const square8 = document.querySelector('#square8').innerText
//   const square9 = document.querySelector('#square9').innerText
// }

// make a dot

// function that makes dot appear in random location on screen

// function dotSquare(max) {
//   return Math.floor(Math.random() * max)
// }

// make css grid "container" w/ 9 cells
// each cell is it's own div
// populate divs one at a time with the dot

////////////////////////////////
// Event Listeners Here
// listen for click event on the dot

// dot.addEventListener('click', () => {
//   squares.appendChild(dot)
// })

// moveDot.addEventListener('click', () => {})
// document.querySelector('#square1').addEventListener('click', moveDot)
// document.querySelector('#square2').addEventListener('click', moveDot)
// document.querySelector('#square3').addEventListener('click', moveDot)
// document.querySelector('#square4').addEventListener('click', moveDot)
// document.querySelector('#square5').addEventListener('click', moveDot)
// document.querySelector('#square6').addEventListener('click', moveDot)
// document.querySelector('#square7').addEventListener('click', moveDot)
// document.querySelector('#square8').addEventListener('click', moveDot)
// document.querySelector('#square9').addEventListener('click', moveDot)

// when the click event happens, we need to fire a function

// function that fires needs to increase score and needs to invoke the function that moves the dot

// button.addEventListener('click', () => {}
