// Vendor
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';

import ArticlesList from './ArticlesList';
import PageWrapper from '../PageWrapper';
import SearchBox from './SearchBox';

const Header = () => (
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
          font-size: 26px;
          font-weight: normal;
        }

        .search-box {
          max-width: 700px;
          margin: 10px auto 0;
        }
      `}
    </style>
  </header>
);

const Content = ({ articles }) => (
  <PageWrapper>
    <div className="content">
      <FormattedMessage id="components.articles-list.title.recent">
        {title => <h1 className="title">{title}</h1>}
      </FormattedMessage>

      <div className="articles-list-wrapper">
        <ArticlesList articles={articles} />
      </div>
    </div>

    <style jsx>
      {`
        .content {
          max-width: 700px;
          margin: 0 auto;
        }

        .articles-list-wrapper {
          display: flex;
          justify-content: center;
        }

        .title {
          margin: 48px 0;
          padding-bottom: 4px;
          border-bottom: solid 1px #26baba;
          font-size: 32px;
          color: #006b6b;
        }
      `}
    </style>
  </PageWrapper>
);

const Index = ({ recentArticles }) => (
  <div>
    <Header />
    <Content articles={recentArticles} />
  </div>
);

Index.propTypes = {
  recentArticles: T.array.isRequired
};

export default Index;
