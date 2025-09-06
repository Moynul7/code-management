// Utility functions

const tableBody = document.querySelector('#table tbody');
const currentBalance = document.getElementById('balance-number');
const cashInBtn = document.getElementById('cash-in-btn');
//cash in button event handler
cashInBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const inputAmount = getInputValueById('input-cash-in-field');
    const inputPinNumber = getInputValueById('input-pin-number');
    console.log(inputAmount, inputPinNumber);

    // check valid number
    if(isNaN(inputAmount) || inputAmount <= 0){
        alert('Please provide a valid Number');
        return;
    }

    //check pin number
    if(inputPinNumber !== 1234){
        alert("Invalid PIN number!");
        return;
    }
    else{
        alert("Money Added successful!");
    }
    //check pin number
    if(inputPinNumber === 1234){
        const balance = getInputTextById('balance-number');
        const newBalance = balance + inputAmount;
        currentBalance.innerText = newBalance;
        //cash in status
        const preBalance = getInputTextById('cash-in-status');
        document.getElementById('cash-in-status').innerText = preBalance + inputAmount;

        // Add a new row to the table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>Cash In</td>
            <td>${inputAmount}</td>
            <td>${new Date().toLocaleString()}</td>
        `;
        tableBody.appendChild(newRow);
        // clear input field
        document.getElementById('input-cash-in-field').value = '';
        document.getElementById('input-pin-number').value = '';
    }
});

//cash out button event handler

const cashOutBtn = document.getElementById('cash-out-btn');
cashOutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const inputAmount = getInputValueById('cash-out-input');
    const inputPinNumber = getInputValueById('cash-out-pin');
    const balance = getInputTextById('balance-number');

    // check valid number
    if(isNaN(inputAmount) || inputAmount <= 0){
        alert('Please provide a valid Number');
        return;
    }
    //check pin number
    if(inputPinNumber !== 1234){
        alert("Invalid PIN number!");
        return;
    }
    // Check if sufficient balance is available
    if (inputAmount > balance) {
        alert("Insufficient balance!");
        return;
    }
    else{
        alert("Transaction successful!");
    }
    if(inputPinNumber === 1234){
        const newBalance = balance - inputAmount;
        currentBalance.innerText = newBalance;
        //cash out status
        const preBalance = getInputTextById('cash-out-status');
        document.getElementById('cash-out-status').innerText = preBalance + inputAmount;

        // Add a new row to the table
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>Cash Out</td>
                <td>${inputAmount}</td>
                <td>${new Date().toLocaleString()}</td>
            `;
            tableBody.appendChild(newRow);
        // clear input field
        document.getElementById('cash-out-input').value = '';
        document.getElementById('cash-out-pin').value = '';
    }
});

// 
const cashOutBtnTwo = document.getElementById('cash-Out-btn');

cashOutBtnTwo.addEventListener('click', function () {
    const cashOutSection = document.getElementById('cash-out-section');
    cashOutSection.classList.remove('hide');

    // hide cash in section
    const cashInSection = document.getElementById('cash-in-section');
    cashInSection.classList.add('hide');
});
//
const cashInBtnTop = document.getElementById('cash-In-top');
cashInBtnTop.addEventListener('click', function () {
    const cashInSection = document.getElementById('cash-in-section');
    cashInSection.classList.remove('hide');

    // hide cash out section
    const cashOutSection = document.getElementById('cash-out-section');
    cashOutSection.classList.add('hide');
});

//


