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









// Overlaps 


function collision($fixed, $moving) {
    var x1 = $fixed.offset().left;
    var y1 = $fixed.offset().top;
    var h1 = $fixed.outerHeight(true);
    var w1 = $fixed.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $moving.offset().left;
    var y2 = $moving.offset().top;
    var h2 = $moving.outerHeight(true);
    var w2 = $moving.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
  
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }
  
  $(window).scroll(function() {
        var all = $("#contact");
        for (var i = 0; i < all.length; i++) {
           if (collision($("header"), all.eq(i))) {
                $( "header" ).addClass( "invert" );
               break; //no need to test the others !
             } else {
                $( "header" ).removeClass( "invert" );
             }
           }
        });






// Buttons

// Returns width of browser viewport


    document.querySelectorAll('.animate_text').forEach(link => {
        link.innerHTML = '<div><span>' + link.textContent.trim().split('').join('</span><span>') + '</span></div>'
        link.querySelectorAll('span').forEach(s => s.innerHTML = s.textContent == ' ' ? '&nbsp;' : s.textContent)
    });


        




// Mobile menu trigger

$(function() {                       
    $(".mobile_menu_trigger").click(function() {  
      $('body').toggleClass("mobile_menu_open");      
    });
  });



// Projects Modal

// Closes Modal
$(function() {                       
    $(".modal button").click(function() {  
        $('.modal').removeClass("open"); 
        $('body').removeClass("lock");  
    });
});

// Opens first project
$(function() {                       
    $(".portfolio_layout:first-of-type a").click(function() {  
        $('.modal:first-of-type').addClass("open");  
        $('body').addClass("lock");      
    });
});

// Opens second project
$(function() {                       
    $(".portfolio_layout:nth-of-type(2) a").click(function() {  
        $('.modal:nth-of-type(2)').addClass("open");  
        $('body').addClass("lock");      
    });
});

// Opens third project
$(function() {                       
    $(".portfolio_layout:nth-of-type(3) a").click(function() {  
        $('.modal:nth-of-type(3)').addClass("open");  
        $('body').addClass("lock");      
    });
});