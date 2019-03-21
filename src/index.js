// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    var coinsNumbers = [50, 25, 10, 5, 1];
    var coinsNames = ["H", "Q", "D", "N", "P"];
    var amount = currency;
    var total = {};

    if (amount <= 0) {
        return {};
    } else if (amount > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {

        for (var i = 0; i < 5; i++) {
            if (amount / coinsNumbers[i] >= 1) {
                total[coinsNames[i]] = (amount - amount % coinsNumbers[i]) / coinsNumbers[i];
                amount = amount % coinsNumbers[i];
            }
            if (amount == 0) {
                return total;
            }
        }

    }

}
