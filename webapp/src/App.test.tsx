import { render } from '@testing-library/react'
import App from './App'

describe('App tests', () => {
  it('Should render RegisterCardContainer', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('RegisterCardContainer')).toBeTruthy()
  })

  it('Should render RegisterCardForm by default', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('RegisterCardForm')).toBeTruthy()
  })
})
