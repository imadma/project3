function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.querySelector(".logo")
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}