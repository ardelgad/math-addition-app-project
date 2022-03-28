$(document).ready(function () {
    console.log("DOM cargado! Implementa tu solución a partir de esta línea.");

});

let num1 = Math.floor(Math.random() * 11);
let num2 = Math.floor(Math.random() * 11);

let num1text = $('#primary-number');
num1text.html(`<p>${num1}</p>`);

let num2text = $('#secondary-number');
num2text.html(`<p>${num2}</p>`);

let total = num1 + num2;
console.log(total);

$("#btn").click(function checkSolution() {
    let guess = $("#guess").val()
    guess = Number(guess);
    console.log(guess);

    if(total === guess){
        alert("Correct")
        window.location.reload()
    }

    else{
        alert("Wrong")
    }
})