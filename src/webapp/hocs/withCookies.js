// Vendor
import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CookiesProvider } from 'react-cookie';
import { loadGetInitialProps } from 'next/dist/lib/utils';

export default ComposedComponent =>
  class WithCookies extends PureComponent {
    static propTypes = {
      cookies: PropTypes.object
    };

    static async getInitialProps(ctx) {
      return {
        cookies: ctx && ctx.req ? ctx.req.universalCookies : undefined,
        ...(await loadGetInitialProps(ComposedComponent, ctx))
      };
    }

    render() {
      const componentProps = { ...this.props };
      delete componentProps.cookies;

      return (
        <CookiesProvider cookies={this.props.cookies}>
          <ComposedComponent {...componentProps} />
        </CookiesProvider>
      );
    }
  };
