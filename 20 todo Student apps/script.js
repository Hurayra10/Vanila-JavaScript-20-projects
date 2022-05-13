let btn = document.getElementById('btn');

let name = document.getElementById('name');
let id = document.getElementById('id');
let dept = document.getElementById('dept');
let cgpa = document.getElementById('cgpa');

btn.addEventListener('click', function(pera){
    pera.preventDefault();
    // let text = document.createTextNode(name);
    
    if(name.value == ''){
        alert("Plese fillup with your name");
    }else if (id.value == ''){
            alert("Plese fillup with your id");
    }else if(dept.value == ''){
        alert("Plese fillup with your dept");
    }else if(cgpa.value == ''){
            alert("Plese fillup with your cgpa");
    }else{
         let tbody = document.getElementById('tbody');

         //for name
         let tr = document.createElement('tr');
         let td = document.createElement('td');
         td.innerHTML = name.value;
         tr.appendChild(td);

            //for id
            let td2 = document.createElement('td');
            td2.innerHTML = id.value;
            tr.appendChild(td2);

                    //for dept
            let td3 = document.createElement('td');
            td3.innerHTML = dept.value;
            tr.appendChild(td3);

             //for cgpa
            let td4 = document.createElement('td');
             td4.innerHTML = cgpa.value;
             tr.appendChild(td4);

         tbody.appendChild(tr);
       
     }
    })
