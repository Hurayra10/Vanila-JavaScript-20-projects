let modal = document.getElementById('modal');
let  close = document.getElementById('closebtn');
let  open = document.getElementById('openbtn');


open.addEventListener('click', function(){
    modal.classList.add('show');
});

close.addEventListener('click', function(){
    modal.classList.remove('show');
})