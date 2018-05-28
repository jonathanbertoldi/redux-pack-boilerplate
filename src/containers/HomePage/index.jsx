import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { logout } from '../App/actions';

import { removeLocalStorageUser } from '../../utils/userUtils';

class Home extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  handleLogout = () => {
    removeLocalStorageUser();
    this.props.actions.logout();
  };

  render() {
    const { user } = this.props;

    return (
      <div>
        <p>Home</p>
        <p>Bem vindo {user.email}</p>
        <p>
          <button onClick={this.handleLogout}>Logout</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({ user: global.user });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Home);
