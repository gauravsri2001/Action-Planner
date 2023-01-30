const inputGroup = document.getElementsByClassName('inputGroup')[0];
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('allItems');
const userInput = document.getElementById('userInput');


pencil.addEventListener("click", function() {
  allItems.innerHTML = "";

})

userInput.addEventListener("keydown", function(event) {
  if (event.key == "Enter") {
    addItem();
  }
})

function addItem() {
  var h4 = document.createElement("h4");
  h4.innerHTML = "- " + userInput.value;

  h4.addEventListener("click", function() {
    h4.style.textDecoration = "line-through";
  })
  allItems.insertAdjacentElement("beforeend", h4);
  userInput.value = "";
}
