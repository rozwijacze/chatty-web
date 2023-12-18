import { ReactNode } from 'react';
import './ButtonItem.scss';

interface Props {
    clickHandler?: () => void;
    title?: string;
    isActive?: boolean;
    children?: ReactNode;
    modificators?: string[];
}

export default function ButtonItem({ clickHandler, title, isActive, children, modificators }: Props) {
    let classNames = 'btn-item';

    if (isActive) classNames += ' active';
    if (modificators && modificators.length > 0) modificators.forEach(modificator => (classNames += ` btn-item--${modificator}`));

    return (
        <button className={classNames} onClick={clickHandler} title={title}>
            {children}
        </button>
    );
}
