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

function updateCartTotal() {
  let cartItemsContainer = document.getElementsByClassName(
    "container-cart-items"
  )[0];
  let cartItems = cartItemsContainer.getElementsByClassName("cart-item");
  total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    let cartItem = cartItems[i];

    let cartItemPrice = cartItem.getElementsByClassName("cart-price")[0];

    let cartItemQuantity = cartItem.getElementsByClassName("item-quantity")[0];

    let price = parseFloat(cartItemPrice.innerHTML.replace("A$", ""));

    let quantity = cartItemQuantity.value;

    total = total + price * quantity;
  }
  let totalElement = document.getElementsByClassName("cart-total")[0];
  console.log(totalElement);
  totalElement.innerHTML = total;
}

let removeButtons = document.getElementsByClassName("remove-button");

for (let i = 0; i < removeButtons.length; i++) {
  let removeButton = removeButtons[i];

  removeButton.addEventListener("click", function (event) {
    let clickedRemoveButton = event.target;
    clickedRemoveButton.parentElement.remove();
    updateCartTotal();
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
