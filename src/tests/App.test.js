import React from 'react';
import { shallow } from '@testing-library/react'
import App from '../App'

test(App, () => {
    it("renders without crashing", () => {
        shallow(<App />)
    });
})
