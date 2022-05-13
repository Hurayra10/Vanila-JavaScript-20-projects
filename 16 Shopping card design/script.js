function increament (incDec, prc, itm){
  let count =  document.getElementById(incDec);
  let prize =  document.getElementById(prc);
  let item =  document.getElementById(itm);
  let pr_Amount = document.getElementById('prouctAmount').innerHTML;
  let charge = document.getElementById('charge').innerHTML;
  let total_amount = document.getElementById('total_amount').innerHTML;

  if (count.value >= 5){
      count.value = 5;
      alert('Only five products are allowed !');
  }else{
      count.value ++;
      let result = parseInt(prize.innerHTML) + parseInt(item.innerHTML);
      item.innerHTML = result;
      //For product amount
      let totalproduct = parseInt(prize.innerHTML) + parseInt(pr_Amount);
      document.getElementById('prouctAmount').innerHTML= totalproduct;

    
      //for total afer charge amount
      let newResult = totalproduct + parseInt(charge)
      document.getElementById('total_amount').innerHTML = newResult;

      //kupon
      let couponMainDiv = document.getElementById('couponMainDiv');
       
        if (total_amount >= 400){
            couponMainDiv.style.display ="block";
        }
  }
}

//decreament
function decreament(incDec, prc, itm){
    let count =  document.getElementById(incDec);
    let prize =  document.getElementById(prc);
    let item =  document.getElementById(itm);
    let pr_Amount = document.getElementById('prouctAmount').innerHTML;
    let charge = document.getElementById('charge').innerHTML;
    let total_amount = document.getElementById('total_amount').innerHTML;

    if (count.value <= 0){
        count.value = 0;
        alert('Minimum one product should be selected')
      } else{
          count.value --
          var result =  parseInt(item.innerHTML) - parseInt(prize.innerHTML) ;
          item.innerHTML = result;

           //For product amount
      let totalproduct = parseInt(pr_Amount) - parseInt(prize.innerHTML);
      document.getElementById('prouctAmount').innerHTML= totalproduct;

           //for total afer charge amount
      let newResult = totalproduct + parseInt(charge)
      document.getElementById('total_amount').innerHTML = newResult;
      };
}

let couponMainDiv = document.getElementById('couponMainDiv');
couponMainDiv.style.display ="none";
let applyBtn = document.getElementById('applyBtn');
applyBtn.addEventListener('click', function(){

let couponInput = document.getElementById('couponInput');
let total_amount = document.getElementById('total_amount').innerHTML;
    if(couponInput.value == 'HuRaYRa'){
        let total = parseInt(total_amount) - 50;
        document.getElementById('total_amount').innerHTML = total;
        alert('Congratulation!');
        couponMainDiv.style.display ="none";
     }else{
         alert('Coupon does not match');
     }
 })













