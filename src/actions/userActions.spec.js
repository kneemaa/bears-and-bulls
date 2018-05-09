import { getUserSuccess } from './userActions.js'
import actionTypes from './actionTypes.js'

describe('Attempt User Actions', () => {
	const data = {data: 'data'}

	it('should dispatch getUserSuccess with correct data', () => {
		const actual = getUserSuccess(data)
		const expected = { type: actionTypes.GET_USER_SUCCESS, data: data }
		expect(actual).toEqual(expected)
	})

})
