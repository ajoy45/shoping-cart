function casePhone(inputId,price,isIncrease){
    const caseInput = document.getElementById(inputId);
    let caseNmber = caseInput.value;
    
    if(isIncrease ==true){
        caseNmber = parseInt(caseNmber)+1;
    }
    else if( caseInput.value>0 && isIncrease==false){
        caseNmber = parseInt(caseNmber)-1;

    }
    caseInput.value=caseNmber;
    if(price==59){
        const caseTotal = document.getElementById('case-total');
        caseTotal.innerText = caseNmber*price;
        
    }
    else if(price==1219){
        const phoneTotl = document.getElementById('phone-total');
        phoneTotl.innerText = caseNmber*price;
        
        
    }
     
    let subtotal = document.getElementById('subtotal');
    const phoneTotal = gettotal('phone-number')*1219;
    const caseTotal = gettotal('case-number')*59;
    subtotal.innerText =  phoneTotal+caseTotal;
     subtotal = parseInt(subtotal.innerText);
      let tax = document.getElementById('tax');
     tax.innerText = subtotal*.1;
       tax = parseInt(tax.innerText);
     const total = document.getElementById('total');
     total.innerText = subtotal+tax;
      
      
}
function gettotal(productNumbr){
    const phoneNumber = document.getElementById(productNumbr).value;
    const phoneNumberValue = parseInt(phoneNumber);
    
    return phoneNumberValue;
}

// caseing increase decrease 
document.getElementById('case-plus').addEventListener('click',function(){
    
    // const caseInput = document.getElementById('case-number');
    // const casenumberText = caseInput.value;
    // // const caseNumberValue = parseInt(casenumberText);
    //   caseInput.value = parseInt(casenumberText) +1;

    // const casenumberText = caseNumber.value;
    casePhone('case-number',59,true);
    
   
    
});

document.getElementById('case-minus').addEventListener('click',function(){
    
    // const caseInput = document.getElementById('case-number');
    // const casenumberText = caseInput.value;
    // caseInput.value =parseInt(casenumberText)-1;
    casePhone('case-number',59,false);
    
   
});
// phone increase decrease
document.getElementById('phone-plus').addEventListener('click',function(){
    casePhone('phone-number',1219,true);
    
    
});
document.getElementById('phone-minus').addEventListener('click',function(){
    casePhone('phone-number',1219,false);
    
    
});
