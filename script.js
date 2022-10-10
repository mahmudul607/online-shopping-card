//Common Script
function updateItemNumber(isIncrease, id){
   const itemNumber=document.getElementById(id);
   const itemNumberString=itemNumber.value;
   const previousItemNumber=parseInt(itemNumberString);

   var newItemNumber;
   if(isIncrease===true){
      newItemNumber= previousItemNumber+1;
   }
   else{
      newItemNumber=previousItemNumber-1;
   }
   itemNumber.value=newItemNumber;
   return newItemNumber;

}


// Cart Section Script
function getCurrentAmount(elementId){
   const itemAmount=document.getElementById(elementId);
   const itemAmountString=itemAmount.innerText;
   const currentAmount=parseFloat(itemAmountString);
   return currentAmount;
}

function setValueById(elementId, value){
   const cartTotalElement=document.getElementById(elementId);
   cartTotalElement.innerText=value;
}

function calculateCartTotalAmount(){
   //Calculate Total Cart Amount section
   const currentPhoneTotal=getCurrentAmount('totalPhonePrice');
   const currentCaseTotal=getCurrentAmount('totalCasePrice');

   const cartTotalPrice=currentPhoneTotal+currentCaseTotal;
   setValueById('cartTotalPrice', cartTotalPrice);


   //Calculate Tax Section
   const taxAmountString=(cartTotalPrice*0.1).toFixed(2);
   const taxTotalAmount=parseFloat(taxAmountString);
   setValueById("totalTaxAmount", taxTotalAmount);

   //Calculte InTotal Amount

   const finalAmount=cartTotalPrice+taxTotalAmount;
   setValueById('taotalAmount', finalAmount);
}


// const phonePrice=document.getElementById('totalPhonePrice');
// const phonePriceString=phonePrice.innerText;
// const phonePriceNumber=parseFloat(phonePriceString);
// const currentPhonePrice=phonePriceNumber;

// const casePrice=document.getElementById('totalCasePrice');
// const casePriceString=casePrice.innerText;
// const casePriceNumber=parseFloat(casePriceString);
// const currentCasePrice=casePriceNumber;

// const cartTotalAmount=currentPhonePrice+currentCasePrice;
// const cartTotalAmountNum=document.getElementById('cartTotalPrice').innerText=cartTotalAmount;






///For phone Script

function updateTotalPhonePrice(newItemNumber){
   const phoneTotalPrice=newItemNumber*1219;
   document.getElementById('totalPhonePrice').innerText=phoneTotalPrice;

}
document.getElementById('plusPhoneBtn').addEventListener('click', function(){ 
   const newItemNumber=updateItemNumber(true, "phoneInputField");
   updateTotalPhonePrice(newItemNumber);
   calculateCartTotalAmount();
})

document.getElementById('minusPhoneBtn').addEventListener('click', function(){
   const newItemNumber=updateItemNumber(false, "phoneInputField");
   updateTotalPhonePrice(newItemNumber);
   calculateCartTotalAmount();
})




//For Phone Case Script
function updateTotalCasePrice(newCaseItemNumber){
   const totalCasePrice=newCaseItemNumber*59;
   document.getElementById('totalCasePrice').innerText=totalCasePrice;

}

document.getElementById('plusCaseBtn').addEventListener('click', function(){
   const newCaseItemNumber=updateItemNumber(true, "caseInputField");
   updateTotalCasePrice(newCaseItemNumber);
   calculateCartTotalAmount();
})

document.getElementById('minusCaseBtn').addEventListener('click', function(){
   const newCaseItemNumber=updateItemNumber(false, "caseInputField");
   updateTotalCasePrice(newCaseItemNumber);
   calculateCartTotalAmount();
})


//After check Out 

const checkOutBtn=document.getElementById('checkOutBtn');
checkOutBtn.addEventListener('click', function(){
   const shoppingArea=document.getElementById('shopping-area');
   shoppingArea.style.display='none';
   const thanksMassageArea=document.getElementById('thanks-ms');
   thanksMassageArea.style.display='block';
})

