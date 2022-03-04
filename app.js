const body = document.querySelector("body");
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
const message = document.querySelector(".product__message");

let selectedProduct = products[0];
cartProductColor.style.backgroundColor = selectedProduct.colors[1].code;

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
    cartProductColor.style.backgroundColor = selectedProduct.colors[0].code;
    cartProductImg.src = selectedProduct.colors[0].img;
  });
};

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = selectedProduct.colors[index].img;
    cartProductImg.src = selectedProduct.colors[index].img;
    cartProductColor.style.backgroundColor = selectedProduct.colors[index].code;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", (e) => {
    currentProductSizes.forEach((size) => {
      size.classList.remove("selected");
    });
    size.classList.add("selected");
    cartProductSize.textContent = size.textContent;
    cartOpenBtn.classList.add("active");
    message.style.display = "none";
  });
});
// --------------------- shopping cart--------------------
let cartItems = [];

cartCloseBtn.addEventListener("click", () => {
  cart.style.display = "none";
  addBodyScroll();
});

message.textContent = "choose your boot size";

cartOpenBtn.addEventListener("click", (e) => {
  if (cartOpenBtn.classList.contains("active")) {
    cart.style.display = "flex";
    message.style.display = "none";
  } else {
    message.style.display = "initial";
  }
  const selectedSize = e.target;
  blockBodyScroll();
  addToCart(selectedSize);
});

const blockBodyScroll = () => {
  body.classList.add("hidden");
};
const addBodyScroll = () => {
  body.classList.remove("hidden");
};

const addToCart = () => {
  cartItems = [...cartItems, selectedProduct];
  cartItems.map((item) => {
    cartProductTitle.textContent = item.title;
    cartProductPrice.textContent = item.price;
  });
};
const emailIsValid = () => {
  const email = document.querySelector("#email");
  const emailMessage = document.querySelector("#email__message");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(regex)) {
    emailMessage.textContent = "please enter a valid email";
  }
};

const phoneIsValid = () => {
  const phone = document.querySelector("#phone");
  const phoneMessage = document.querySelector("#phone__message");
  const regex = /^((\+44\s?|0)7([45789]\d{2}|624)\s?\d{3}\s?\d{3})$/;
  if (!phone.value.match(regex)) {
    phoneMessage.textContent = "please enter a valid phone number";
  }
};

const nameIsValid = () => {
  const name = document.querySelector("#name");
  const nameMessage = document.querySelector("#name__message");
  const regex = /^([\w]{2,})+\s+([\w\s]{2,})+$/i;
  if (!name.value.match(regex)) {
    nameMessage.textContent = "please enter your name and surname";
  }
};

const streetIsValid = () => {
  const street = document.querySelector("#street");
  const streetMessage = document.querySelector("#street__message");
  const regex = /^[a-zA-Z0-9\s]+$/i;
  if (!street.value.match(regex)) {
    streetMessage.textContent = "please enter a valid street name";
  }
};

const cityIsValid = () => {
  const city = document.querySelector("#city");
  const cityMessage = document.querySelector("#city__message");
  const regex = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/i;
  if (!city.value.match(regex)) {
    cityMessage.textContent = "please enter a valid city name";
  }
};

const payBtn = document.querySelector(".cart__pay__btn");
payBtn.addEventListener("click", () => {
  nameIsValid();
  streetIsValid();
  cityIsValid();
  phoneIsValid();
  emailIsValid();
});
