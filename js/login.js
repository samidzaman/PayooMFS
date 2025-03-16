//  step 1 set event handler
 document.getElementById('btn-login').addEventListener('click', function(event){
    // step 2 preventdefault (for browser reloading )
    event.preventDefault();
    console.log("btn clicked")

    // step 3 get the phone number 
    const phoneNumber = document.getElementById('phone-number').value ;
    console.log(phoneNumber)
 });