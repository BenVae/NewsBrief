import newsletterTestdata from "./developmentdata/newsletterTestdata.json";
import customerTestdata from "./developmentdata/customerTestdata";
import {AxiosInstance as axios} from "axios";

export const fetchNewsletterData = function() {
    if (process.env.NODE_ENV !== 'production') {

        return newsletterTestdata;

    } else {
        return axios.get('http://localhost:8080/rest/v1/newsletter/')
            .then(response => response.data)
            .catch(error => {
                alert(error.toString());
            })
    }
};
export const fetchCustomerdata = function() {
    if (process.env.NODE_ENV !== 'production') {

        return customerTestdata;

    } else {

        axios.get('addDefaultURL')
            .then(response => {
                this.setState({
                    newsletters: response.data,
                    title: response.data[0].title,
                    content: response.data[0].content,
                    itemCurrentlyActive: response.data[0].newsletterId
                })
            })
            .catch(error => {
                alert(error.toString());
            })
    }
};