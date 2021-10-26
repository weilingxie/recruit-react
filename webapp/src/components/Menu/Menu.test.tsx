import { render } from '@testing-library/react'
import Menu from './Menu'

describe('Menu tests', () => {
  it('Should render Menu', () => {
    const { getByTestId } = render(<Menu />)
    expect(getByTestId('Menu')).toBeTruthy()
  })

  it('Should render Menu content text', () => {
    const { getByText } = render(<Menu />)
    expect(getByText('This is menu content')).toBeTruthy()
  })
})
