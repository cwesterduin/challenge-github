import Avatar from '.';
import { screen } from '@testing-library/react';

describe('Avatar', () => {
    test('it shows a users avatar', () => {
        renderWithProviders(<Avatar />)
        const image = screen.getByRole('img', { alt: "github-user-avatar" })
        expect(image).toBeInTheDocument
    })
})