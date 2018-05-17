import { updateChart } from './chartActions.js'
import actionTypes from './actionTypes.js'


describe('Attempt Chart Actions', () => {
    const data = {data: 'data'}
    
    it('should dispatch updateChart with correct data', () => {
		const actual = updateChart(data)
		const expected = { type: actionTypes.UPDATE_CHART, data: data }
		expect(actual).toEqual(expected)
    })
    
})