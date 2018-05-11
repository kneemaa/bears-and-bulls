import React from 'react'
import {shallow} from 'enzyme'
import MyStocks from './MyStocks'

describe('<MyStocks />', () => {
	const props = {
		stocks: {
			owned:[
				{
					createdAt:"2018-05-10T18:26:30.581Z",
					last_price: 185.53,
					market_value: 927.65,
					owned_by: "user_two",
					profit_loss: 2.7106,
					purchase_price: 50,
					stock_count: 5,
					symbol: "SNAP",
					total_gain: 677.65,
					updatedAt: "2018-05-10T18:26:30.581Z",
					_id: "stock_two"
				},
				{
					createdAt:"2018-05-10T18:26:30.581Z",
					last_price: 23.53,
					market_value: 543.65,
					owned_by: "user_one",
					profit_loss: 2.7106,
					purchase_price: 50,
					stock_count: 5,
					symbol: "FB",
					total_gain: 677.65,
					updatedAt: "2018-05-10T18:26:30.581Z",
					_id: "stock_one"
				}
			]
	}}

	it('render number of "tr" rows as to the number of owned stocks', () => {
		const wrapper = shallow(<MyStocks.WrappedComponent {...props} />)
		const expected = 2
		
		const actual = wrapper.find('tbody>tr').length
		expect(actual).toEqual(expected)
	})

})

