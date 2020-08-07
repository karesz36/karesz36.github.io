function calcAmountSum() {
   
    let priceBurger = 750;
    let amountInputBurger = document.querySelector("input#burgerInput");
    let amountBurger = parseInt(amountInputBurger.value) * priceBurger;
   /* let numberBurger = parseInt(amountInputBurger.value);
    numberBurger = isNaN(numberBurger) ? 0 : numberBurger; */

    let priceSauce = 70;
    let amountInputSauce = document.querySelector("input#sauceInput");
    let amountSauce = parseInt(amountInputSauce.value) * priceSauce;
   /* let numberSause = parseInt(amountInputSauce.value);
    numberSauce = isNaN(numberSauce) ? 0 : numberSauce; */
    
    let priceDrink = 270;
    let amountInputDrink = document.querySelector("input#drinkInput");
    let amountDrink = parseInt(amountInputDrink.value) * priceDrink;
   /* let numberDrink = parseInt(amountInputDrink.value);
    numberDrink = isNaN(numberDrink) ? 0 : numberDrink; */
    
    let amountSum = amountSauce + amountBurger + amountDrink;
   
    showSumPrice(amountSauce, amountBurger, amountDrink);

}
function showSumPrice(amountSauce, amountBurger, amountDrink) {
    let showAmount = document.querySelector("span.show-amount");
    let amountSum = amountSauce + amountBurger + amountDrink;  
    showAmount.innerHTML = amountSum;
}
