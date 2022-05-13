let PhnNumber = document.getElementById('pNum');

// function pNumber (num){
//     if(value > )
// }
PhnNumber.addEventListener('input', function(){
    if(PhnNumber.value.length > 11 ||  PhnNumber.value.length < 11 ){
        PhnNumber.style.color = 'red';
    }else{
        PhnNumber.style.color = 'black';
    }

})



