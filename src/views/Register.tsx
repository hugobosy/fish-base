import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <>
            <h1>Zarejestruj się !</h1>
            <form>
                <p>
                    <label>
                        Nazwa uzytkownika
                        <input type="text"/>
                    </label>
                </p>
                <p>
                    <label>
                        Hasło
                        <input type="password"/>
                    </label>
                </p>
                <p>
                    <label>
                        Powtórz hasło
                        <input type="password"/>
                    </label>
                </p>
                <p>
                    <label>
                        Płeć
                        <select>
                            <option value="-">-</option>
                            <option value="man">Mężczyzna</option>
                            <option value="woman">Kobieta</option>
                        </select>
                    </label>
                </p>
                <button type="submit">Zarejestruj</button>
            </form>
            <div>
                <Link to="/">Powrót do strony głównej</Link>
            </div>
        </>
    )
}

export {Register}