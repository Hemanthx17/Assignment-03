// Greeting function
document.getElementById("greetBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const header = document.getElementById("greeting");

  if (name !== "") {
    header.textContent = "Hello, " + name;
  } else {
    header.textContent = "Hello";
  }
});

// Box color change using DOM
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener("click", function () {
    const color = this.getAttribute("data-color");
    this.style.backgroundColor = color;
    this.style.color = "white";
  });
});
