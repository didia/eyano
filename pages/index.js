import page from '../hocs/page';
import Layout from '../components/Layout';
import Index from '../components/Index';

const IndexPage = ({ articles }) => (
  <Layout>
    <Index recentArticles={articles} />
  </Layout>
);

IndexPage.getInitialProps = async () => {
  return {
    articles: [
      {
        excerpt:
          'Un guide étape par étape simple pour préparer votre projet d’études au Canada',
        image:
          'https://www.canada.ca/content/canadasite/en/services/immigration-citizenship/_jcr_content/par/features/mwsfeatureimage1.img.jpg/1511897182536.jpg',
        slug: 'etudier-au-canada',
        title: 'Comment préparer son projet d’étude pour le Canada'
      },
      {
        excerpt:
          'Ce guide te montre étape par étape comment rénouveller ton passeport congolais en dehors de ton pays',
        image:
          'https://afrique.lalibre.be/app/uploads/2017/09/WhatsApp-Image-2017-09-16-at-11.54.43-985x450-690x450.jpeg',
        slug: 'comment-renouveller-son-passeport-diaspora',
        title:
          'Comment rénouveller son passeport congolais lorsque à l’extérieur du pays'
      }
    ]
  };
};

export default page(IndexPage);
