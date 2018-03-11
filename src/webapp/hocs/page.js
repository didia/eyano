import compose from '../utils/compose';
import withCookies from './withCookies';
import withTranslations from './withTranslations';

export default compose(withTranslations, withCookies);
