import React from 'react';
import { shallow } from '@testing-library/react'
import App from '../App'

describe(App, () => {

    test('renders correctly', () => {
        shallow(<App />)
    })
})
