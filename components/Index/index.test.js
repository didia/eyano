import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Index from './index';

describe('Index Component', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();

    const component = renderer.render(<Index />);

    expect(component).toMatchSnapshot();
  });
});
