const calculateTotal =  require('./total')

describe("Tests for sum", () => {
    test("Should return the sum given an array of product objects", () => {
        let input = [{price: 100}, {price: 300}]
        let result = calculateTotal(input, 8)
        expect(typeof result).toBe("number");
    })
    test("Should return NaN given an empty array of product objects", () => {
        let input = []
        let result = calculateTotal(input, 8)
        expect(result).toBeNaN();
    })
    test("Should apply a 10% discount when total is over $100", () => {
        let input = [{ price: 50 }, { price: 100 }]; 
        let result = calculateTotal(input, 8);
        expect(result).toBeCloseTo(135 + 10.8 , 2); 
    });
    test("Should not apply a discount if total is $100 or less", () => {
        let input = [{ price: 50 }, { price: 50 }]; 
        let result = calculateTotal(input, 8);
        expect(result).toBeCloseTo(100 + 8, 2); 
    });
    
    
})