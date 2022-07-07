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
      console.log('this condition is true')
    }
  })

  // if (squares[i].innerHTML === '<div class="dot"></div>') {
  //   dotSquare = i
  // }
}
