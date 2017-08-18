import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser } from '../users/UserActions';
import UserForm from './../users/UserForm';

class SignUpUserContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const tempUser = this.props.user;
    tempUser[target.name] = target.value;

    this.setState({ user: tempUser });
  }

  handleSubmit(e) {
    this.props.actions.createUser(this.props.user);
    e.preventDefault();
  }

  render() {
    return (
      <UserForm onSubmit={this.handleSubmit} onChange={this.handleChange} {...this.props.user} />
    );
  }
}

SignUpUserContainer.propTypes = {
  actions: PropTypes.arrayOf.isRequired,
  user: PropTypes.objectOf.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.newUser,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    createUser: bindActionCreators(createUser, dispatch),
  };

  return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpUserContainer);
