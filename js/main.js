//  https://github.com/piersrueb/inViewport

const inViewport = (elem) => {
    let allElements = document.getElementsByTagName(elem);
    let windowHeight = window.innerHeight;
    const elems = () => {
        for (let i = 0; i < allElements.length; i++) {  //  loop through the sections
            let viewportOffset = allElements[i].getBoundingClientRect();  //  returns the size of an element and its position relative to the viewport
            let top = viewportOffset.top;  //  get the offset top
            if(top < windowHeight){  //  if the top offset is less than the window height
                allElements[i].classList.add('in_viewport');  //  add the class
            } else{
                //allElements[i].classList.remove('in_viewport');  //  remove the class
            }
        }
    }
    elems();
    window.addEventListener('scroll', elems);
}

inViewport('figure');  //  run the function on all section elements













// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("main_header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}