// noakhali card
document.getElementById("noakhali-button").addEventListener("click", function (event) {
    event.preventDefault;

    document.getElementById("noakhali-output").innerText = cardCalculation("noakhali-input", "noakhali-output", "Noakhali-donation");

    document.getElementById("current-amount").innerText = leftMoney("current-amount", "noakhali-input");

   // transactionHistory("noakhali-input" ,"Noakhali-donation");

})

// feni card
// document.getElementById("feni-button").addEventListener("click", function (event) {
//     event.preventDefault;

//     document.getElementById("feni-output").innerText = cardCalculation("feni-input", "feni-output");

//     document.getElementById("current-amount").innerText = leftMoney("current-amount", "feni-input");

// })

// trying new way of calling function on addEventListener
document.getElementById("feni-button").onclick = function (event) {
    event.preventDefault;

    document.getElementById("feni-output").innerText = cardCalculation("feni-input", "feni-output", "feni-donation");

    document.getElementById("current-amount").innerText = leftMoney("current-amount", "feni-input");
    
   // transactionHistory("feni-input" ,"feni-donation");
}

// quota card
document.getElementById("quota-button").addEventListener("click", function (event) {
    event.preventDefault;

    document.getElementById("quota-output").innerText = cardCalculation("quota-input", "quota-output", "quota-donation");

    document.getElementById("current-amount").innerText = leftMoney("current-amount", "quota-input");

 //   transactionHistory("quota-input" ,"quota-donation");
})

// donation button 
document.getElementById("donation-button").addEventListener("click", function () {
    
    document.getElementById("donation-button").classList.remove("button-white");
    document.getElementById("donation-button").classList.add("button-green");

    document.getElementById("history-button").classList.remove("button-green");
    document.getElementById("history-button").classList.add("button-white");
    
    showSection("card-section");
})

// history button
document.getElementById("history-button").addEventListener("click", function () {

    document.getElementById("history-button").classList.remove("button-white");
    document.getElementById("history-button").classList.add("button-green");

    document.getElementById("donation-button").classList.remove("button-green");
    document.getElementById("donation-button").classList.add("button-white");
    
    showSection("history-section");

})

