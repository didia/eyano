// Vendor
import { PureComponent } from 'react';
import { Cookies } from 'react-cookie';
import { IntlProvider, addLocaleData } from 'react-intl';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import PropTypes from 'prop-types';
import ln from 'react-intl/locale-data/ln';
import fr from 'react-intl/locale-data/fr';
import { COOKIES, DEFAULT_LOCALE } from '../config/environment';

// server-side: for performance, keep in memory messages for different locales
const intlCache = new Map();
//  client-side: remember the user's locale messages across page changes
let locale;
let messages;

const localeData = { fr, ln };

export default ComposedComponent =>
  class WithCookies extends PureComponent {
    static propTypes = {
      cookies: PropTypes.instanceOf(Cookies),
      locale: PropTypes.string.isRequired,
      messages: PropTypes.object.isRequired
    };

    static async getInitialProps({ req }) {
      if (!process.browser) {
        locale = req.universalCookies.get(COOKIES.LOCALE) || DEFAULT_LOCALE;
        if (!intlCache.has(locale)) {
          const messageFile = require.resolve(`../locales/${locale}.json`);
          // eslint-disable-next-line global-require
          messages = JSON.parse(
            require('fs').readFileSync(messageFile, 'utf8')
          );
          intlCache.set(locale, messages);
        }
        messages = intlCache.get(locale);
      }

      return {
        locale,
        messages,
        ...loadGetInitialProps(ComposedComponent)
      };
    }

    constructor(props) {
      super(props);
      locale = props.locale;
      messages = props.messages;

      if (process.browser) {
        addLocaleData([...localeData[locale]]);
      }
    }

    render() {
      return (
        <IntlProvider locale={locale} messages={messages}>
          <ComposedComponent {...this.props} />
        </IntlProvider>
      );
    }
  };
