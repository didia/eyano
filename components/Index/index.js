// Vendor
import { FormattedMessage } from 'react-intl';

import PageWrapper from '../PageWrapper';
import SearchBox from '../SearchBox';

const TopSection = () => (
  <header className="header">
    <PageWrapper>
      <div className="content-wrapper">
        <FormattedMessage id="components.search-box.title">
          {title => <h1 className="title">{title}</h1>}
        </FormattedMessage>
        <div className="search-box">
          <SearchBox />
        </div>
      </div>
    </PageWrapper>
    <style jsx>
      {`
        .header {
          background-color: #00b4b3;
        }

        .content-wrapper {
          padding: 32px 0;
        }

        .title {
          color: #fff;
          text-align: center;
          font-weight: normal;
        }

        .search-box {
          max-width: 600px;
          margin: 0 auto;
        }
      `}
    </style>
  </header>
);

const Index = () => (
  <div>
    <TopSection />
  </div>
);

export default Index;
