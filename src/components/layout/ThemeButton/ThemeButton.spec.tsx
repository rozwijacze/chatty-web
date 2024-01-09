import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import ThemeButton from './ThemeButton';

describe('ThemeButton test', () => {
    test('Should define button', () => {
        render(<ThemeButton />);
        expect(screen.getByTitle(/Toggle theme/i)).toBeDefined();
    });
});
