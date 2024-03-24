import { ReactElement } from 'react';

interface Props {
    children?: ReactElement | ReactElement[] | string;
    clickHandler?: () => void;
    disabled?: boolean;
    title?: string;
    isActive?: boolean;
    modificators?: string[];
    type?: 'submit' | 'reset' | 'button';
}

export default function ButtonItem({ clickHandler, disabled, title, isActive, children, modificators, type }: Props) {
    let classNames = 'button';

    if (isActive) classNames += ' active';
    if (modificators && modificators.length > 0) modificators.forEach(modificator => (classNames += ` button--${modificator}`));

    return (
        <button disabled={disabled} className={classNames} onClick={clickHandler} title={title} type={type}>
            {children}
        </button>
    );
}
