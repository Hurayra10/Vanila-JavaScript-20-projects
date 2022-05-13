var bgNavbar = document.getElementById('bgNavbar');

window.onscroll = function(){
    var scrollNav = window.scrollY;

    if(scrollNav >= 100){
        bgNavbar.classList.add("afterscroll");
        console.log(scrollNav);
    } else{
        bgNavbar.classList.remove("afterscroll");
    }
}


// var bgNavbar = document.getElementById("bgNavbar");

// window.onscroll = function(){
//     var scrollNav =  window.scrollY;

//     if(scrollNav >= 100){
//         bgNavbar.classList.add("after-scroll-navbar");
//     }else{
//         bgNavbar.classList.remove("after-scroll-navbar");
//     }

// }