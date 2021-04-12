let date_div= document.getElementById("date");
let description_div= document.getElementById("description");
let amout = document.getElementById("amount");
let form_div = document.getElementById("form");
let table_div = document.getElementById("table");
let totalAmount= 0;
let lineCounter= 0;

// This function gets the value of the input data once the submit button is clicked
function get_Input_Values(){
    console.log("We hear the button.");
    let date=document.getElementById("date").value;
    let description=document.getElementById("description").value;
    let amount=document.getElementById("amount").value;
    let amountNumber = parseFloat(amount).toFixed(2);
    console.log(date);
    console.log(description);
    console.log(amount);
    totalAmount= (((totalAmount * 100)+ (amountNumber* 100))/100).toFixed(2);
    console.log(totalAmount)
    // this part adds a new row in the table with the curent enterd value. 
    let i ;
    for (i = 0 ; i < 4; i++) {
        lineCounter= lineCounter + 1;
        const row = table_div.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3)
        const cell5 = row.insertCell(4);
        cell1.innerHTML = lineCounter;
        cell2.innerHTML = date;
        cell3.innerHTML = description;
        cell4.innerHTML = `$ ${amountNumber}`;
        cell5.innerHTML = `$ ${totalAmount}`;
        return
    }

        
    }
// This is changing the color of wevery other line to white. 
  function isOdd(lineCounter) {return lineCounter %2;
    console.log("1 is " + isOdd(1));
    console.log("2 is " + isOdd(2));
    console.log("3 is " + isOdd(3));
    console.log("4 is " + isOdd(4));


  }





    // amount.innerHTML= ' '
    // date.innerHTML= ' '
    // description.innerHTML= ' '









 //function(){

//     const body =document.getElementById("body")[0];
//     const table = document.createElement("table");
//     const table_body = document.createElement("tbody");

//     for (let i = 0; i < 1; i++){
//         const row = document.createElement("tr");
  
//   for (let j = 0; j < 4; j++) {
//     const cell = document.createElement('td');
//     let cellText = document.createTextNode( i + " "+ j);
//     cell.appendChild(cellText);
//     row>appendChild(cell);
// }
//     tblBody.appendChild(row);

// }

//     tbl.appendChild(tblBody);
//     body.appendChild(tbl);
//     tbl.setAttribute("border", "2");
// 
