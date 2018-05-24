import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { login } from '../App/actions';

class Login extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    global: PropTypes.object.isRequired,
  };

  state = {
    redirectToReferrer: false,
  };

  handleLogin = async () => {
    const { login: logIn } = this.props.actions;

    await logIn({
      email: 'user@example.com',
      password: '1234',
    });

    if (!isEmpty(this.props.global.user))
      this.setState({ redirectToReferrer: true });
  };

  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to="/home" />;

    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({ global });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ login }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
