function applyCartDiscounts(cartItems, validCoupon = { code: "", type: "", discount: 0 }) {
    // let cartItems = [
    //     {
    //         products: [
    //             {
    //                 category: "electronics",
    //                 product: "fridge",
    //                 price: 80000,
    //                 quantity: 1
    //             },
    //             {
    //                 category: "food",
    //                 product: "blueband",
    //                 price: 200,
    //                 quantity: 2
    //             },
    //             {
    //                 category: "food",
    //                 product: "blueband",
    //                 price: 200,
    //                 quantity: 12
    //             },
    //             {
    //                 category: "toiletry",
    //                 product: "toothpaste",
    //                 price: 100,
    //                 quantity: 1
    //             }
    //         ]
    //     }
    // ]
    
    let cartTotal = 0;
    let currentMonth = new Date().getMonth(); // 0 = January

    for (let item of cartItems) {
        for (let product of item.products) {
            let originalPrice = product.price;

            // Apply 5% discount for electronics
            if (product.category === "electronics") {
                product.price *= 0.95;
            }

            // Apply 10% discount for bulk purchase (quantity ≥ 12)
            if (product.quantity >= 12) {
                product.price *= 0.90;
            }

            // Apply 5% discount on toothpaste if it's January
            if (product.category === "toiletry" && product.product === "toothpaste" && currentMonth === 0) {
                product.price *= 0.95;
            }

            cartTotal += product.price * product.quantity;
        }
    }

    // Apply cart-level coupon discount
    if (validCoupon.type === "cart") {
        cartTotal *= 1 - validCoupon.discount;
    }

    return cartTotal;
}

module.exports = applyCartDiscounts;