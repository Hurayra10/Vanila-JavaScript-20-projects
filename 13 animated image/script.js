let imgArray = ['e1.jpg', 'e2.jpg', 'e3.jpg', 'e4.jpg', 'e5.jpg', 'e6.jpg', 'e7.jpg', 'e8.jpg', 'e9.jpg', 'e10.jpg'];
let image = document.getElementById('image');
let index = 0;

setInterval (animation, 1000);

function animation (){
    index ++;

    if(index > imgArray.length){
        index = 0;
        image.src = imgArray[index];
    }else{
        image.src = imgArray[index];
    }


}








