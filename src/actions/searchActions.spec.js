import { searchStock, query } from './searchActions.js'
import actionTypes from './actionTypes.js'
import { get } from 'redux-saga/effects'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('Attempt Search Actions', () => {
	const data = {data: 'data'}

	let httpMock
	beforeEach(() => {
		httpMock = new MockAdapter(axios)
	})

	it('should dispatch searchStock with correct data', () => {
		const actual = searchStock(data)
		const expected = { type: actionTypes.SEARCH_STOCK, data: data }
		expect(actual).toEqual(expected)
	})

/*	it('should return an object response after doing an API call to iextrading', () => {
		let response = [
				{
					"symbol": "SNAP",
					"price": 11,
					"size": 300,
					"time": 1525982399701
				}
			]

		httpMock.onGet('https://api.iextrading.com/1.0/tops/last?symbols=SNAP').reply(response)

		const actual = query('SNAP')
		const expected = { price: response.price, symbol: response.symbol, helpBlock: ''}
		expect(actual).toEqual(expected)
	})*/

})
