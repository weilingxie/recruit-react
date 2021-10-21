import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders RegisterCardContainer', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('RegisterCardContainer')).toBeTruthy()
  })
})
