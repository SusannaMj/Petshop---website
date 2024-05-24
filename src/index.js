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

function changeItemQuantity(event) {
  let input = event.target;
  if (input.value < 0 || isNaN(input.value)) {
    input.value = 1;
  } else {
    updateCartTotal();
  }
}

var itemQuantity = document.getElementsByClassName("item-quantity");
for (let i = 0; i < itemQuantity.length; i++) {
  let quantityInput = itemQuantity[i];
  quantityInput.addEventListener("change", changeItemQuantity);
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

  totalElement.innerHTML = Math.round(total * 100) / 100;
}

function removeCartItem(event) {
  let clickedRemoveButton = event.target;
  clickedRemoveButton.parentElement.remove();
  updateCartTotal();
}

let removeButtons = document.getElementsByClassName("remove-button");

for (let i = 0; i < removeButtons.length; i++) {
  let removeButton = removeButtons[i];

  removeButton.addEventListener("click", removeCartItem);
}

function addButtonClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement;
  let price = shopItem.getElementsByClassName("item-price")[0].innerHTML;
  let title = shopItem.getElementsByClassName("item-title")[0].innerHTML;
  let image = shopItem.getElementsByClassName("product-image")[0].src;
  addItemToCart(price, title, image);
}

function addItemToCart(price, title, image) {
  let cartRow = document.createElement("div");
  let cartItem = document.getElementsByClassName("container-cart-items")[0];
  cartRow.classList.add("cart-item");
  let cartItemContainer = ` 
                  <div class="d-flex col-6" id="product">
                    <img
                      src="${image}";
                      class="img-fluid product-image-cart"
                    />
                    <p>${title}</p>
                    <h3 class="cart-price">${price}</h3>
                  </div>
                  <div class="col-2 quantity">
                    <input
                      type="number"
                      class="item-quantity"
                      name="quantity"
                      value="1"
                    />
                  </div>
                
                  <div class="col-2 total">A$100</div>
                  <button class="col-2 remove-button">remove</button>
                  
               `;

  cartRow.innerHTML = cartItemContainer;
  cartItem.append(cartRow);
}

let addToCartButton = document.getElementsByClassName("add-to-cart-button");
for (let i = 0; i < addToCartButton.length; i++) {
  let button = addToCartButton[i];
  button.addEventListener("click", addButtonClicked);
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
