import React from 'react';

import Home from './Home';

import { shallow } from 'enzyme';

describe('<Home />', () => {
  const props = {
    auth: {
      isAuthenticated() {},
    },
  };
  it('render an h4 tag with "You are logged in!" if the user is authenticated', () => {
    const expected = 'You are logged in!';

    const updatedProps = {
      auth: {
        ...props.auth,
        isAuthenticated() {
          return true;
        },
      },
    };
    const wrapper = shallow(<Home {...updatedProps} />);

    const actual = wrapper.find('h4').text();
    expect(actual).toEqual(expected);
  });

  it('render an h4 tag with "You are not logged in! Please Log In to continue." if the user is NOT authenticated', () => {
    const expected = 'You are not logged in! Please Log In to continue.';

    const updatedProps = {
      auth: {
        ...props.auth,
        isAuthenticated() {
          return false;
        },
      },
    };
    const wrapper = shallow(<Home {...updatedProps} />);

    const actual = wrapper.find('h4').text();
    expect(actual).toEqual(expected);
  });
});
