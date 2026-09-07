const { calculateTax, calculateNetIncome } = require('../../src/taxCalculator');

describe('Tax Calculator', () => {
    it('should calculate tax for a standard income', () => {
        expect(calculateTax(50000, 20)).toBe(10000);
    });

    it('should calculate tax as zero when rate is 0', () => {
        expect(calculateTax(50000, 0)).toBe(0);
    });

    it('should calculate tax as zero when income is 0', () => {
        expect(calculateTax(0, 20)).toBe(0);
    });

    it('should calculate net income correctly', () => {
        expect(calculateNetIncome(50000, 20)).toBe(40000);
    });

    it('should handle high tax rates correctly', () => {
        expect(calculateTax(100000, 50)).toBe(50000);
    });

    it('should handle decimal income values', () => {
        expect(calculateTax(1000.5, 10)).toBeCloseTo(100.05);
    });

    it('should return full income as net when tax rate is 0', () => {
        expect(calculateNetIncome(75000, 0)).toBe(75000);
    });
});