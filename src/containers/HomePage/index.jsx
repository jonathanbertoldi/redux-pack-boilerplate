import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { logout } from '../App/actions';

import { makeSelectUser } from '../App/selectors';

class Home extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  };

  state = {};

  render() {
    const { user } = this.props;

    return <div>Bem vindo {user.email}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
