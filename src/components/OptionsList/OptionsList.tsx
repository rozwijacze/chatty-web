import { useRef, useState } from 'react';
import './OptionsList.scss';
import useOnClickOutside from '../../hooks/useOnOutsideClick';
import { useLabels } from '../../hooks/useLabels';

export default function OptionsList() {
    const labels = useLabels();
    const [showList, setShowList] = useState(false);
    const toggleList = () => setShowList(!showList);
    const hideList = () => setShowList(false);

    const listRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    useOnClickOutside([listRef, buttonRef], hideList);

    const buttonActiveClass = showList ? 'options-list__button--active' : '';
    const showListClass = showList ? 'options-list__content--show' : '';

    return (
        <div className="options-list">
            <button className={`options-list__button ${buttonActiveClass}`} ref={buttonRef} onClick={toggleList}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`options-list__content ${showListClass}`} ref={listRef}>
                <li onClick={hideList}>{labels.optionsList.close}</li>
                <li>{labels.optionsList.open}</li>
                <li>{labels.optionsList.block}</li>
                <li>{labels.optionsList.hide}</li>
                <li>{labels.optionsList.delete}</li>
            </ul>
        </div>
    );
}
