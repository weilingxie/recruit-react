import { render, screen } from '@testing-library/react'
import ComponentInfoList from './constants/ComponentInfoConstant'
import App from './App'

const defaultComponentInfo = ComponentInfoList.filter(
  (c) => c.Default === true
)[0]

describe('App tests', () => {
  it('Should render RegisterCardContainer', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('RegisterCardContainer')).toBeTruthy()
  })

  it('Should render RegisterCardForm by default', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('RegisterCardForm')).toBeTruthy()
  })

  it('Should render Header with RegisterCardFrom title', () => {
    const { getByTestId } = render(<App />)
    const Header = getByTestId('Header')
    expect(Header).toBeTruthy()
    expect(defaultComponentInfo !== undefined).toBeTruthy()
    expect(screen.getByText(defaultComponentInfo.Title)).toBeTruthy()
  })
})
