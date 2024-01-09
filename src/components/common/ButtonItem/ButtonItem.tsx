import { ReactElement } from 'react';

interface Props {
    children: ReactElement | string;
    clickHandler?: () => void;
    title?: string;
    isActive?: boolean;
    modificators?: string[];
    type?: 'submit' | 'reset' | 'button';
}

export default function ButtonItem({ clickHandler, title, isActive, children, modificators, type }: Props) {
    let classNames = 'button';

    if (isActive) classNames += ' active';
    if (modificators && modificators.length > 0) modificators.forEach(modificator => (classNames += ` button--${modificator}`));

    return (
        <button className={classNames} onClick={clickHandler} title={title} type={type}>
            {children}
        </button>
    );
}
