
import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SelectConcrete from './SelectConcrete';
import concreteReducer, { selectConcrete } from '../store/concreteSlice';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react'
import useConcretes from '../hooks/useConcretes';

jest.mock('../hooks/useConcretes');

const mockConcretes = [
    {
        "GeneralPurpose": "Building structures",
        "DetailedPurpose": "External vertical elements sheltered from or exposed to rain (XC3/XC4 + XF1) C)",
        "NominalCover": 25,
        "DesignatedConcrete": "RC30/37"
    },
];

const createMockStore = () => configureStore({
  reducer: {
    concrete: concreteReducer
  }
});

describe('SelectConcrete', () => {
  it('shows loading first then loads input and selects a value', async () => {
    // Set up the mock hook response
    useConcretes.mockReturnValue({
      concrete: null,
      error: null,
      isLoading: true
    });

    const store = createMockStore();

    const { rerender } = render(
      <Provider store={store}>
        <SelectConcrete />
      </Provider>
    );

    // Check for the loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Update the mock response to simulate loaded data
    useConcretes.mockReturnValue({
      concretes: mockConcretes,
      error: null,
      isLoading: false
    });

    // Use act to ensure all updates are flushed
    await act(async () => {
      rerender(
        <Provider store={store}>
          <SelectConcrete />
        </Provider>
      );
    });

    // Wait for the loading to complete and data to be rendered
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // Check if the select options are rendered
    expect(screen.getByLabelText('Select Concrete type')).toBeInTheDocument();
    
    // Simulate selecting a value
    const selectElement = screen.getByLabelText('Select Concrete type');
    fireEvent.mouseDown(selectElement);

    await waitFor(() => screen.getByRole('option', { DesignatedConcrete: 'RC30/37' }));

    const concreteOption = screen.getByRole('option', { DesignatedConcrete: 'RC30/37' });
    fireEvent.click(concreteOption);

    // Check if the selected value is displayed
    expect(selectElement).toHaveTextContent('RC30/37');
  });
});
