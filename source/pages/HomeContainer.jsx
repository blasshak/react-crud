import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../users/User';
import { getUsers } from '../users/UserActions';
import Menu from './components/Menu';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    this.props.actions.getUsers();

    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <section name="Home">
        <Menu selected="Home" />

        <section>
          {this.state.loading && (
            <h2>Loading users...</h2>
          )}

          {this.props.users.map(user => <User key={user.id} {...user} />)}
        </section>
      </section>
    );
  }
}

HomeContainer.propTypes = {
  actions: PropTypes.arrayOf.isRequired,
  users: PropTypes.arrayOf.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    getUsers: bindActionCreators(getUsers, dispatch),
  };

  return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
