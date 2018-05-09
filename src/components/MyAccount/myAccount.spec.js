import React from 'react';

import MyAccount from './MyAccount';

import { shallow } from 'enzyme';

describe('<MyAccount />', () => {
  const props = {
    user: {
      id: 'random-identifier-123',
      firstName: 'Nema',
      lastName: 'Darban',
      accountBalance: 9000.02,
      portfolioValue: 3000.77,
    },
    stocks: {
      portfolioValue: 3000.77,
    },
  };

  it('should render an h3 tag with "My Account" as the heading text', () => {
    const expected = 'My Account';

    const wrapper = shallow(<MyAccount.WrappedComponent {...props} />);

    const actual = wrapper.find('h3').text();
    expect(actual).toEqual(expected);
  });

  it('should render the users first and last name concatenated on the first paragraph tag', () => {
    const expected = 'Nema Darban';

    const wrapper = shallow(<MyAccount.WrappedComponent {...props} />);

    const paragraphRow = wrapper.find('p').getElements()[0];

    const actual = shallow(paragraphRow).text();
    expect(actual).toEqual(expected);
  });

  it('should render the the users account balance on the first h5 tag', () => {
    const expected = '9000.02';

    const wrapper = shallow(<MyAccount.WrappedComponent {...props} />);

    const paragraphRow = wrapper.find('h5').getElements()[0];

    const actual = shallow(paragraphRow).text();
    expect(actual).toEqual(expected);
  });

  it('should render the the users portfolio value on the second h5 tag', () => {
    const expected = '3000.77';

    const wrapper = shallow(<MyAccount.WrappedComponent {...props} />);

    const paragraphRow = wrapper.find('h5').getElements()[1];

    const actual = shallow(paragraphRow).text();
    expect(actual).toEqual(expected);
  });

  it('should render the the users portfolio value on the second paragraph tag', () => {
    const expected = 'Available Balance';

    const wrapper = shallow(<MyAccount.WrappedComponent {...props} />);

    const paragraphRow = wrapper.find('p').getElements()[1];

    const actual = shallow(paragraphRow).text();
    expect(actual).toEqual(expected);
  });

  it('should render the the users portfolio value on the third paragraph tag', () => {
    const expected = 'Portfolio Value';

    const wrapper = shallow(<MyAccount.WrappedComponent {...props} />);

    const paragraphRow = wrapper.find('p').getElements()[2];

    const actual = shallow(paragraphRow).text();
    expect(actual).toEqual(expected);
  });
});
