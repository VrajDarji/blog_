const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

const c = document.querySelector(".containerr");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();
console.log(c);
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
    c.style.color = "gray";
    // bodyE1.style.fontcolor="white";
  } else {
    bodyEl.style.background = "white";
    c.style.color = "black";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
