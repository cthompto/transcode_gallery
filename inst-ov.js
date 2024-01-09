/* global AFRAME */

function off() {
    document.getElementById("overlay").style.display = "none";
};

// loading function

document.addEventListener('DOMContentLoaded', function() {
var assets = document.querySelector('a-scene');
var loading = document.querySelector('#loading');

  

assets.addEventListener('loaded', function (e) {
    
    loading.style.display = 'none';
   
    
});

});