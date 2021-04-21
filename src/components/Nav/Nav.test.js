import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Nav from '.'

describe('Nav', () => {
    test('it renders a nav tag', () => {
        render(<Nav />, { wrapper: MemoryRouter });
        const nav = screen.queryByRole('navigation');
        expect(nav).toBeInTheDocument();
    })
})