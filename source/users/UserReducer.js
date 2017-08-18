import * as actionType from './Constansts';

const initialState = {
  newUser: { name: '' },
  user: {},
  users: [],
};

function loadUserReducer(state = initialState.user, action) {
  switch (action.type) {
    case actionType.LOAD_USER:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

function loadUsersReducer(state = initialState.users, action) {
  switch (action.type) {
    case actionType.LOAD_USERS:
      return state.concat(action.payload);
    default:
      return state;
  }
}

function createUserReducer(state = initialState.newUser, action) {
  switch (action.type) {
    case actionType.CREATE_USER:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export {
  loadUserReducer,
  loadUsersReducer,
  createUserReducer
};
