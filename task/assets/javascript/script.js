// let name_obj =document.getElementById("name");
// let surname_obj =document.getElementById("surname");
// let age_obj =document.getElementById("age");

let myInputs = document.getElementsByClassName("inputs");
// let myTable=document.getElementById("table");
let myRows = document.querySelector("#table tbody");
// console.log(myRows);
// console.log(myTable.innerHTML);
// console.log(myRows.innerHTML)

let btn_add = document.getElementById("btn-add");
let i=0;

btn_add.addEventListener("click", function () {
    
     //myRows.innerHTML += ""
i++;
   let result ="<tr> <th scope=\"row\">"+i+"</th> ";
    for (let element of myInputs) {
        result+=("<td>"+element.value+"</td> ")


    }
    result+="</tr>";
    
    

     myRows.innerHTML += result;

   
  



})
 console.log(myRows.innerHTML);