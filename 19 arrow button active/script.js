let arrowBtn = document.getElementById('arrowBtn');
console.log(arrowBtn);


window.onscroll = function(){ 
    let scroll = scrollY;
    if(scroll > 200){
        console.log(scroll);
        arrowBtn.classList.add('arrowClass');

    }else{
        arrowBtn.classList.remove('arrowClass');
    }
}









