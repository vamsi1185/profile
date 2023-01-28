document.querySelector(".moon").addEventListener("click", () => {
  document.querySelector(".moon").style.display = "none";
  document.querySelector(".sun").style.display = "block";
  document.body.style.backgroundColor = "#343a40";
  document.querySelector(".container").style.backgroundColor = "#212529";
  document.querySelector(".name").style.color = "white";
  document.querySelector(".light").style.color = "#fff";
  document.querySelector(".light1").style.color = "#fff";
  document.querySelector(".light2").style.color = "#fff";
});
document.querySelector(".sun").addEventListener("click", () => {
  document.querySelector(".sun").style.display = "none";
  document.querySelector(".moon").style.display = "block";
  document.body.style.backgroundColor = "#f1f5ff";
  document.querySelector(".container").style.backgroundColor = "#fff";
  document.querySelector(".name").style.color = "#212529";
  document.querySelector(".light").style.color = "black";
  document.querySelector(".light1").style.color = "black";
  document.querySelector(".light2").style.color = "black";
});
