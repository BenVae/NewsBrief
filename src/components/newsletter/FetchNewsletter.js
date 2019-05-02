import React, {Component} from 'react';
import axios from 'axios';

class FetchNewsletter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newsletters: [
                {
                    "id": 1234,
                    "title": "Test 1",
                    "article": "BLALBALSASDLADLASFLKHJASLÖFHLKASHFÖLKJASÖKLDFHÖASDLKjASLKDJASLDKJ"
                },
                {
                    "id": 4321,
                    "title": "Test 2",
                    "article": "BLALBALSASDLADLASFLKHJASLÖFHLKASHFÖLKJASÖKLDFHÖASDLKjASLKDJASLDKJ"
                }
            ]
        };
    }

    /*componentWillMount() {
        axios.get('addDefaultURL')
            .then(response => {
                this.setState({news: response.data.news})
            })
            .catch( error => {
                alert("fail lol")
            })
    }*/

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
                                            //href adden onclick mit funktionsaufruf für textausgabe
                                            this.state.newsletters.map((newsletter, index) => (
                                                <a href="#" key={index} className="list-group-item list-group-item-action active">
                                                    {newsletter.title}
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"><b>Cras justo odio</b></h5>
                                    <p className="card-text">Hier steht Text.&nbsp;Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text. Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier steht Text.Hier
                                        steht Text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FetchNewsletter;