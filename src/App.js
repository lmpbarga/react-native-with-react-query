import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import List from './List';

const queryClient = new QueryClient()

const App = () => {
  const [list, setList] = useState()

  const getTestAxios = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setList(response.data)
  }

  useEffect(() => { getTestAxios() }, [])

  console.log(list)

  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
};

export default App;
