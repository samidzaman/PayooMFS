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
});