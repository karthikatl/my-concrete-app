// Import necessary dependencies for testing
import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import BarChartConcrete from './BarchartConcrete.jsx';

import { useGetConcreteDetailsQuery } from '../services/concreteApi.js';
import concreteReducer from '../store/concreteSlice';

// Jest mock for the ResponsiveContainer component from recharts
jest.mock('recharts', () => {
    const OriginalModule = jest.requireActual('recharts');
    return {
        ...OriginalModule,
        ResponsiveContainer: ({ children }) => (
            <OriginalModule.ResponsiveContainer width={800} height={800}>
                {children}
            </OriginalModule.ResponsiveContainer>
        ),
    };
});

jest.mock('../services/concreteApi');

const mockConcreteData = {
    cementContents: [
        {
            "id": 0,
            "label": "10",
            "value": 280
          },
    ]
  };

const mockConcreteDataWithoutData= {}; // Mock data without rating properties

const createMockStore = (initialState) => configureStore({
  reducer: {
    concrete: concreteReducer
  },
  preloadedState: initialState
});
describe('BarChartConcrete', () => {
    it('Matches the snapshot BarChartConcrete without value', () => {
        // resizeHandler(observers);
        useGetConcreteDetailsQuery.mockReturnValue({
                data: mockConcreteDataWithoutData, // Mock data without rating properties
                error: null,
                isLoading: false
            });
        const container = render(<Provider store={createMockStore()}>
                <BarChartConcrete />
            </Provider>);
            screen.debug();
        expect(container).toMatchSnapshot();
    });
    it('Matches the snapshot BarChartConcrete with value', () => {
        // resizeHandler(observers);
        useGetConcreteDetailsQuery.mockReturnValue({
                data: mockConcreteData, // Mock data without rating properties
                error: null,
                isLoading: false
            });
        const container = render(<Provider store={createMockStore()}>
                <BarChartConcrete />
            </Provider>);
            screen.debug();
        expect(container).toMatchSnapshot();
    });
});

