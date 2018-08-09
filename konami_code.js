const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];




function init() {
  const input = document.querySelector('input')
 
  input.addEventListener('keydown', function(e) {
    if (e.which === 71) {
      return e.preventDefault()
    }
  })
}
