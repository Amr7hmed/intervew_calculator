const send = document.getElementById("send"),
inputone = document.getElementById("valueone"),
inputtwo = document.getElementById("valuetwo"),
multiplying = document.getElementById("multiplying"),
adding = document.getElementById("adding"),
subtracting = document.getElementById("subtracting"),
dividtng = document.getElementById("dividtng");

send.onclick = function(){
console.log(parseInt(inputone.value))
multiplying.innerHTML= parseInt(inputone.value) * parseInt(inputtwo.value);
adding.innerHTML= parseInt(inputone.value) + parseInt(inputtwo.value);
subtracting.innerHTML= parseInt(inputone.value) - parseInt(inputtwo.value);
dividtng.innerHTML= parseInt(inputone.value) / parseInt(inputtwo.value);
}