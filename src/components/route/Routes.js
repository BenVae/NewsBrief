import React, { Component } from 'react';
import App from '../../App';
import Message from '../../components/message/Message'
import { BrowserRouter, Route } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="/" exact component={Message} />
            <Route path="/test" component={App} />
            </BrowserRouter>
        )
    }

}

export default Routes;