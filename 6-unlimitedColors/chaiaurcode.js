const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 16);
    color += hex[randomNum];
  }
  return color;
};
console.log(randomColor());

let IntervalD;
const startChangingColor = function () {
  if (!IntervalD) {
    IntervalD = setInterval(ChangeColor, 1000);
    function ChangeColor() {
      document.body.style.backgroundColor = randomColor();
    }
  }
};

const stopChangingColor = function () {
  clearInterval(IntervalD);
  IntervalD = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
