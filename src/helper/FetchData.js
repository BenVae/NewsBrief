import newsletterTestdata from "./developmentdata/newsletterTestdata.json";
import axios from "axios";


export const fetchNewsletterData = function () {
    if (process.env.NODE_ENV !== 'production') {
        console.log(process.env.NODE_ENV);
        alert("i am in development");
        console.log(newsletterTestdata);
        return newsletterTestdata;
    } else {
        alert("i am in production");
        return axios.get('http://localhost:8080/rest/v1/newsletter/')
            .then(response => response.data)
            .catch(error => {
                alert(error.toString());
            })
    }
};