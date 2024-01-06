import { ReactNode } from 'react';

interface Props {
    clickHandler?: () => void;
    title?: string;
    isActive?: boolean;
    children?: ReactNode;
    modificators?: string[];
}

export default function ButtonItem({ clickHandler, title, isActive, children, modificators }: Props) {
    let classNames = 'button';

    if (isActive) classNames += ' active';
    if (modificators && modificators.length > 0) modificators.forEach(modificator => (classNames += ` button--${modificator}`));

    return (
        <button className={classNames} onClick={clickHandler} title={title}>
            {children}
        </button>
    );
}
