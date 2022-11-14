import React from 'react'
import { render } from '@testing-library/react'

import App from '../App'
import ProductGrid from '../sections/ProductGrid'

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  })

  test('title of Featured Products should be FEATURED PRODUCTS', () => {
    const { getByTestId } = render(<ProductGrid title="FEATURED PRODUCTS" />)
    const title = getByTestId('title').textContent

    expect(title).toBe("FEATURED PRODUCTS")
  })
})

/*
Här hade jag lite problem med att den sa att ingen fil hittades när jag körde 
npm test. Så det jag gjorde var att jag ändrade "test": i min package.json fil.
Vet inte om det förstörde något, men det var den lösningen jag hittade. 
*/