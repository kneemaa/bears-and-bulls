

export const stateUpdateMath = (stockInfo, oldState) => {
    // console.log(oldState)
    // console.log(stockInfo)
    // const portfolioValue = oldState.portfolioValue

    // set variables relative to incoming state and socket data
    const owned = oldState.owned
    const updatingSymbol = stockInfo.symbol
    const lastPrice = stockInfo.lastPrice

    // console.log(portfolioValue)
    // console.log(owned)
    // console.log(updatingSymbol)
    // console.log(lastPrice)

    // create array of only the stock we are updating
    const updatingStock = owned.filter(stock => {
        return stock.symbol === updatingSymbol
    })
    // create array of only the stocks NOT updating
    const otherStocks = owned.filter(stock => {
        return stock.symbol !== updatingSymbol
    })

    // set new values for stock state keys
    const marketValue = lastPrice * updatingStock[0].stock_count
    const totalGain = marketValue - (updatingStock[0].stock_count * updatingStock[0].purchase_price)
    const profitLoss = totalGain / (updatingStock[0].stock_count * updatingStock[0].purchase_price)

    // redefine the stock with new values based oon new data
    const newStockValues = [
        {
        _id: updatingStock[0]._id,
        symbol: updatingSymbol,
        purchase_price: updatingStock[0].purchase_price.toFixed(2),
        stock_count: updatingStock[0].stock_count,
        last_price: lastPrice.toFixed(2),
        market_value: marketValue.toFixed(2),
        total_gain: totalGain.toFixed(2),
        profit_loss: profitLoss.toFixed(4),
        owned_by: updatingStock[0].owned_by,
        createdAt: updatingStock[0].createdAt,
        updatedAt: updatingStock[0].updatedAt
        }
    ]

    const newStocksForState = newStockValues.concat(otherStocks)
    const portfolioValueForState = newStocksForState.map(stock => {
        return stock.market_value
        })
        .reduce((a,b) => a+b)

    return {
        portfolioValue: portfolioValueForState,
        owned: newStocksForState
    }
}