const applyCartDiscounts = require('./cart-discounts'); 
jest.setTimeout(10000);
describe('applyCartDiscounts', () => {

    test('should apply 5% discount for electronics', () => {
        const cartItems = [
            {
                products: [
                    {
                        category: "electronics",
                        product: "fridge",
                        price: 80000,
                        quantity: 1
                    }
                ]
            }
        ];

        const mockDate = new Date(2025, 0, 1); 
        global.Date = jest.fn(() => mockDate);

        let cartTotal = applyCartDiscounts(cartItems);

        const expectedPrice = 80000 * 0.95;

        expect(cartTotal).toBeCloseTo(expectedPrice, 2);
    });

    test('should apply 10% discount on every item for bulk purchase of >= 12)', () => {
        const cartItems = [
            {
                products: [
                    {
                        category: "food",
                        product: "blueband",
                        price: 200,
                        quantity: 12
                    }
                ]
            }
        ];

        const mockDate = new Date(2025, 0, 1); 
        global.Date = jest.fn(() => mockDate);

        let cartTotal = applyCartDiscounts(cartItems);

        const expectedPrice = 200 * 0.90 * 12; 

        expect(cartTotal).toBeCloseTo(expectedPrice, 2);
    });

    test('should apply 5% discount for toothpaste in January', () => {
        const cartItems = [
            {
                products: [
                    {
                        category: "toiletry",
                        product: "toothpaste",
                        price: 100,
                        quantity: 1
                    }
                ]
            }
        ];

        const mockDate = new Date(2025, 0, 1); 
        global.Date = jest.fn(() => mockDate);

        let cartTotal = applyCartDiscounts(cartItems);

        const expectedPrice = 100 * 0.95;

        expect(cartTotal).toBeCloseTo(expectedPrice, 2);
    });

    test('should apply cart-level coupon discount', () => {
        const cartItems = [
            {
                products: [
                    {
                        category: "electronics",
                        product: "fridge",
                        price: 80000,
                        quantity: 1
                    },
                    {
                        category: "food",
                        product: "blueband",
                        price: 200,
                        quantity: 12
                    }
                ]
            }
        ];

        const mockDate = new Date(2025, 0, 1); // January (0)
        global.Date = jest.fn(() => mockDate);

        const validCoupon = { code: "SAVE10", type: "cart", discount: 0.10 }; 

        let cartTotal = applyCartDiscounts(cartItems, validCoupon);

        let expectedTotal = (80000 * 0.95 + 200 * 0.90 * 12) * 0.90; 

        expect(cartTotal).toBeCloseTo(expectedTotal, 2);
    });

});
