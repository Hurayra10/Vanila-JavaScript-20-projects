let add = document.getElementById('add');

let olItem = document.getElementById('olItem');


add.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let text = document.createTextNode(input);
    let newItem = document.createElement('li');
    newItem.appendChild(text);
    olItem.appendChild(newItem);
})
