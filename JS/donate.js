// cards calculation
function cardCalculation(inputID, outputID){
    let  inputMoney = parseInt(document.getElementById(inputID).value);
    let currentAmount = parseInt(document.getElementById("current-amount").innerText);
    let outputMoney = parseInt(document.getElementById(outputID).innerText);


    if(inputMoney <= currentAmount && inputMoney != 0){
        outputMoney += inputMoney;

        return outputMoney;
    }
    else{
        alert("invalid input");
    }
}

// left amount calculation
function leftMoney(currentMoneyID, inputID){
    let  inputMoney = parseInt(document.getElementById(inputID).value);
    let currentAmount = parseInt(document.getElementById(currentMoneyID).innerText);

    if(inputMoney <= currentAmount && inputMoney != 0){
        currentAmount -= inputMoney;
        return currentAmount;
    }
    else{
        return currentAmount;
    }
}