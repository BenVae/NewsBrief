import React, { Component } from 'react';
import App from '../../App';
import Message from '../../components/message/Message'
import { BrowserRouter, Route } from 'react-router-dom';
import FetchNewsletter from "../newsletter/FetchNewsletter";
import Landing from "../index/Landing";

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/landing" component={Landing} />
            <Route path="/message" component={Message} />
            <Route path="/test" component={App} />
            <Route path="/fetchNewsletter" component={FetchNewsletter} />
            </BrowserRouter>
        )
    }

}

export default Routes;