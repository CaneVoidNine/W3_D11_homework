const changeH1 = function () {
  h1 = document.querySelector("h1");
  h1.innerText = "He changed me!!!";
};
const changeBgrd = function () {
  document.body.style.backgroundColor = "grey";
};

const changeAdress = function () {
  const feet = document.querySelector("p");
  feet.innerText =
    "SGT Miranda McAnderson 6543 N 9th Street APO, AA 33608-1234";
};
const applyClassToLink = function () {
  for (let node of document.querySelectorAll("a")) {
    node.classList.add("big-font");
  }
};

const toggleInvisible = function () {
  for (let image of document.querySelectorAll("img")) {
    image.classList.toggle("hidden");
  }
};
const randomColor = function () {
  const color = randomColorRgb();
  for (let price of document.getElementsByClassName("pricing")) {
    price.style.color = color;
  }
};
const randomColorRgb = function () {
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
};
