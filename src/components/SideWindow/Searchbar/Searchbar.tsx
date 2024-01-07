import { ReactComponent as SearchIcon } from '@assets/search.svg';
import './Searchbar.scss';
import { useLabels } from '@hooks/useLabels';

interface Props {
    searchedValue: string;
    setSearchedValue: (inputVal: string) => void;
}

export default function Searchbar({ searchedValue, setSearchedValue }: Props) {
    const labels = useLabels();
    const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => setSearchedValue(event.currentTarget.value);
    const handleInputClear = () => setSearchedValue('');

    return (
        <div className="searchbar">
            <input type="text" placeholder={labels.searchbar.placeholder} value={searchedValue} onChange={handleInputChange} />
            {searchedValue ? (
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
