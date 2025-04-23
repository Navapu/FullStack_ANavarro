var boton = document.getElementById("btn");

var curiosidad = document.getElementById("curiosidad");
curiosidad.style.display = "none";
boton.addEventListener("click", function () {
  // if (curiosidad.style.display === "none") {
  //   curiosidad.style.display = "block";
  // } else {
  //   curiosidad.style.display = "none";
  // }

  curiosidad.style.display = (curiosidad.style.display === "none") ? "block" : "none";
});