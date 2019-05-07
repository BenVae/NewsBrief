import React, {Component} from 'react';
import SearchCustomerCard from "./SearchCustomerCard";
import CustomerDataCardBody from "./CustomerDataCardBody";
import SendMessageCardBody from "./SendMessageCardBody";
import {fetchCustomerdata} from "../../helper/FetchData";


class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            selectedCustomer: ""
        };
    }

    componentWillMount() {
        fetchCustomerdata().then(customerData =>{
            this.setState({
                customers: customerData
            })
        });
    }

    selectCustomer= (customerId) =>{
        this.setState({
            selectedCustomer: customerId
        })
    };

    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <SearchCustomerCard customers={this.state.customers}/>
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