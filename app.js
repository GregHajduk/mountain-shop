const wrapper = document.querySelector(".slider__wrapper");
const productItem = document.querySelectorAll(".navbar__products__item");
const currentProductTitle = document.querySelector(".product__title");
const currentProductSubtitle = document.querySelector(".product__subtitle");
const currentProductDesc = document.querySelector(".product__desc");
const currentProductPrice = document.querySelector(".product__price");
const currentProductImg = document.querySelector(".product__img");
const currentProductColors = document.querySelectorAll(".product__color");
const currentProductSizes = document.querySelectorAll(".product__size");
const cartOpenBtn = document.querySelector(".product__button");
const cartCloseBtn = document.querySelector("#cart__close__btn");
const cart = document.querySelector(".cart");
const cartProductTitle = document.querySelector(
  ".cart__chosen__products__title"
);
const cartProductImg = document.querySelector(".cart__chosen__products__img");
const cartProductSize = document.querySelector(".cart__chosen__products__size");
const cartProductColor = document.querySelector(
  ".cart__chosen__products__color"
);
const cartProductPrice = document.querySelector(
  ".cart__chosen__products__price"
);
const productDetail = document.querySelector(".cart__chosen__product__details");

let selectedProduct = products[0];

cartProductColor.style.backgroundColor = selectedProduct.colors[1].code

productItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translate(${-100 * index}vw)`;
    displayProduct(index);
  });
});

const displayProduct = (index) => {
  selectedProduct = products[index];
  
  currentProductTitle.textContent = selectedProduct.title;
  currentProductSubtitle.textContent = selectedProduct.subtitle;
  currentProductDesc.textContent = selectedProduct.desc;
  currentProductPrice.textContent = selectedProduct.price;
  currentProductImg.src = selectedProduct.colors[0].img;
  currentProductColors.textContent = selectedProduct.colors;
  
  currentProductColors.forEach((color, index) => {
    color.style.background = selectedProduct.colors[index].code;
    cartProductColor.style.backgroundColor = selectedProduct.colors[0].code
    cartProductImg.src = selectedProduct.colors[0].img;
  });
};

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = selectedProduct.colors[index].img;
    cartProductImg.src = selectedProduct.colors[index].img;
    cartProductColor.style.backgroundColor = selectedProduct.colors[index].code;
    console.log(selectedProduct.colors[index].code);
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.classList.remove("selected");
    });
    size.classList.add("selected");
    cartProductSize.textContent = size.textContent;
  });
});
// --------------------- shopping cart--------------------
let cartItems = [];

cartCloseBtn.addEventListener("click", () => {
  cart.style.display = "none";
});

cartOpenBtn.addEventListener("click", (e) => {
  cart.style.display = "flex";
  const selectedSize = e.target;
  addToCart(selectedSize);
});

const addToCart = () => {
  cartItems = [...cartItems, selectedProduct];
  cartItems.map((item) => {
    cartProductTitle.textContent = item.title;
    cartProductPrice.textContent = item.price;
  });
};
