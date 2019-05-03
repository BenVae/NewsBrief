import React, {Component} from 'react';
import axios from 'axios';
import NewsletterContentCard from "./NewsletterContentCard";

class FetchNewsletter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newsletters: [],
            title: "",
            content: ""
        };
    }

    componentWillMount() {
        axios.get('http://localhost:8080/rest/v1/newsletter/')
            .then(response => {
                this.setState({newsletters: response.data,
                    title: response.data[0].title, content: response.data[0].content})
            })
            .catch( error => {
                alert(error.toString())
            })
    }

    updateContentNewsletter = (newsletter) => {
         this.setState({
             title: newsletter.title,
             content: newsletter.content
         })
    }

    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><b>NewsBriefe</b></h5>
                                    <div className="list-group">
                                        {
                                            this.state.newsletters.map((newsletter, index) => (
                                                <a href="#" key={index} onClick={() => this.updateContentNewsletter(newsletter)} className="list-group-item list-group-item-action active">
                                                    {newsletter.title}
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <NewsletterContentCard title={this.state.title} content={this.state.content}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FetchNewsletter;