import React from 'react'
import {shallow} from 'enzyme'
import Navbar from './Navbar'

describe('<Navbar />', () => {
	const props = { auth: { isAuthenticated: function() {return true} }}
	it('should get this', () => {
		const expected = 'Home'
		const wrapper = shallow(<Navbar.WrappedComponent {...props}/>)
		const find = wrapper.find('.navbar-link').getElements()[0]
		const actual = shallow(find).text()
		expect(actual).toEqual(expected)
	})
})