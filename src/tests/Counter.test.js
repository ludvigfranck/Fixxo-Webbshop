import { render, fireEvent } from '@testing-library/react'
import Counter from '../sections/Counter'

describe(Counter, () => {

    it('counter should display initial value of 0', () => {
        const { getByTestId } = render(<Counter init={0} />)
        const value = getByTestId('count').textContent

        expect(value).toEqual(0)
    })

})