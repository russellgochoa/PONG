let score = 0
let dotSquare = 0
let dot = '<div class="dot"></div>' //document.querySelector('.dot')
const squares = document.getElementsByClassName('square')

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    if (event.target.innerHTML != '') {
      squares[i].innerHTML = ''
      squares[Math.floor(Math.random() * 9)].innerHTML = dot
      //event.target.innerHTML = dot
      // console.log((event.target.innerHTML = dot))
    }

    //console.log(squares[Math.floor(Math.random() * 9)])
  })
}

//console.log(parseInt('string'.length / 2))
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

// let changeSquare = () => {
//   Math.floor(Math.random() * 9)
// }
// console.log(changeSquare)
// console.log(Math.ceil(Math.random() * 9))
// } ???
const resetButton = document.getElementById('btn')
resetButton.addEventListener('click', () => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
    squares[Math.floor(Math.random())].innerHTML = dot
  }
})
