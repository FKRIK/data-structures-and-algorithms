const hoursPerDay = 8;
const month = 22;

function dayRate(hourRate){
    return hourRate * hoursPerDay;
}

function daysInBudget(budget, hourRate){
    return Math.floor(budget / dayRate(hourRate));
}

// console.log(daysInBudget(835, 12));

function priceWithMonthlyDiscount(hourRate, workDays, discount){
    const fullMonths = Math.floor(workDays / 22);
    const remainingDays = workDays % 22;
    const fullMonthPrice = fullMonths * 22 * dayRate(hourRate);
    return Math.ceil(fullMonthPrice - discount * fullMonthPrice + remainingDays * dayRate(hourRate))
}

// console.log(priceWithMonthlyDiscount(16, 130, 0.15));