import { ReactComponent as SearchIcon } from '@assets/search.svg';
import './Searchbar.scss';
import { useLabels } from '@hooks/useLabels';

interface Props {
    inputVal: string;
    setInputVal: (inputVal: string) => void;
}

export default function Searchbar({ inputVal, setInputVal }: Props) {
    const labels = useLabels();
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => setInputVal(event.currentTarget.value);
    const handleInputClear = () => setInputVal('');

    return (
        <div className="searchbar">
            <input type="text" placeholder={labels.searchbar.placeholder} value={inputVal} onChange={handleInputChange} />
            {inputVal.length > 0 ? (
                <div className="searchbar__icon searchbar__icon--clear" onClick={handleInputClear} title={labels.searchbar.clear}>
                    <span></span>
                    <span></span>
                </div>
            ) : (
                <SearchIcon className="searchbar__icon" />
            )}
        </div>
    );
}
