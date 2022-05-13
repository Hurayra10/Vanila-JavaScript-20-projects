let title = document.getElementById('title');
window.addEventListener('online', set);//set hocce function name
window.addEventListener('offline', set); //set hocce function name

function set (){
    if(navigator.onLine){
        title.innerText = 'Congrates! You are Online';
        title.style.color = 'green';
    }else{
        title.innerText = 'Ops! You are Offline';
        title.style.color = 'red';
    }
}

set();