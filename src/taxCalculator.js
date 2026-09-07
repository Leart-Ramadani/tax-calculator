function calculateTax(income, taxRate) {
    return (income * taxRate) / 100;
}

function calculateNetIncome(income, taxRate) {
    return income - calculateTax(income, taxRate);
}

module.exports = { calculateTax, calculateNetIncome };