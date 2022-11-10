let myInputs = document.getElementsByClassName("inputs");
let myRows = document.querySelector("#table tbody");
let btn_add = document.getElementById("btn-add");
let i=0;

btn_add.addEventListener("click", function () {
    i++;
    let result ="<tr> <th scope=\"row\">"+i+"</th> ";
    for (let element of myInputs) {
        result+=("<td>"+element.value+"</td> ")


    }
    result+="</tr>";
    
    

     myRows.innerHTML += result;

   
  



})
 console.log(myRows.innerHTML);
