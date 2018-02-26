// Vendor
import { PureComponent } from 'react';
import { Cookies } from 'react-cookie';
import { IntlProvider, addLocaleData } from 'react-intl';
import { loadGetInitialProps } from 'next/dist/lib/utils';
import PropTypes from 'prop-types';
import ln from 'react-intl/locale-data/ln';
import fr from 'react-intl/locale-data/fr';
import { COOKIES, DEFAULT_LOCALE } from '../config/environment';

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

    static async getInitialProps(ctx) {
      if (!process.browser) {
        locale = ctx.req.universalCookies
          ? ctx.req.universalCookies.get(COOKIES.LOCALE)
          : DEFAULT_LOCALE;
        locale = locale || DEFAULT_LOCALE;

        if (locale === 'ln') {
          messages = await import('../locales/ln');
        } else {
          messages = await import('../locales/fr');
        }
      }

      return {
        locale,
        messages,
        ...loadGetInitialProps(ComposedComponent, ctx)
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
