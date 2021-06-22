import { Link, useHistory } from "react-router-dom";

export default function Login() {
    let history = useHistory();

    function userLogin(event){
        event.preventDefault();
        history.push("/home");
    }

    return (
        <div className="page">
            <div>
                <div className="brand-name">My Wallet</div>
                <div className="user-interactions">
                    <form onSubmit={userLogin}>
                        <input placeholder="E-mail"></input>
                        <input placeholder="Senha"></input>
                        <button type="submit">Entrar</button>
                    </form>
                    <Link to="/signin" className="link"><div>Primeira vez? Cadastre-se!</div></Link>
                </div>
            </div>
        </div>     
    );
}