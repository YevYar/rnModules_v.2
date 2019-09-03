/**
 * This HOC contains all action creators and store's data to send via props to FileContentContainer.
 *
 * @format
 */

import FileContentContainer from './FileContentContainer';
import wrapIntoRedux from '../../utils/intoReduxWrapper';
import { loadingHasBeenFinished } from '../../redux/app/appActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = { loadingHasBeenFinished };

export default wrapIntoRedux(
  FileContentContainer,
  mapStateToProps,
  mapDispatchToProps
);
