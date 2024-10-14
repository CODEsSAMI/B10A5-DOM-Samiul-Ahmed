// cards calculation
function cardCalculation(inputID, outputID) {
    let inputMoney = parseInt(document.getElementById(inputID).value);

    let currentAmount = parseInt(document.getElementById("current-amount").innerText);

    let outputMoney = parseInt(document.getElementById(outputID).innerText);

    if (inputMoney <= currentAmount && inputMoney != 0) {
        outputMoney += inputMoney;

        return outputMoney;
    }
    else {
        alert("invalid input");
    }
}

// left amount calculation
function leftMoney(currentMoneyID, inputID) {
    let inputMoney = parseInt(document.getElementById(inputID).value);

    let currentAmount = parseInt(document.getElementById(currentMoneyID).innerText);

    if (inputMoney <= currentAmount && inputMoney != 0) {
        currentAmount -= inputMoney;
        return currentAmount;
    }
    else {
        return currentAmount;
    }
}

// section view
function showSection(sectionID) {
    document.getElementById("card-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");

    document.getElementById(sectionID).classList.remove("hidden");
}

// transaction history
function transactionHistory(cardAmount, cardName) {
    let input = document.getElementById(cardAmount).value;

    let cardID = document.getElementById(cardName).innerText;

    if (input > 0) {
        const div = document.createElement("div");

        div.classList.add("border-2", "rounded-xl", "p-4", "w-[100%]");

        div.innerHTML = `<p class= "font-bold"> ${input} Taka is donated for ${cardID} </p>
    <p> Date: ${new Date().toLocaleString()} </p>
    `;

        document.getElementById("history-lists").appendChild(div);

    }

}