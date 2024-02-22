import { screen, render, fireEvent } from '@testing-library/react';
import ButtonItem from './ButtonItem';

describe('ButtonItem component test', () => {
    let buttonItem: HTMLButtonElement;

    beforeEach(() => {
        render(
            <ButtonItem
                children={<p>{'test'}</p>}
                clickHandler={() => console.log('test')}
                title={'test'}
                isActive={true}
                modificators={['mod1', 'mod2']}
                type="button"
            />
        );

        buttonItem = screen.getByRole('button');
    });

    test('ButtonItem should have <p></p> tag inside with string "test"', () => {
        const buttonItemChild = buttonItem.children[0];
        expect(buttonItemChild.tagName).toBe('P');
        expect(buttonItemChild).toHaveTextContent('test');
    });

    test('ButtonItem clickHandler test', () => {
        const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => '');
        fireEvent.click(buttonItem);
        expect(consoleSpy).toHaveBeenCalledWith('test');
    });

    test('ButtonItem should have proper classes and attributes', () => {
        expect(buttonItem).toHaveAttribute('title', 'test');
        expect(buttonItem).toHaveAttribute('type', 'button');
        expect(buttonItem).toHaveClass('button button--mod1 button--mod2 active');
    });
});
