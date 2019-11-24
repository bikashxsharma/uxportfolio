window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
     
     
     if (currentScrollPos > 1000) { // show div after 
       
       document.getElementById("side-fixed-nav").classList.remove("class-display-none");
       
     } else {
       document.getElementById("side-fixed-nav").classList.add("class-display-none");
       
     }

   }