import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import app from '../../source/app/app';
import * as actionType from '../../source/users/Constansts';
import * as actions from '../../source/users/UserActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Action Creators', () => {
  it('should create an action to load user', () => {
    const user = { id: 1 };
    const expectedAction = {
      type: actionType.LOAD_USER,
      payload: user,
    };
    expect(actions.loadUser(user)).toEqual(expectedAction);
  });

  it('should create an action to load users', () => {
    const users = [];
    const expectedAction = {
      type: actionType.LOAD_USERS,
      payload: users,
    };
    expect(actions.loadUsers(users)).toEqual(expectedAction);
  });
});


describe('Async Action Creators', () => {
  afterEach(() => {
    nock.cleanAll();
  })

  it('should execute get user', () => {
    const user = { id: 1 };
    const expectedAction = {
      type: actionType.LOAD_USER,
      payload: user,
    };
    nock(app.urls.api.users)
      .get('/users/1')
      .reply(200, user);

    const store = mockStore({});

    // Return the promise
    return store.dispatch(actions.getUser(1))
      .then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual(expectedAction)
      })
  });

  it('should execute get user', () => {
    const users = [{ id: 1 }];
    const expectedAction = {
      type: actionType.LOAD_USERS,
      payload: users,
    };
    nock(app.urls.api.users)
      .get('/users')
      .reply(200, users);

    const store = mockStore({});

    // Return the promise
    return store.dispatch(actions.getUsers())
      .then(() => {
        const action = store.getActions()
        expect(action[0]).toEqual(expectedAction)
      })
  });
});
