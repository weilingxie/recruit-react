import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

const title = 'TestTitle'
const headerIcon = <div data-testid='testHeaderIcon'></div> 

describe('Header Tests', () => {
    it('Should render title and icon', () => {
        const { getByTestId } = render(
            <Header 
                title = {title}
                headerIcon = {headerIcon}
                onClickHeaderButton = {():void => {}}
            />
        )
        expect(screen.getByText(title)).toBeTruthy()
        expect(getByTestId('testHeaderIcon')).toBeTruthy()
    })

    it('should call onClickHeaderButton when button is clicked', () => {
        const onClickHeaderButton = jest.fn()
        const { getByRole } = render(
            <Header 
            title = {title}
            headerIcon = {headerIcon}
            onClickHeaderButton = {onClickHeaderButton}
        />
        )
        fireEvent.click(getByRole('button'))
    
        expect(onClickHeaderButton).toBeCalled()
    })
})