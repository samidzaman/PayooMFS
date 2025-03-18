//add mony to the amount

//step 1 add event handler in add mony button
document.getElementById('add-mony-btn').addEventListener('click', function (event) {
    // event by defualt for reloading form
    event.preventDefault();

    //step -2 get the input value of amount 
    const addAmount = document.getElementById('input-amount').value;
    console.log(addAmount);

    //step -3 get the input value of pin 
    const pinInput = document.getElementById('input-pin').value;
    console.log(pinInput);

    //step 4 verify the correct pin (this is not the right way)

    if (pinInput === '578023') {
        const mainBlance = document.getElementById('main-blance').innerText;

        //step - 5 addmony with the main blance 
        const addMonyNumber = parseFloat(addAmount); //convert string formate to intiger 
        const accountBlance = parseFloat(mainBlance);
        const UpdateBlance = accountBlance + addMonyNumber;
        console.log(UpdateBlance);
        //step 6 set the new blance in the dom/ui
        document.getElementById('main-blance').innerText = UpdateBlance;
    }
    else {
        alert('wrong pin ');
    }

});