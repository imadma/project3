function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.querySelector(".logo")
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
 
  if (x.style.flexDirection === "row"){
    x.style.flexDirection = "column"
}else{
    x.style.flexDirection = "none"
}
 
}