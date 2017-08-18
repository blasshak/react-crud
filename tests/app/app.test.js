import app from '../../source/app/app';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const appTemp = {
  urls: {
    api: {
      users: baseUrl,
    },
  },
};

describe('app', () => {
  it('should return the same data', () => {
    expect(app).toEqual(appTemp)
  });
});
