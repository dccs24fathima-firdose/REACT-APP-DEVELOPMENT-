let transactions=[];



function addTransaction(){


let data={

title:
document.getElementById("title").value,

amount:
Number(document.getElementById("amount").value),

type:
document.getElementById("type").value,

category:
document.getElementById("category").value

};



transactions.push(data);


update();


}




function update(){


let income=0;
let expense=0;


let table=document.getElementById("table");

table.innerHTML="";


let category={};



transactions.forEach(t=>{


if(t.type=="income")
income+=t.amount;

else
expense+=t.amount;



table.innerHTML+=`

<tr>

<td>${t.title}</td>

<td>₹${t.amount}</td>

<td>${t.category}</td>

</tr>

`;



if(t.type=="expense"){


category[t.category]=

(category[t.category]||0)+t.amount;


}



});



document.getElementById("income")
.innerHTML="₹"+income;


document.getElementById("expense")
.innerHTML="₹"+expense;


document.getElementById("balance")
.innerHTML="₹"+(income-expense);



showCategory(category);


}





function showCategory(category){


let box=document.getElementById("categoryBox");

box.innerHTML="";


for(let c in category){


let percent=

(category[c]/Math.max(...Object.values(category)))*100;



box.innerHTML+=`

<h4>${c} - ₹${category[c]}</h4>


<div class="progress">

<div class="fill"
style="width:${percent}%">

</div>

</div>


<br>

`;

}



}