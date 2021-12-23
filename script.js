let p = document.getElementById("fact");
let button = document.getElementsByClassName("button")[0];

button.addEventListener("click", () => {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      p.innerHTML = "<p>" + data.fact + "</p>";
    });
});
