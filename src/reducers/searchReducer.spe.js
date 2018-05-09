import searchReducer from './searchReducer'
import actionTypes from '../actions/actionTypes';

describe('Search Reducer', () => {
	const data = {data: 'data'}

	it('returns the default values for searching stock', () => {
		const actual = searchReducer(undefined, {})
		const expected = {"helpBlock": '', "price": 0, "symbol": ""}
		expect(actual).toEqual(expected)
	})

	it('it returns the values for searching the SNAP stock symbol', () => {
		const action = {
			"type": actionTypes.SEARCH_STOCK,
			"data": {
				"helpBlock": '',
				"price": 10,
				"symbol": 'SNAP'
				},
		}
		const initialState = {
						"helpBlock": '',
						"price": 0,
						"symbol": ''
						}
		const actual = searchReducer(initialState, action)
		const expected = {"helpBlock": '', "price": 10, "symbol": "SNAP"}
		expect(actual).toEqual(expected)
	})
})
