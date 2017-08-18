import * as reducer from '../../source/users/UserReducer';
import * as actionType from '../../source/users/Constansts';

const initialState = {
  user: {},
  users: [],
};

const user = { id: 1 };

const loadUserAction = {
  type: actionType.LOAD_USER,
  payload: user
};

const loadUsersAction = {
  type: actionType.LOAD_USERS,
  payload: [user]
};

describe('loadUserReducer', () => {
  it('should return the initial state', () => {
    expect(reducer.loadUserReducer(undefined, initialState.user)).toEqual({})
  })

  it('should handle LOAD_USER', () => {
    expect(
      reducer.loadUserReducer(initialState.user, loadUserAction)
    ).toEqual(user)
  })
})

describe('loadUsersReducer', () => {
  it('should return the initial state', () => {
    expect(reducer.loadUsersReducer(undefined, initialState.users)).toEqual([])
  })

  it('should handle LOAD_USERS', () => {
    expect(
      reducer.loadUsersReducer(initialState.users, loadUsersAction)
    ).toEqual([user])
  })
})
