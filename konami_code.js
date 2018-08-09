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
  var index = 0;
  document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if (key === codes[index]) {
      console.log(key + index)
      index++;
      if (index === codes.length) {
        console.log('YEP');
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
