import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { logout } from '../App/actions';

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

const mapStateToProps = ({ global }) => ({ user: global.user });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
