// Vendor
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import page from '../hocs/page';

const Index = () => (
  <Layout>
    <h1>
      <FormattedMessage id="pages.index.title" />
    </h1>
  </Layout>
);

export default page(Index);
