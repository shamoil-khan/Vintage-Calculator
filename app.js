let string = " ";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      string = " ";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "OFF") {
      string = " ";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});

const on = document.querySelector(".on");
const off = document.querySelector(".off");
const box = document.querySelector(".container");

on.addEventListener("click", () => {
  box.classList.add("active");
});

off.addEventListener("click", () => {
  box.classList.remove("active");
});

const lOn = document.querySelector(".l-on");
const bx = document.querySelector(".bx-sun");
const bxs = document.querySelector(".bxs-sun");

bx.addEventListener("click", () => {
  box.classList.add("l-o");
});

bx.addEventListener("click", () => {
  lOn.classList.add("l-active");
});

bxs.addEventListener("click", () => {
  lOn.classList.remove("l-active");
});

bxs.addEventListener("click", () => {
  box.classList.remove("l-o");
});
