let togglebtn = document.getElementById('toggle-btn');
let sidebar = document.getElementById('sidebar');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');

togglebtn.addEventListener('click', function(){
    sidebar.classList.toggle("sidebar");
    sidebar.classList.toggle("sidebarClose");
    text1.classList.toggle("open");
    text2.classList.toggle("open");
    text3.classList.toggle("open");
    text4.classList.toggle("open");
    text5.classList.toggle("open");
})