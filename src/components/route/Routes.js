import React, { Component } from 'react';
import App from '../../App';
import Message from '../../components/message/Message'
import { BrowserRouter, Route } from 'react-router-dom';
import fetchNewsletter from "../newsletter/fetchNewsletter";

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="/" exact component={Message} />
            <Route path="/test" component={App} />
            <Route path="/fetchNewsletter" component={fetchNewsletter} />
            </BrowserRouter>
        )
    }

}

export default Routes;