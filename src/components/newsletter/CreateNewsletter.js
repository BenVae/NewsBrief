import React, {Component} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class CreateNewsletter extends Component {

    constructor (props) {
        super(props);
        this.state = {};
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value}, () => console.log(this.state.content));
    }

    resetState = () => {
        this.setState({title: '', content: ''});
    }


     postNewsletter = () => {

        axios.post('http://localhost:8080/rest/v1/newsletter/', this.state)
            .then(response => {
                alert("POST of Newsletter SUCCESSFULL");
                this.resetState();
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error :(',
                    text: 'FAILED',
                    type: 'error',
                    confirmButtonText: 'hmm ok'
                });
            });
    }

    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">Newsbrief anlayen</h1>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input name={"title"} value={this.state.title} placeholder="Titel eingeben"
                                                   className="form-control py-2 px-2 my-2"
                                                   onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <textarea name={"content"} value={this.state.content} rows="8"
                                                      placeholder="News eingeben"
                                                      className="form-control w-100 px-2 my-2"
                                                      onChange={(event) => this.handleChange(event)}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <a className="btn btn-primary w-100" onClick={this.postNewsletter}>ja
                                                kann so raus</a>
                                        </div>
                                        <div className="col-md-6">
                                            <a className="btn btn-danger w-100" onClick={this.resetState}>doch nicht</a>
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
