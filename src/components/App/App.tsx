import React from 'react';
import './App.css';
import {Route, Routes} from "react-router";
import {HomePage} from "../../views/HomePage";
import {NotFoundPage} from "../../views/NotFoundPage";
import {Register} from "../../views/Register";
import {Login} from '../../views/Login';

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    );
}

export default App;
