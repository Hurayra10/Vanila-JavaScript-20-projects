
submit.addEventListener('click', function(){

    let q4 = document.getElementById('q1').checked;
    let q5 = document.getElementById('q2').checked;
    let q6 = document.getElementById('q3').checked;
    let submit = document.getElementById('submit');


    let count = 0;
    if(q4){
        count++;
    }

    if(q5){
        count++;
    }

    if(q6){
        count++;
    }
alert(`Your score is ${count}`);

    
})





