import Avatar from '.';
import { screen } from '@testing-library/react';

describe('Avatar', () => {
    test('it shows a users avatar', () => {
        renderWithReduxProvider(<Avatar />)
        const image = screen.getByRole('img', { alt: "github-user-avatar" })
        expect(image).toBeInTheDocument
    })
})