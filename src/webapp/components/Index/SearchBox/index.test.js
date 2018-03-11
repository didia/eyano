// Vendor
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { IntlProvider } from 'react-intl';

import messages from '../../../locales/fr';

import SearchBox from './index';

describe('SearchBox Component', () => {
  it('renders as expected', () => {
    const intlProvider = new IntlProvider({ locale: 'fr', messages }, messages);
    const { intl } = intlProvider.getChildContext();
    const renderer = new ShallowRenderer();

    const component = renderer.render(
      <SearchBox.WrappedComponent intl={intl} />
    );

    expect(component).toMatchSnapshot();
  });
});
