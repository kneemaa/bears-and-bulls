import { buyStock, sellStock, getUserPortfolio, openWebSocket, updateChart } from './stocksActions.js'
import actionTypes from './actionTypes.js'

describe('Attempt Stocks Actions', () => {
	const data = {data: 'data'}

	it('should dispatch buyStock with correct data', () => {
		const actual = buyStock(data)
		const expected = { type: actionTypes.BUY_STOCK, data: data }
		expect(actual).toEqual(expected)
	})

	it('should dispatch sellStock with correct data', () => {
		const actual = sellStock(data)
		const expected = { type: actionTypes.SELL_STOCK, data: data }
		expect(actual).toEqual(expected)
	})

	it('should dispatch getUserPortfolio with correct data', () => {
		const actual = getUserPortfolio(data)
		const expected = { type: actionTypes.GET_USER_PORTFOLIO, data: data }
		expect(actual).toEqual(expected)
	})

	it('should dispatch openWebSocket with correct data', () => {
		const actual = openWebSocket(data)
		const expected = { type: actionTypes.OPEN_WEB_SOCKET, stocks: data }
		expect(actual).toEqual(expected)
	})

	it('should dispatch updateChart with correct data', () => {
		const actual = updateChart(data)
		const expected = { type: actionTypes.UPDATE_CHART, data: data }
		expect(actual).toEqual(expected)
	})
})
