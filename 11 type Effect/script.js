let title = document.querySelector('h1');
let text = "Learn With Hurayra";
console.log(text);

// window.onload(function(){
//     
// })
var index = 0;
setInterval(fun , 500);

function fun(){
    title.innerText = text.slice(0, index ++);
    if(index > text.length){
        index = 0;
    }
}