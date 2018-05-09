import React from 'react'
import SuggestedStock from './SuggestedStock'
import { shallow, mount } from 'enzyme'
import PropTypes from 'prop-types'

class Foo extends React.Component {
    render() {
        return (
            <SuggestedStock 
            logo={this.props.logo} 
            alt={this.props.alt} 
            price={this.props.price}
            symbol={this.props.symbol}
            detailButton={this.props.detailButton}
            buyButton={this.props.buyButton}
            />
        );
    }
}

describe('<SuggestedStock/>', () => {
	const props = {
		logo: 'logoText',
		alt: 'altText',
		price: 23.32,
		symbol: 'GOOG',
		detailButton: 'Detail Button',
		buyButton: 'Buy Button'
	}

	it('will set the logo prop as the "src" tag for the image', () => {
		const expected = props.logo
		const wrapper = mount(<SuggestedStock.WrappedComponent {...props} />)
		const row = wrapper.find('p').getElements()[0]
		const actual = mount(row).text(0)
		console.log(actual)

	})
})