import React, { Component } from 'react';
import { Menu } from 'antd';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { removeLocalStorageUser } from '../../utils/userUtils';
import { logout, verifyToken } from '../../containers/App/actions';
import './style.less';

class HeaderMenu extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };
  state = {
    current: 'mail',
  };
  componentDidMount() {
    if (!isEmpty(this.props.user)) this.props.actions.verifyToken();
  }

  handleLogout = () => {
    removeLocalStorageUser();
    this.props.actions.logout();
  };

  render() {
    return (
      <div>
        <Menu
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className="content-menu"
        >
          <Menu.Item key="mail">
            <button onClick={this.handleLogout} className="btn-logout">
              Sair
            </button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({ user: global.user });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout, verifyToken }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HeaderMenu);
