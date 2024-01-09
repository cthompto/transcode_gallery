// overlay control

function off() {
  document.getElementById("overlay").style.display = "none";
  var vid = document.querySelector("#ld-vid");

  var delayInMilliseconds = 2500; //1 second
  setTimeout(function () {
    vid.play();
  }, delayInMilliseconds);
}
