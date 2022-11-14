import { shallow } from '@testing-library/reactw'
import App from '../App'

it("renders without crashing", () => {
    shallow(<App />)
});
