import './Overlay.scss';

interface Props extends React.PropsWithChildren {
    clickHandler: () => void;
}

export default function Overlay({ clickHandler, children }: Props) {
    return (
        <>
            {children}
            <div className="overlay" onClick={clickHandler}></div>
        </>
    );
}
