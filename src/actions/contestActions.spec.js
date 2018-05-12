import { getGlobalContestants } from './contestActions.js'
import actionTypes from './actionTypes.js'

describe('Attempt Contests Actions', () => {
	const data = {data: 'data'}

	it('should dispatch getGlobalContestants with correct data', () => {
		const actual = getGlobalContestants(data)
		const expected = { type: actionTypes.GET_GLOBAL_CONTESTANTS, data: data }
		expect(actual).toEqual(expected)
	})

})
