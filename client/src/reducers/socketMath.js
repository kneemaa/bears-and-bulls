

export const stateUpdateMath = (stockInfo, oldState) => {

    // set variables relative to incoming state and socket data
    const owned = oldState.owned
    const updatingSymbol = stockInfo.symbol
    const lastPrice = stockInfo.lastPrice
    
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

    // redefine the stock with new values based on new data
    const newStockValues = [
        {
        _id: updatingStock[0]._id,
        symbol: updatingSymbol,
        purchase_price: Number(updatingStock[0].purchase_price.toFixed(2)),
        stock_count: Number(updatingStock[0].stock_count),
        last_price: Number(lastPrice.toFixed(2)),
        market_value: Number(marketValue.toFixed(2)),
        total_gain: Number(totalGain.toFixed(2)),
        profit_loss: Number(profitLoss.toFixed(4)),
        owned_by: updatingStock[0].owned_by,
        createdAt: updatingStock[0].createdAt,
        updatedAt: updatingStock[0].updatedAt
        }
    ]

    // combine updated stock value array with array of other stocks
    const newStocksForState = newStockValues.concat(otherStocks)

    // add the market_value of all stocks to get current portfolioValue
    const portfolioValueForState = newStocksForState.map(stock => {
        return stock.market_value
        })
        .reduce((a,b) => a+b)
    
    // return a new object that includes the portfolio value and owned stocks
    // state will be reset using this object in the reducer
    return {
        portfolioValue: portfolioValueForState,
        owned: newStocksForState
    }
}