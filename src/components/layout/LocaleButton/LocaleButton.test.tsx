import { render, screen, fireEvent } from '@testing-library/react';
import LocaleButton from './LocaleButton';
import LocaleContextProvider from '@contexts/LocaleContext';
import labels_EN from '@data/translations/Labels_EN';
import labels_PL from '@data/translations/Labels_PL';

describe('LocaleButton component test', () => {
    let localeButton: HTMLButtonElement;

    beforeEach(() => {
        render(
            <LocaleContextProvider>
                <LocaleButton />
            </LocaleContextProvider>
        );

        localeButton = screen.getByRole('button');
    });

    test('LocaleButton initially should have title with english label', () => {
        expect(localeButton).toHaveAttribute('title', labels_EN.buttons.locale);
    });

    test('LocaleButton should have <span> elements with proper content, first element should have locale--active', () => {
        for (let i = 0; i < localeButton.children.length; i++) {
            const currentChild = localeButton.children[i];
            expect(currentChild.tagName).toBe('SPAN');

            switch (i) {
                case 0:
                    expect(currentChild).toHaveClass('locale locale--active');
                    expect(currentChild).toHaveTextContent('en');
                    break;

                case 1:
                    expect(currentChild).toHaveTextContent('/');
                    break;

                case 2:
                    expect(currentChild).toHaveTextContent('pl');
            }
        }
    });

    test('Check if the LocaleButton title is switched to polish and third span element has locale--active modificator after click event', () => {
        fireEvent.click(localeButton);
        expect(localeButton).toHaveAttribute('title', labels_PL.buttons.locale);
        expect(localeButton.children[2]).toHaveClass('locale locale--active');
    });
});
