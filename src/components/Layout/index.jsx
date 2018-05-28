import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { logout, verifyToken } from '../../containers/App/actions';

import { removeLocalStorageUser } from '../../utils/userUtils';

class Layout extends React.Component {
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
        <nav>
          <Link to="/home">Home</Link>&nbsp;
          <Link to="/contact">Contact</Link>&nbsp;
          <Link to="/about">About</Link>
          <button onClick={this.handleLogout}>Sair</button>
        </nav>
        <Component {...rest} />
      </div>
    );
  }
}

const mapStateToProps = ({ global }) => ({ user: global.user });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ logout, verifyToken }, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Layout);
