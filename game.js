let score = 0
let dotSquare = 0
const dot = document.querySelector('.dot')
const squares = document.getElementsByClassName('square')

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', (event) => {
    if (event.target.children.length > 0) {
      squares[i].innerText = ''
    }
  })
}
