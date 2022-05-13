let input1 = document.getElementById('input-1');
let input2 = document.getElementById('input-2');


input1.addEventListener('input', function(){
    let bangla = input1.value;
    if(bangla >100 || 0 > bangla){
        input1.style.background = 'red';
    }else{
        input1.style.background = 'none'
    };
})

input2.addEventListener('input', function(){
    let english = input2.value;
    if(english >100 || 0 > english){
        input2.style.background = 'red';
    }else{
        input2.style.background = 'none'
    }
})





