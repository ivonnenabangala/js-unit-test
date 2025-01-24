const calculateEmployeePay = require('./employee-pay')

describe('Employee Pay Calculation', () => {
    
    it('should return 0 for a salary of 0', () => {
        const result = calculateEmployeePay(0);
        expect(result).toBe(0);
    });

    it('should correctly calculate net salary for a salary of 40,000', () => {
        const result = calculateEmployeePay(40000);
        expect(result).toBeCloseTo(30684.50); 
    });

    
});