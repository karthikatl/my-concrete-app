import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

describe('App', () => {
  it('renders SelectConcrete and BarChartConcrete components', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Designated Concrete/i)).toBeInTheDocument();
  });
});


