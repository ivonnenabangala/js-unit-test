function calculateTotal(products, tax) {
    // let products = [
    //     {
    //         name: "unga",
    //         price: 100
    //     },
    //     {
    //         name: "oil",
    //         price: 1200
    //     },
    //     {
    //         name: "rice",
    //         price: 500
    //     }
    // ]

    let total = 0
    if (!Array.isArray(products) || products.length === 0) {
        return NaN; // Return NaN if invalid input
    }
    for(let value of products){
        total += value.price
    }
    if(total > 100){
        console.log(total);
        total = total * 0.90
    }
    console.log(total);

    let taxAmount = total * (tax/100)
    total += taxAmount

    console.log(total);
    return parseFloat(total.toFixed(2));
    
    

}
calculateTotal(8)

module.exports = calculateTotal