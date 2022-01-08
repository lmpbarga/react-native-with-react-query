import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import * as api from './api';
import App from './app';

jest.mock('./api');

const mockList = [
  {
    id: '1',
    title: 'mock-1',
  },
];

it('renders correctly', async () => {
  api.getJsonPlaceHolderPosts.mockResolvedValue(mockList);

  const {getByTestId} = render(<App />);

  await waitFor(() => {
    expect(getByTestId('list')).toBeTruthy();
  });
});
