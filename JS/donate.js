document.getElementById("noakhali-button").addEventListener("click", function (event) {
    event.preventDefault;
    console.log("noakhali got help")

    let noakhaliInput = parseInt(document.getElementById("noakhali-input").value);
    console.log("noakhali input:", noakhaliInput) ;

    let currentAmount = parseInt(document.getElementById("current-amount").innerText);
    console.log("current amount", currentAmount) ;


    if(noakhaliInput <= currentAmount && noakhaliInput!=0){
        let noakhaliOutput = parseInt(document.getElementById("noakhali-output").innerText) + noakhaliInput;
        console.log("noakhali got: ", noakhaliOutput)

        document.getElementById("noakhali-output").innerText = noakhaliOutput;

        document.getElementById("current-amount").innerText = currentAmount - noakhaliInput;


    }
    else{
        alert("invalid input")
    }
})

// cards calculation
function calculation(id){

    const money = parseInt(document.getElementById(id).innerText);
    return money;
}

// left amount calculation