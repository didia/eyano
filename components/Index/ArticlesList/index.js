// Vendor
import T from 'prop-types';

const ArticleShape = T.shape({
  excerpt: T.string.isRequired,
  image: T.string.isRequired,
  slug: T.string.isRequired,
  title: T.string.isRequired
}).isRequired;

const ArticleItem = ({ article }) => (
  <a className="article" href={`#${article.slug}`}>
    <div className="article__details">
      <h2 className="article__title">{article.title}</h2>

      <p className="article__excerpt">{article.excerpt}</p>
    </div>

    <div className="article__image" />

    <style jsx>
      {`
    .article {
      display: flex;
      min-height: 140px;
      padding: 16px;
      box-shadow: 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px rgba(0,0,0,.12);
      text-decoration: none;
      transition: 0.3s box-shadow ease-in-out;
    }

    .article:hover,
    .article:active {
      box-shadow: 0 0 8px rgba(0,0,0,.18), 0 8px 16px rgba(0,0,0,.36);
    }

    .article__image {
      flex: 0 0 33%;
      margin-left: 16px;
      background: no-repeat url("${article.image}");
      background-size: cover;
      background-position: center;
    }

    .article__title {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.3;
      color: #006b6b;
      transition: 0.2s color ease-in-out;
    }

    .article:hover .article__title,
    .article:active .article__title {
      color: #26baba;
    }


    .article__excerpt {
      margin-top: 16px;
      line-height: 1.5;
      color: #6e767d;
    }
  `}
    </style>
  </a>
);

ArticleItem.propTypes = {
  article: ArticleShape
};

const ArticlesList = ({ articles }) => {
  return (
    <ul>
      {articles.map((article, index) => (
        <li key={`article-${index}`} className="item">
          <ArticleItem article={article} />
        </li>
      ))}

      <style jsx>
        {`
          .item {
            margin-bottom: 16px;
          }
        `}
      </style>
    </ul>
  );
};

ArticlesList.propTypes = {
  articles: T.arrayOf(ArticleShape).isRequired
};

export default ArticlesList;
