// Vendor
import Link from 'next/link';

import PageWrapper from '../../PageWrapper/index';

const Header = () => (
  <div className="root">
    <PageWrapper>
      <Link href="/">
        <a className="logo">EYANO</a>
      </Link>
    </PageWrapper>

    <style jsx>
      {`
        .root {
          padding: 25px 5px;
          background-color: #00b4b3;
        }

        .logo {
          text-decoration: none;
          font-size: 40px;
          font-family: 'Passero One', cursive;
          color: #fff;
        }
      `}
    </style>
  </div>
);

export default Header;
