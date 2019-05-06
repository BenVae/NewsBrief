import React, {Component} from 'react';
import SearchCustomerCard from "./SearchCustomerCard";
import CustomerDataCardBody from "./CustomerDataCardBody";
import SendMessageCardBody from "./SendMessageCardBody";


class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            title: "",
            content: ""
        };
    }

    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <SearchCustomerCard/>
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