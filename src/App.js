import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import List from './list';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
    </QueryClientProvider>
  );
};

export default App;
