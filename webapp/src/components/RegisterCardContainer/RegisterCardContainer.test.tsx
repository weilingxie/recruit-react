import { render } from '@testing-library/react'
import RegisterCardContainer from './RegisterCardContainer'
import { Router } from 'react-router-dom'
import { createMemoryHistory, History } from 'history'
import { ComponentInfoList } from '../../constans/ComponentInfoConstant'

describe('RegisterCardContainer Tests', () => {
  const history = createMemoryHistory()
  const renderRegisterCardContainer = (history: History) => {
    return render(
      <Router history={history}>
        <RegisterCardContainer componentInfoList={ComponentInfoList} />
      </Router>
    )
  }

  it('should render Header', () => {
    const { getByTestId } = renderRegisterCardContainer(history)
    expect(getByTestId('Header')).toBeTruthy()
  })

  it('should render title of componentInfo', () => {
    const history = createMemoryHistory()
    history.push(ComponentInfoList[0].Path)
    const { getByText } = renderRegisterCardContainer(history)
    expect(getByText(ComponentInfoList[0].Title)).toBeTruthy()
  })
})
