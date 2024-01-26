// Function to make header stick as user scrolls
function sticky-header() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Variables and execution for "sticky-header" function
var header = document.getElementById("nav-bar");
var sticky = header.offsetTop;
window.onscoll = function() {sticky-header()};
