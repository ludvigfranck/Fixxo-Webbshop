import { render, fireEvent } from '@testing-library/react'
import ProductGrid from '../sections/ProductGrid'

describe(ProductGrid, () => {

    it('ProductGrid should have a title of FEATURED PRODUCTS', () => {
        const {getByTestId} = render(<ProductGrid title="FEATURED PRODUCTS" />)
        const value = getByTestId('title').textContent

        expect(value).toEqual("FEATURED PRODUCTS")
    })

})