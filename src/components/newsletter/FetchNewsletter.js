import React, {Component} from 'react';
import NewsletterContentCard from "./NewsletterContentCard";
import {fetchNewsletterData} from "../../helper/FetchData";



class FetchNewsletter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newsletters: [],
            title: "",
            content: "",
            itemCurrentlyActive: "",
        };
    }

    componentWillMount() {

        fetchNewsletterData().then(newsletterData => {
            this.setState({
                newsletters: newsletterData,
                title: newsletterData[0].title,
                content: newsletterData[0].content,
                itemCurrentlyActive: newsletterData[0].newsletterId
            });
            document.getElementById(this.state.itemCurrentlyActive).classList.add('active');
        })

    }

    updateContentNewsletter = (newsletter) => {

        document.getElementById(this.state.itemCurrentlyActive).classList.remove('active');

        this.setState({
            title: newsletter.title,
            content: newsletter.content,
            itemCurrentlyActive: newsletter.newsletterId
        });

        document.getElementById(newsletter.newsletterId).classList.add('active');

    };

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
                                                <span key={index} id={newsletter.newsletterId}
                                                      onClick={() => this.updateContentNewsletter(newsletter)}
                                                      className="list-group-item list-group-item-action clickable-anchor-tags">
                                                    {newsletter.title}
                                                </span>
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