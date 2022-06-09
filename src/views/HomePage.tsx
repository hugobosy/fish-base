import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>Twoja baza danych złowionych ryb!</h1>
            <h4>Podaj rybę łowisko, na co, metodę itp</h4>
            <p>
                <Link to='/login'>Zaloguj się </Link>
                lub
                <Link to='/register'> zarejestruj</Link>
            </p>
        </>
    )

}

export {HomePage}