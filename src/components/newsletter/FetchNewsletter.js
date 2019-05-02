import React, {Component} from 'react';
import axios from 'axios';


class FetchNewsletter extends Component {

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
                                        <a href="#" onClick={getNewsletter} className="list-group-item list-group-item-action active"> Neuigkeitenletter 1 </a>
                                        <a href="#" className="list-group-item list-group-item-action">Titel 2</a>
                                        <a href="#" className="list-group-item list-group-item-action">Titel 3</a>
                                        <a href="#" className="list-group-item list-group-item-action">Neuigkeitenbrief 4</a>
                                        <a href="#" className="list-group-item list-group-item-action">Newsletter 5</a>
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