import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import { Layout } from 'antd';

import SideMenu from '../SideMenu';
import HeaderMenu from '../HeaderMenu';
import { logout, verifyToken } from '../../containers/App/actions';
import { removeLocalStorageUser } from '../../utils/userUtils';
import './style.less';

const { Content } = Layout;

class DefaultLayout extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    component: PropTypes.oneOfType([
      PropTypes.instanceOf(React.Component),
      PropTypes.func,
    ]),
  };

  state = {};

  componentDidMount() {
    if (!isEmpty(this.props.user)) this.props.actions.verifyToken();
  }

  handleLogout = () => {
    removeLocalStorageUser();
    this.props.actions.logout();
  };

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <div>
        <Layout className="default-layout">
          <SideMenu />
          <Content>
            <HeaderMenu />
            <Component {...rest} />
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({ user: global.user });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout, verifyToken }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(DefaultLayout);
