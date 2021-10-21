import React from 'react'
import { render } from '@testing-library/react'
import RegisterCardContainer from './RegisterCardContainer'
import { Router } from 'react-router-dom'
import { createMemoryHistory, History } from 'history'
import { ComponentInfoList } from '../../constans/ComponentInfoConstant'

const history = createMemoryHistory()
const childText = 'TestChild'
const Child: React.FC = () => {
  return <div>{childText}</div>
}

describe('RegisterCardContainer Tests', () => {
  const renderRegisterCardContainer = (
    history: History,
    children?: React.ReactNode
  ) => {
    return render(
      <Router history={history}>
        <RegisterCardContainer componentInfoList={ComponentInfoList}>
          {children}
        </RegisterCardContainer>
      </Router>
    )
  }

  it('should render Header', () => {
    const { getByTestId } = renderRegisterCardContainer(history)
    expect(getByTestId('Header')).toBeTruthy()
  })

  it('should render title of componentInfo', () => {
    history.push(ComponentInfoList[0].Path)
    const { getByText } = renderRegisterCardContainer(history)
    expect(getByText(ComponentInfoList[0].Title)).toBeTruthy()
  })

  it('should render its child', () => {
    const { getByText } = renderRegisterCardContainer(history, <Child />)
    expect(getByText(childText)).toBeTruthy()
  })
})
