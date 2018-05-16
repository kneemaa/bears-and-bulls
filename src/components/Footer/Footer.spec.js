import React from 'react'
import Footer from './Footer'
import {shallow} from 'enzyme'

describe('<Footer />', () => {

	it('render "Bears and Bulls" in the first h5 header', () => {
		const expected = "Bears and Bulls"

		const wrapper = shallow(<Footer />)
		const header = wrapper.find('h5').getElements()[0]
		const actual = shallow(header).text()
		expect(expected).toEqual(actual)
	})

	it('set the github project url in the 5th `a` tag', () => {
		const expected = 1

		const wrapper = shallow(<Footer />)
		const header = wrapper.find({href: 'https://github.com/smalldoorman/bears-and-bulls'})
		const actual = header.length
		expect(expected).toEqual(actual)
	})


})