import fetch from 'isomorphic-fetch';
import app from '../app/app';

const api = {
  users: {
    async getList() {
      const response = await fetch(`${app.urls.api.users}/users`);
      const data = await response.json();

      return data;
    },
    async getSingle(id = 1) {
      const response = await fetch(`${app.urls.api.users}/users/${id}`);
      const data = await response.json();

      return data;
    },
    async create(user) {
      const response = await fetch('http://symfony.dev:9090/app_dev.php/users', {
        method: 'POST',
        body: JSON.stringify(user),
        header: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
        },
      });

      return response.text();
    },
  },
};

export default api;
