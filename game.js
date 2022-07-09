let score = 0
let dotSquare = 0
const dot = document.querySelector('.dot')
const squares = document.getElementsByClassName('square')

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    if (event.target.children.length > 0) {
      squares[i].innerText = ''
    }
    //console.log((squares[i].dotSquare = Math.ceil(Math.random() * 9)))
  })
}

// each cell is it's own div
// populate divs one at a time with the dot

// when the click event happens, we need to fire a function
// function that fires needs to increase score and needs to invoke the function that moves the dot

// moveDot()??

// function moveDot(event) {}
// dot.addEventListener('click', (event) => {
//   if (event.target.dot) ???
// })

// function that makes dot appear in random location on screen

// function randomSquare(min, max) {
// console.log(Math.ceil(Math.random() * 9))
// } ???
