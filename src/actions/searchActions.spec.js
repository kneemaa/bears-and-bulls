import { searchStock, query } from './searchActions.js'
import actionTypes from './actionTypes.js'
import { get } from 'redux-saga/effects'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('Attempt Search Actions', () => {
	const data = {data: 'data'}

	it('should dispatch searchStock with correct data', () => {
		const actual = searchStock(data)
		const expected = { type: actionTypes.SEARCH_STOCK, data: data }
		expect(actual).toEqual(expected)
	})

})
