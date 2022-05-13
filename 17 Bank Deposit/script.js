let subBtn = document.getElementById('subBtn');
let mainBal = document.getElementById('mainBal');//2nd pages work
let dipoAndwithdraw = document.getElementById('dipoAndwithdraw');
mainBal.style.display = 'none';
dipoAndwithdraw.style.display = 'none';

subBtn.addEventListener('click', function(){
    let rootForm = document.getElementById('rootForm');
    let accNo = document.getElementById('accNo').value;
    let pass = document.getElementById('pass').value;


    // login buttons are required here...

    if(accNo == ''){
        alert('Account Number is requires!');
    }
    else if(pass == ''){
        alert('Password Number is requires!');
    }else{
        rootForm.style.display = 'none';
        mainBal.style.display = 'block';
        dipoAndwithdraw.style.display = 'block';
    }

})
//------------deposit section is started here--------------------------------------------------
let depositBtn = document.getElementById('depositBtn');

depositBtn.addEventListener('click', function(){
    let depositInput = document.getElementById('depositInput').value;
    let depositNewInput = parseFloat(depositInput);//dopositInput ke floating number kore nilam

    let totalDeposit = document.getElementById('totalDeposit').innerText;
    let totalNewDeposit = parseFloat(totalDeposit);

    let finalDeposit = depositNewInput + totalNewDeposit;
    document.getElementById('totalDeposit').innerText = finalDeposit.toFixed(2);
    console.log('totalDeposit');


//main balance change
let totalBalance = document.getElementById('totalBalance').innerHTML;
let totalNewBalance = parseFloat(totalBalance);

let totalFinalBalance = depositNewInput + totalNewBalance;
document.getElementById('totalBalance').innerHTML = totalFinalBalance.toFixed(2); //jokhon value update kora hoi, tkn (document.getElementById('totalBalance').innerHTML) ai sob tukui likhte hoi..otherwise kaj kre na..

})


//------------withdraw section is started here--------------------------------------------------

let withdrawBtn = document.getElementById('withdrawBtn');

withdrawBtn.addEventListener('click', function(){
    let withdrawInput = document.getElementById('withdrawInput').value;
    let newWithdrawInput = parseFloat(withdrawInput);


    let totalWithdraw = document.getElementById('totalWithdraw').innerHTML;
    let newTotalWithdraw = parseFloat(totalWithdraw);


    let finalWithdraw = newWithdrawInput + newTotalWithdraw;
    document.getElementById('totalWithdraw').innerHTML= finalWithdraw.toFixed(2);

    // main balance change after withdraw

    let totalBalance = document.getElementById('totalBalance').innerHTML;
    let totalNewBalance = parseFloat(totalBalance);

    let totalFinalBalance = totalNewBalance - newWithdrawInput;
    document.getElementById('totalBalance').innerHTML = totalFinalBalance.toFixed(2); 
})













