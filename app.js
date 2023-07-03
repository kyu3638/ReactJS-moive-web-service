const button = document.querySelector("#button");
let num = 0;
function countClicked(event) {
  event.preventDefault();
  num += 1;
  console.log(num);
}

button.addEventListener("click", countClicked);
