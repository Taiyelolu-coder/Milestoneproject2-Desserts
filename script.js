const cart = document.getElementById("totalQuantity");

const addToCartBtns = document.querySelectorAll(".addToCartBtn");
const modalDivs = document.querySelectorAll(".modaldiv");
const increaseQuantityBtns = document.querySelectorAll(".increaseBtn");
const decreaseQuantityBtns = document.querySelectorAll(".decreaseBtn");
const quantityTexts = document.querySelectorAll(".quantity");
const totalQuantityText = document.getElementById("totalQuantity");
const cartContentList = document.getElementById("cart-content");

const totalPrice = document.getElementById("totalCost");

let products = [
  {
    name: "Waffle with Berries",
    short_name: "Waffle",
    amount: "6.50",
  },
  {
    name: "Vanilla Bean Creme Brulee",
    short_name: "Creme Brulee",
    amount: "7.00",
  },
  {
    name: "Macaron Mix of Five",
    short_name: "Macaron",
    amount: "8.00",
  },
  {
    name: "Classic Tiramisu",
    short_name: "Tiramisu",
    amount: "5.50",
  },
  {
    name: "Pistachio Baklava",
    short_name: "Baklava",
    amount: "4.00",
  },
  {
    name: "Lemon Meringue Pie",
    short_name: "Pie",
    amount: "5.00",
  },
  {
    name: "Red Velvet Cake",
    short_name: "Cake",
    amount: "4.50",
  },
  {
    name: "Salted Caramel Brownie",
    short_name: "Brownie",
    amount: "5.50",
  },
  {
    name: "Vanilla Panna Cotta",
    short_name: "Panna Cotta",
    amount: "6.50",
  },
];

const cartArray = [];

const addToCartFunction = (event, index) => {
  cartArray.push({ ...products[index], quantity: 1 });
  const productButtonsWrapper = modalDivs[index];
  const quantityText = quantityTexts[index];

  event.target.style.display = "none";
  productButtonsWrapper.style.display = "flex";
  quantityText.innerText = "1";

  populateCart();
};

const increaseQuantity = (event, index) => {
  const cartItemIndex = cartArray
    .map((item) => item.short_name)
    .indexOf(products[index].short_name);

  const newQuantity = cartArray[cartItemIndex].quantity + 1;
  cartArray[cartItemIndex] = {
    ...cartArray[cartItemIndex],
    quantity: newQuantity,
  };

  const quantityText = quantityTexts[index];
  quantityText.innerText = `${newQuantity}`;

  populateCart();
};

const decreaseQuantity = (event, index) => {
  const cartItemIndex = cartArray
    .map((item) => item.short_name)
    .indexOf(products[index].short_name);

  const newQuantity = cartArray[cartItemIndex].quantity - 1;

  if (newQuantity === 0) {
    cartArray.splice(cartItemIndex, 1);

    const productButtonsWrapper = modalDivs[index];
    const addToCartBtn = addToCartBtns[index];

    productButtonsWrapper.style.display = "none";
    addToCartBtn.style.display = "block";
  } else {
    cartArray[cartItemIndex] = {
      ...cartArray[cartItemIndex],
      quantity: newQuantity,
    };

    const quantityText = quantityTexts[index];
    quantityText.innerText = `${newQuantity}`;
  }

  populateCart();
};

// add event listeners to buttons
for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", (event) =>
    addToCartFunction(event, i)
  );
}

for (let i = 0; i < increaseQuantityBtns.length; i++) {
  increaseQuantityBtns[i].addEventListener("click", (event) =>
    increaseQuantity(event, i)
  );
}

for (let i = 0; i < decreaseQuantityBtns.length; i++) {
  decreaseQuantityBtns[i].addEventListener("click", (event) =>
    decreaseQuantity(event, i)
  );
}

const populateCart = () => {
  const itemsList = [];
  cartArray.forEach((item) =>
    itemsList.push(
      `
        <li>
          <h6>${item.name} (${item.quantity})</h6>
          <h5>$${item.amount}</h5>
        </li>
      `
    )
  );

  cartContentList.innerHTML = itemsList.join("");

  const totalQuantity = cartArray.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalAmount = cartArray.reduce(
    (acc, curr) => acc + curr.quantity * +curr.amount,
    0
  );

  totalQuantityText.innerText = totalQuantity;
  totalPrice.innerText = totalAmount.toFixed(2);
};
