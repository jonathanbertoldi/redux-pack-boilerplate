import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import DefaultLayout from '../DefaultLayout';

const PrivateRoute = ({ component, global, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isEmpty(global.user) ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      ) : (
        <DefaultLayout component={component} {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.func,
  ]).isRequired,
  global: PropTypes.object.isRequired,
  location: PropTypes.object,
};

const mapStateToProps = ({ global }) => ({ global });

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(PrivateRoute);
