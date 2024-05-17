function showDropdown() {
  document.getElementById("dropdown-content").classList.add("show");
}

function hideDropdown() {
  document.getElementById("dropdown-content").classList.remove("show");
}

function showCart() {
  document
    .getElementById("shopping-cart-content")
    .classList.toggle("show-cart");
}

let removeButtons = document.getElementsByClassName("remove-button");

for (let i = 0; i < removeButtons.length; i++) {
  let removeButton = removeButtons[i];

  removeButton.addEventListener("click", function (event) {
    let clickedRemoveButton = event.target;
    clickedRemoveButton.parentElement.remove();
  });
}

function like(x) {
  if (x.classList.contains("fa-regular")) {
    x.classList.remove("fa-regular");
    x.classList.add("fa-solid");
  } else {
    x.classList.remove("fa-solid");
    x.classList.add("fa-regular");
  }
}

function add() {
  let itemPrice = document.querySelector("#item-price");
  let price = document.querySelector("#cart-price");
  price.innerHTML = itemPrice;
}
