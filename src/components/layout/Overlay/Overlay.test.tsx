import { screen, render, fireEvent } from '@testing-library/react';
import Overlay from './Overlay';

describe('Overlay component test', () => {
    let overlayEl: Element;

    beforeEach(() => {
        render(
            <div data-testid="container">
                <Overlay clickHandler={() => console.log('test')}>
                    <p>test</p>
                </Overlay>
            </div>
        );

        const container = screen.getByTestId('container');
        overlayEl = container.getElementsByClassName('overlay')[0];
    });

    test('Overlay clickHandler test', () => {
        const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => '');
        fireEvent.click(overlayEl);
        expect(consoleSpy).toHaveBeenCalledWith('test');
    });

    test('Overlay should have sibling <p></p> tag with string "test"', () => {
        const previousElSibling = overlayEl.previousElementSibling;
        expect(previousElSibling).toHaveTextContent('test');
        expect(previousElSibling?.tagName).toBe('P');
    });
});
