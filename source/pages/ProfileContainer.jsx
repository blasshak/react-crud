import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import User from '../users/User';
import { getUser } from '../users/UserActions';
import Menu from './components/Menu';

class ProfileContainer extends Component {
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
    this.props.actions.getUser();

    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <section name="Profile">
        <Menu selected="Profile" />

        <User key={this.props.user.id} {...this.props.user} />
      </section>
    );
  }
}

ProfileContainer.propTypes = {
  actions: PropTypes.objectOf.isRequired,
  user: PropTypes.objectOf.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch, props) {
  const id = props.match.params.id;
  const actions = {
    getUser: bindActionCreators(getUser(id), dispatch),
  };

  return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
