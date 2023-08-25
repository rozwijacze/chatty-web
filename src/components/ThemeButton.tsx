interface Props {
    toggleMode: () => void;
}

export const ThemeButton = ({ toggleMode }: Props) => {
    return <button onClick={() => toggleMode()}>Toggle theme</button>;
};
