import React, {Component} from 'react';
import SearchCustomerCardBody from "./SearchCustomerCardBody";
import CustomerDataCardBody from "./CustomerDataCardBody";
import SendMessageCardBody from "./SendMessageCardBody";


class Message extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <div className="card child flex-grow-1 d-flex flex-column">
                                <SearchCustomerCardBody/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <CustomerDataCardBody/>
                                <SendMessageCardBody/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Message;