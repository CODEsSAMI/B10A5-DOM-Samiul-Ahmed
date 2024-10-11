// console.log(document.getElementById("current-amount").innerText);

// console.log(document.getElementById("noakhali-output").innerText);
// console.log(document.getElementById("noakhali-input").value);
// console.log(document.getElementById("noakhali-button").innerText);

// console.log(document.getElementById("feni-output").innerText);
// console.log(document.getElementById("feni-input").innerText);
// console.log(document.getElementById("feni-button").innerText);

// console.log(document.getElementById("quota-output").innerText);
// console.log(document.getElementById("quota-input").innerText);
// console.log(document.getElementById("quota-button").innerText);

// console.log(calculation("current-amount"));


// actual work done here

// noakhali card
document.getElementById("noakhali-button").addEventListener("click", function (event){
    event.preventDefault;

    document.getElementById("noakhali-output").innerText = cardCalculation("noakhali-input", "noakhali-output");

    document.getElementById("current-amount").innerText = leftMoney("current-amount", "noakhali-input");
    
})

// feni card
document.getElementById("feni-button").addEventListener("click", function (event){
    event.preventDefault;

    document.getElementById("feni-output").innerText = cardCalculation("feni-input", "feni-output");

    document.getElementById("current-amount").innerText = leftMoney("current-amount", "feni-input");
    
})

// quota card
document.getElementById("quota-button").addEventListener("click", function (event){
    event.preventDefault;

    document.getElementById("quota-output").innerText = cardCalculation("quota-input", "quota-output");

    document.getElementById("current-amount").innerText = leftMoney("current-amount", "quota-input");
    
})
