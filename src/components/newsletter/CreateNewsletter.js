import React, {Component} from 'react';

export default class CreateNewsletter extends Component {

    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title" contentEditable="true">Newsbrief anlayen</h1>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input placeholder="Titel eingeben" className="form-control py-2 my-2"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <textarea rows="8" placeholder="News eingeben"
                                                      className="w-100 px-1 my-2"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6"><a className="btn btn-primary w-100">ja kann
                                            so raus</a></div>
                                        <div className="col-md-6"><a className="btn btn-danger w-100">doch
                                            nicht</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header"> aktuellster neuigkeitenletter!</div>
                                        <div className="card-body">
                                            <p>wie heißt der bürgermeister von wesel</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header"> 2.neuster neusbrief</div>
                                        <div className="card-body">
                                            <p>esel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}