//  step 1 set event handler
 document.getElementById('btn-login').addEventListener('click', function(event){
    // step 2 preventdefault (for browser reloading )
    event.preventDefault();
    console.log("btn clicked")

    // step 3 get the phone number and pin number
    const phoneNumber = document.getElementById('phone-number').value ;
    const pinNumber= document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);

    // check the validaty (this is the not stander way)
    if(phoneNumber=== '01322013512' && pinNumber=== '578023'){
        console.log('logged in')
        window.location.href= '/home.html'
    }
    else{
        alert('wrong phone number & pin')
    }

    
   
   
 });