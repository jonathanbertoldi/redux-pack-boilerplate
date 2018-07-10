import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { postLogin } from '../App/actions';

import { makeSelectUser } from '../App/selectors';

class Login extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object,
    location: PropTypes.object,
  };

  state = {
    redirectToReferrer: false,
  };

  handleLogin = async () => {
    await this.props.actions.postLogin({
      email: 'user@example.com',
      password: '1234',
    });

    if (!isEmpty(this.props.user))
      await this.setState({ redirectToReferrer: true });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: '/home' },
    };

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ postLogin }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
