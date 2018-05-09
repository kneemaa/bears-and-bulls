import { searchStock } from './searchActions.js'
import actionTypes from './actionTypes.js'

describe('Attempt Search Actions', () => {
	const data = {data: 'data'}

	it('should dispatch searchStock with correct data', () => {
		const actual = searchStock(data)
		const expected = { type: actionTypes.SEARCH_STOCK, data: data }
		expect(actual).toEqual(expected)
	})

})
