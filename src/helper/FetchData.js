import newsletterTestdata from "./developmentdata/newsletterTestdata.json";
import {AxiosInstance as axios} from "axios";

export const fetchNewsletterData = function() {
    if (process.env.NODE_ENV !== 'production') {

        return newsletterTestdata;

        /*fetch(jsonData)
            .then(response => {
                this.setState({
                    newsletters: response.data,
                    title: response.data[0].title, content: response.data[0].content
                })
            })
            .catch(error => {
                alert("fail lol")
            })*/
    } else {

        axios.get('addDefaultURL')
            .then(response => {
                this.setState({
                    newsletters: response.data,
                    title: response.data.title, content: response.data.content
                })
            })
            .catch(error => {
                alert("fail lol")
            })
    }
}