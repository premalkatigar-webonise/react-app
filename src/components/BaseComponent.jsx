import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import UserComponent from './user/UserComponent';

function BaseComponent(){
    return(
        <BrowserRouter>
            <Route path="/" component = {UserComponent} />
        </BrowserRouter>
    )
}

export default BaseComponent;