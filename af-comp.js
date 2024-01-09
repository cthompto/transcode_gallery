// overlay control

function off() {
    document.getElementById("overlay").style.display = "none";
};
// loading function
document.addEventListener('DOMContentLoaded', function() {
var assets = document.querySelector('a-scene');
var loading = document.querySelector('#loading');

// assets.addEventListener('loaded', function (e) {
//     loading.style.display = 'none';
// });

});

// video control

AFRAME.registerComponent('vidhandler', {
    init: function () {
      this.toggle = false;
      this.vid = document.querySelector("#ld-vid")
      this.vid.pause();
  },
  tick:function(){
     if(markerFound){
       if(!this.toggle){
         this.toggle = true;
         this.vid.play();
      }
    }else if(markerLost){
      this.toggle = false;
      this.vid.pause();
    }
   }
  });