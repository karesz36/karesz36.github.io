function calcAmountSum() {
    let priceSauce = 100;
    let amountInputSauce = document.querySelector("input#topInput");
    let amountSauce = parseInt(amountInputSauce.value) * priceSauce;
   /* let numberSause = parseInt(amountInputSauce.value);
    numberSauce = isNaN(numberSauce) ? 0 : numberSauce; */

    let priceBurger = 1000;
    let amountInputBurger = document.querySelector("input#amountInput");
    let amountBurger = parseInt(amountInputBurger.value) * priceBurger;
   /* let numberBurger = parseInt(amountInputBurger.value);
    numberBurger = isNaN(numberBurger) ? 0 : numberBurger; */
    
    let amountSum = amountSauce + amountBurger;
   
    showSumPrice(amountSauce, amountBurger);

}
function showSumPrice(amountSauce, amountBurger) {
    let showAmount = document.querySelector("span.show-amount");
    let amountSum = amountSauce + amountBurger;  
    showAmount.innerHTML = amountSum;
}
