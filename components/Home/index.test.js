import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';
import withCookies from '../../hocs/withCookies';

describe('Home Component', () => {
  it('renders as expected', () => {
    const component = renderer.create(withCookies(<Home />));

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
