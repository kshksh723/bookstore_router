import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Okay from '../routes/Okay';
import Home from '../routes/Home';
import Header from './Header';

const AppRouter = () => {

    return(
            <BrowserRouter>
                    <Header/>
                    <Route path="/" component={Home} />
                    <Route path="/Okay" component={Okay} />
            </BrowserRouter>
    )
}


export default AppRouter