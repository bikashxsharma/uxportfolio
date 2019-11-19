window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
     
     
     if (currentScrollPos > 1400) { // show div after 1400px
       
       document.getElementById("side-fixed-nav").classList.remove("class-display-none");
       
     } else {
       document.getElementById("side-fixed-nav").classList.add("class-display-none");
       
     }
     console.log(currentScrollPos);
   }