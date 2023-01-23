const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
let selectedRating = "";

const containerEl = document.getElementById("container");

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();

    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
    <strong>Thank You!</strong>
    <br>
    <br>
    <strong>Feed Back: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support .</p>
    `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
//! EX:- forEach
// let num = [1, 2, 3, 4];

// num.forEach((element, index) => {
//   console.log("index: " + index + "number :" + element);
// });
