import page from '../hocs/page';
import Layout from '../components/Layout';
import Index from '../components/Index';

const IndexPage = () => (
  <Layout>
    <Index />
  </Layout>
);

export default page(IndexPage);
