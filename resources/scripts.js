// Function to make header stick as user scrolls
function sticky-header() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Variables and execution for "sticky-header" function
const header = document.getElementById("nav-bar");
const sticky = header.offsetTop;
window.onscroll = function() {sticky-header()};
