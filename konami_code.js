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
  document.addEventListener('keydown', function(e) {
    if (e.which === 71) {
      return e.preventDefault()
    } else {
      console.log(e.which)
    }
  })
}
