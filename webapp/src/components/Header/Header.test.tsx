import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const Title = 'TestTitle'
const HeaderIcon = <div data-testid="testHeaderIcon"></div>
const ToPath = '/'
const HeaderButtonAriaLabel = 'header button'

describe('Header Tests', () => {
  it('Should render title and icon', () => {
    const { getByTestId } = render(
      <Header
        title={Title}
        headerIcon={HeaderIcon}
        toPath={ToPath}
        headerButtonAriaLabel={HeaderButtonAriaLabel}
      />
    )
    expect(screen.getByText(Title)).toBeTruthy()
    expect(getByTestId('testHeaderIcon')).toBeTruthy()
  })

  it('should be redirected to toPath when button is clicked', () => {
    const history = createMemoryHistory()
    const { getByRole } = render(
      <Router history={history}>
        <Header
          title={Title}
          headerIcon={HeaderIcon}
          toPath={ToPath}
          headerButtonAriaLabel={HeaderButtonAriaLabel}
        />
      </Router>
    )
    fireEvent.click(getByRole('button'))

    expect(window.location.pathname).toEqual(ToPath)
  })
})
