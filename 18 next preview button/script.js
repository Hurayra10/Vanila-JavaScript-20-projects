let image = ['e6.jpg', 'e7.jpg', 'e8.jpg', 'e9.jpg', 'e10.jpg'];
let img = document.getElementById('img');
let imgln = image.length;
let index = 0;


function next (){
    index ++;
    img.src = image[index];

    if(index >= imgln){
      index = 0;
      img.src = image[index];
    }else{
      img.src = image[index];
    } 
}

function prev (){
  index -- ;
  img.src = image[index];
 
  if(index < 0){
    index = imgln -1;
    img.src = image[index];
    
  }else{
    img.src = image[index];
  };
}




// nextBtn.addEventListener(function(){
//     index ++;
//     console.log(index);
// })

// let prevBtn = document.getElementById('prev');
// index = 0;
// prevBtn.addEventListener(function(){

// })



function circle (){

}