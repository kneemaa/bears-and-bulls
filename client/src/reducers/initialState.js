// this file holds the global state...i think

export default {
    user: {
        id: 0,
        accountBalance: 0,
        firstName: "",
        lastName: "",
        email: ""
    },
    stocks: {
            portfolioValue: 20000,
            owned: [
            {
                symbol: "TSLA",
                paid: "50",
                quantity: 5
            },
            {
                symbol: "AAPL",
                paid: "100",
                quantity: 10
            },
            {
                symbol: "FB",
                paid: "75",
                quantity:7
            },
            {
                symbol: "SNAP",
                paid: "25",
                quantity: 12
            },
        ]
    },
    search: {
        symbol: '',
        helpBlock: '',
        price: 0,
    },
}