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
            owned: [],
			charted: "IBM"
    },
    search: {
        symbol: '',
        helpBlock: '',
        price: 0,
    },
    contests: {
        global: []
    },
}