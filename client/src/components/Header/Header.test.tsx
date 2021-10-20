import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const title = 'TestTitle'
const headerIcon = <div data-testid='testHeaderIcon'></div> 
const toPath = '/'

describe('Header Tests', () => {
    it('Should render title and icon', () => {
        const { getByTestId } = render(

            <Header 
                title = {title}
                headerIcon = {headerIcon}
                toPath = {toPath}
            />
        )
        expect(screen.getByText(title)).toBeTruthy()
        expect(getByTestId('testHeaderIcon')).toBeTruthy()
    })

    it('should be redirected to toPath when button is clicked', () => {        
        const history = createMemoryHistory()
        const { getByRole } = render(
            <Router history={history}>
                <Header 
                title = {title}
                headerIcon = {headerIcon}
                toPath = {toPath}
                />
            </Router>        
        )
        fireEvent.click(getByRole('button'))        
    
        expect(window.location.pathname).toEqual(toPath)
    })    
})