import React from 'react';

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers'
import { MemoryRouter } from 'react-router-dom';

const TestProviders = ({ initState }) => {
    initState ||= { users: [], loading: false }
    const testStore = createStore(() => reducer(initState, { type: '@@INIT' }), applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            <MemoryRouter>
                { children }
            </MemoryRouter>
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;