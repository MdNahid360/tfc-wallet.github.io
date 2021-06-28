let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
   toggelPageNone("login-area");
   togglePageBlock("user");
   togglePageBlock("start");

});

let startBox = document.getElementById("go");
startBox.addEventListener("click", function(){
      
   toggelPageNone('start')
   togglePageBlock("wallet_area");
  
        
})


   function togglePageBlock(block){
         

      const blockSection = document.getElementById(block);
      blockSection.style.display = "block";
   }

   function toggelPageNone(none){
      const loginArea = document.getElementById(none);
      loginArea.style.display = "none";
   }

// deposit section

   let depositBtn = document.getElementById("deposit");
   depositBtn.addEventListener("click", function(){
       const depositNumber = getInputNumber("depositAmount");
      updateMony("currentDeposit", depositNumber);
      updateMony("currentBalance", depositNumber)
 
      document.getElementById("depositAmount").value = "";
})

// withdraw section

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber =  getInputNumber("widrawAmount");
    updateMony("currentWitdraw", withdrawNumber);
    updateMony("currentBalance", -1 *  withdrawNumber);
   


    document.getElementById("widrawAmount").value = "";

   
})



function getInputNumber(id){
   const amount = document.getElementById(id).value;
   const withdrawNumber = parseFloat(amount)
   return withdrawNumber;
}


function updateMony(id, depositNumber){

   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const total  = depositNumber + currentNumber;
   document.getElementById(id).innerText = total;

}
 


