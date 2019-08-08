/**
 * This module contains wrapper (HOC) that passes specified data from store and dispatched action creators to container.
 *
 * @format
 */

import { connect } from 'react-redux';

export default (container, mapStateToProps, mapDispatchToProps) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(container);
