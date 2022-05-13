let image = ['img.jpg','img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg' ];
let my_Img = document.getElementById('myImg');
let count_index = -1;

function myImgChange (){
    count_index ++ ;
    if(count_index >= image.length){
        count_index = 0;
        my_Img.src = image[count_index];
    }
    else{
        my_Img.src = image[count_index];
    };

    setTimeout('myImgChange ()', 1000);

}
window.onload = myImgChange()

