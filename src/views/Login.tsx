import React, {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";
import {admin, User} from "../data/admin";

const Login = () => {


    const [login, setLogin] = useState<User>({
        username: '',
        password: '',
        correct: null,
    })


    const handleChange = ({target: {type, value}}: ChangeEvent<HTMLInputElement>): void => {
        switch(type) {
            case 'text':
                setLogin({
                    ...login,
                    username: value,
                })
                break;
            case 'password':
                setLogin({
                    ...login,
                    password: value,
                })
                break;
        }
    }

    const handleSubmit = (e: { preventDefault: () => void; }):void => {
        e.preventDefault();
        admin.username === login.username && admin.password === login.password ? setLogin({...login, correct: true}) : setLogin({...login, correct: false})
    }

    return (
        <>
            <h1>Zaloguj się!</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        Nazwa użytkownika:
                        <input type="text" value={login.username} onChange={handleChange}/>
                    </label>
                </p>
                <p>
                    <label>
                        Hasło:
                        <input type="password" value={login.password} onChange={handleChange}/>
                    </label>
                </p>
                <button type="submit">Zaloguj</button>
            </form>
            <div>
                <Link to='/'>Powrót do strony głównej</Link>
            </div>
            {login.correct === null ? null : login.correct ? null : <p>Dane logowania są nieprawidłowe</p>}
        </>
    )
}

export {Login}