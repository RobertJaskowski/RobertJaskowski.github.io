document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("footerScrollUpToTop").style.display = "none";

})

window.onscroll = function() {scrollFunction()};

document.getElementById("footerScrollUpToTop").addEventListener("click", topFunction)
document.getElementById("scrollUpButton").addEventListener("click", topFunction)

function scrollFunction() {


    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      document.getElementById("scrollUpButton").style.display = "none";
    }else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("footerScrollUpToTop").style.display = "block";
        document.getElementById("scrollUpButton").style.display = "block";
        document.getElementById("header").classList.add("header-shadow");
    } else {
        document.getElementById("scrollUpButton").style.display = "none";
        document.getElementById("header").classList.remove("header-shadow");
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


}
