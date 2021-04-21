import Toggle from '.'
import { screen } from '@testing-library/react';

describe('Toggle', () => {
    test('it renders', () => {
        renderWithReduxProvider(<Toggle />)
        const button = screen.getByRole('button')
        expect(button.textContent).toContain('toggle')
    })
})