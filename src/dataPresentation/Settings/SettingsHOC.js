/**
 * This HOC contains all action creators and store's data to send via props to SettingsContainer.
 *
 * @format
 */

import SettingsContainer from './SettingsContainer';
import wrapIntoRedux from '../../utils/intoReduxWrapper';
import { languageHasBeenChanged } from '../../redux/app/appActions';

const mapStateToProps = state => ({ language: state.appState.language });

const mapDispatchToProps = { languageHasBeenChanged };

export default wrapIntoRedux(
  SettingsContainer,
  mapStateToProps,
  mapDispatchToProps
);
