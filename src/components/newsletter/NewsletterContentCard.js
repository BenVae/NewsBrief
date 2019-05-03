import React, {Component} from 'react';

class NewsletterContentCard extends Component {
    render() {
        return (
        <div className="card h-100">
            <div className="card-body">
                <h5 className="card-title"><b>{this.props.title}</b></h5>
                <p className="card-text">
                    {this.props.content}
                </p>
            </div>
        </div>
        )
    }
}

export default NewsletterContentCard;