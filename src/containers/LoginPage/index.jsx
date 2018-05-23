import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { login } from '../App/actions';

class Login extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    global: PropTypes.object.isRequired,
  };

  state = {};

  render() {
    const { login: logIn } = this.props.actions;

    console.log(this.props.global);

    return (
      <div>
        <button
          onClick={() =>
            logIn({
              email: 'user@example.com',
              password: '1234',
            })
          }
        >
          Login
        </button>
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
