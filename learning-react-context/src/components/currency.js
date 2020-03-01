const currencies = {
    pkr: {symbol: "Rs", rate: 1},
    usd: {symbol: "$", rate: 157},
}

export const getCurrencySymbol = (currency) => currencies[currency].symbol;

export const convertCurrency = (amount, currency) => amount * currencies[currency].rate;