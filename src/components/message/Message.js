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
            selectedCustomerArrayIndex: "0"
        };

        this.selectCustomer = this.selectCustomer.bind(this);
    }

    componentWillMount() {
        fetchCustomerdata().then(customerData =>{
            this.setState({
                customers: customerData
            })
        });
    }

    selectCustomer = (customerId) =>{

        let element = this.state.customers.findIndex(function(customer, index){
            return customer.customerId === customerId
        });

        this.setState({
            selectedCustomerArrayIndex: element
        });
    };

    render() {

        if (this.state.customers.length === 0) return <div>noch keine daten</div>

        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 d-flex">
                            <SearchCustomerCard customers={this.state.customers} selectCustomer={this.selectCustomer}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <CustomerDataCardBody customer={this.state.customers[this.state.selectedCustomerArrayIndex]}/>
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