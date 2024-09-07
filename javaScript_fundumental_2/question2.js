function calculateTotalcartValue(){
    let totalValue=0;
    for(let i=0;i<arguments.length;i++){
        totalValue += arguments[i];
    }

    console.log(`the cart value is ${totalValue}`);
    return totalValue;
}

calculateTotalcartValue(125, 20, 30);