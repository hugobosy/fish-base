import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <h1>Zaloguj się!</h1>
            <form>
                <p>
                    <label>
                        Nazwa użytkownika:
                        <input type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Hasło:
                        <input type="password"/>
                    </label>
                </p>
                <button type="submit">Zaloguj</button>
            </form>
            <div>
                <Link to='/'>Powrót do strony głównej</Link>
            </div>
        </>
    )
}

export {Login}