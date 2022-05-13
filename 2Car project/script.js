
let carImg = document.getElementById('carimg');
let startBtn = document.getElementById('startBtn');
let stoptBtn = document.getElementById('stoptBtn');

let carStart ; //= setInterval(run, 100);

let m = 0;

// function run (){
//     m += 5;
//     carImg.style.marginLeft = m+'px';
// }
startBtn.addEventListener('click', function(){
    carStart = setInterval(run, 100);
        
    function run (){
       if (m===1100){
           clearInterval(carStart);
           m = 0;
       }else{
           m+= 10;
           
           carImg.style.marginLeft = m+'px';
       }
    }
})


stoptBtn.addEventListener('click', function(){
    clearInterval(carStart);
})
