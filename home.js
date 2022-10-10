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
    node.classList.add("");
  }
  for (let i = 0; i < document.querySelectorAll("a").length; i++) {
    document.querySelectorAll("a").item(i).classList.add("");
  }
};
