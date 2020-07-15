function validateForm() {  
    // Termék egységára. 
    let pricePerPiece = 1200;   

    // Kiválasztom a mennyiséget és a message mező ár részét.  
    let amountInput = document.querySelector("form#order input[name=amount]");
    let priceField = document.querySelector("form#order .message strong");   

    // Kiolvasom a bevitt mennyiséget és szorzom az egységárral.  
    let amount = parseInt(amountInput.value);  
    let totalAmount = amount * pricePerPiece;   

    // Kiírom az üzenetet, azaz frissítem az árat.  
    priceField.innerHTML = `${totalAmount}`;
}
function calcAmount () {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
    }
    
    
    function showSumPrice(price, amountNumber) {
        let showAmount = document.querySelector("span.show-amount");
        if ( amountNumber > 10 ) {
            alert("Maximum 10 terméket vásárolhat!");
        
        } else if ( amountNumber < 1 ) {
            alert("Minimum 1 terméket vásárolni kell!");
            
        } else {  
            let amount = amountNumber * price;  
            showAmount.innerHTML = amount;
        }
    }