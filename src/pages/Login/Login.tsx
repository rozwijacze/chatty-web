import './Login.scss';


interface Props {
    login: () => void;
}

export const Login = (props: Props) => {
    return (
        <>
            <div className="login">
                Login <button onClick={props.login}>zaloguj</button>
            </div>
        </>
    );
};
