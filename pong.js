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
      event = true
      //console.log('this condition is true')
    }
  })

  // if (squares[i].innerHTML === '<div class="dot"></div>') {
  //   dotSquare = i
  // }
}

// select divs from html file

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

// when the click event happens, we need to fire a function

// function that fires needs to increase score and needs to invoke the function that moves the dot

// button.addEventListener('click', () => {}
