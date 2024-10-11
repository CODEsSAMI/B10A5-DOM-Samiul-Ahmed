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

// donation button 
document.getElementById("donation-button").addEventListener("click", function (){
    showSection("card-section");
})

// history button
document.getElementById("history-button").addEventListener("click", function (){
    showSection("history-section");
})

