function calculateEmployeePay(basicSalary) {
    let nssf = basicSalary * 0.06; 
    if (nssf > 2160) nssf = 2160;

    let SHA = 3000;

    let housingLevy = basicSalary * 0.015;

    let taxablePay = basicSalary - (nssf + housingLevy);

    let incomeTax = computePAYE(taxablePay);

    let personalRelief = 2400;
    let paye = incomeTax - personalRelief;
    if (paye < 0) {
        paye = 0; 
        SHA = 0;
    }

    let netSalary = taxablePay - paye - SHA;

    return parseFloat(netSalary.toFixed(2));
}


function computePAYE(taxableIncome) {
    let taxBrackets = [
        { limit: 24000, rate: 0.1 },  
        { limit: 32333, rate: 0.25 }, 
        { limit: Infinity, rate: 0.30 } 
    ];

    let remainingIncome = taxableIncome;
    let tax = 0;
    let lowerLimit = 0;

    for (let bracket of taxBrackets) {
        if (remainingIncome > 0) {
            let taxableAmount = Math.min(remainingIncome, bracket.limit - lowerLimit);
            tax += taxableAmount * bracket.rate;
            remainingIncome -= taxableAmount;
            lowerLimit = bracket.limit;
        } else {
            break;
        }
    }
    return tax;
}

console.log(calculateEmployeePay(40000)); 
console.log(calculateEmployeePay(50000)); 
console.log(calculateEmployeePay(30000));

module.exports = calculateEmployeePay
