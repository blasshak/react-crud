import * as actionType from './Constansts';
import api from './api';

function loadUser(user) {
  return {
    type: actionType.LOAD_USER,
    payload: user,
  };
}

function getUser(id) {
  return async (dispatch) => {
    const user = await api.users.getSingle(id);

    dispatch(loadUser(user));

    return user;
  };
}

function loadUsers(users) {
  return {
    type: actionType.LOAD_USERS,
    payload: users,
  };
}

function getUsers() {
  return async (dispatch) => {
    const users = await api.users.getList();

    dispatch(loadUsers(users));

    return users;
  };
}

function createUserCreator(user) {
  return {
    type: actionType.CREATE_USER,
    payload: user,
  };
}

function createUser(user) {
  return async (dispatch) => {
    const response = await api.users.create(user);
    console.log(response);
    dispatch(createUserCreator(user));

    return user;
  };
}

export {
  loadUser,
  getUser,
  loadUsers,
  getUsers,
  createUserCreator,
  createUser,
};
