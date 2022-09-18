// to show the search div
document.getElementById("icon").onclick = function () {
    document.getElementById("sear").classList.remove("remove");
    document.getElementById("sear").classList.add("seen");
}
// to hide the search div
document.getElementById("close").onclick = function () {
    document.getElementById("sear").classList.remove("seen");
    document.getElementById("sear").classList.add("remove");
}

// go top button
 //Get the button:
 const mybutton = document.getElementById("myBtn");

 // When the user scrolls down 400px from the top of the document, show the button
 window.onscroll = function() {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop >= 400 || document.documentElement.scrollTop > 400) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
     document.body.scrollTop = 0; // For Safari
     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }