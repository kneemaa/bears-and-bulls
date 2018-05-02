// this file holds the global state...i think

export default {
    user: {
        id: 0,
        name: "John Jacob",
        owned: ["TSLA", "AAPL", "FB", "SNAP"],
        portfolioValue: 0,
        availableBalance: 10000,
        contest: false
    },
    stocks: [
        {
            symbol: "TSLA",
            paid: 50,
            quantity: 5,
            last: 0,
            marketValue: 0,
            totalGain: 0,
            profitLossPercent: 0
        },
        {
            symbol: "AAPL",
            paid: 100,
            quantity: 10,
            last: 0,
            marketValue: 0,
            totalGain: 0,
            profitLossPercent: 0
        },
        {
            symbol: "FB",
            paid: 75,
            quantity:7,
            last: 0,
            marketValue: 0,
            totalGain: 0,
            profitLossPercent: 0
        },
        {
            symbol: "SNAP",
            paid: 25,
            quantity: 12,
            last: 0,
            marketValue: 0,
            totalGain: 0,
            profitLossPercent: 0
        },
    ]
}