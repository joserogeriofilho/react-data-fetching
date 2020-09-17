import React from 'react';
import { useState, useEffect } from 'react';

import AxiosService from '../../shared/axios-service';
import AppView from './app-view';


let userService = new AxiosService('https://jsonplaceholder.typicode.com', 'users');

export default function AppContainer() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    setLoading(true);
    setUsers(await userService.$get());
    setLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <AppView users={users} loading={loading} onLoadUsers={loadUsers} />
  );
}