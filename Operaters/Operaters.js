const actP = document.querySelector("#act-p");
const sellP = document.querySelector("#sell-p");
const discPer = document.querySelector(".disc-per");
const calcBtn = document.querySelector(".calc-btn");

calcBtn.addEventListener("click", () => {
  let actPrice = actP.value;
  let sellPrice = sellP.value;
  if (!actPrice && !sellPrice) {
    return alert("Please Enter a Price");
  }
  let discPercent = ((actPrice - sellPrice) / actPrice) * 100;
  discPer.textContent = `${discPercent.toFixed(0)}%`;
});

// calculater

const num = document.querySelectorAll(".num");
const oper = document.querySelectorAll(".oper");
const viewValue = document.querySelector(".view-value");
const equalbtn = document.querySelector(".equal");
const clear = document.querySelector(".clear");

num.forEach((n) => {
  n.addEventListener("click", () => {
    viewValue.value += n.textContent;
  });
});
oper.forEach((n) => {
  n.addEventListener("click", () => {
    viewValue.value += n.textContent;
  });
});

equalbtn.addEventListener("click", () => {
  if (!viewValue.value) {
    return alert("Please Enter any number");
  }
  let totalValue = eval(viewValue.value);
  viewValue.value = totalValue;
});

clear.addEventListener("click", () => {
  viewValue.value = "";
});
