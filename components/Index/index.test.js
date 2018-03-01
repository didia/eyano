// Vendor
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

// Data
import articles from '../../tests/data/articles';

// Components
import Index from './index';

describe('Index Component', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();

    const component = renderer.render(<Index recentArticles={articles} />);

    expect(component).toMatchSnapshot();
  });
});
