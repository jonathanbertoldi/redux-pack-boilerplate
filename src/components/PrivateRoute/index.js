/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

const PrivateRoute = ({ component: Component, global, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isEmpty(global.user) ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

// class PrivateRoute extends React.Component {
//   render() {
//     const { component: Component, global, ...rest } = this.props;

//     console.log(global);

//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           isEmpty(global.user) ? (
//             <Redirect to="/login" />
//           ) : (
//             <Component {...props} />
//           )
//         }
//       />
//     );
//   }
// }

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.func,
  ]).isRequired,
  global: PropTypes.object.isRequired,
};

const mapStateToProps = ({ global }) => ({ global });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PrivateRoute);
