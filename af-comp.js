// overlay control

function off() {
    document.getElementById("overlay").style.display = "none";
};

//video control
AFRAME.registerComponent('vidhandler', {
    init: function () {
      this.toggle = false;
      this.vid = document.querySelector("#ld-vid")
      this.vid.pause();
  },
  tick:function(){
     if(this.nftmarkerFound){
       if(!this.toggle){
         this.toggle = true;
         this.vid.play();
      }
    }else if(this.nftmarkerLost){
      this.toggle = false;
      this.vid.pause();
    }
   }
  });