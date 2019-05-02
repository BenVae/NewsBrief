import React, {Component} from 'react';


class Landing extends Component {
    render() {
        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-1 text-center">Neuigkeitenletter</h1>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="lead text-center">Willkommen zu Newsbrief, deiner Seite für die
                                        newesten Neuigkeiten.
                                        Melde dich jetzt an, um deinen Neuigkeitenbrief abzurufen.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <form className="">
                                        <div className="form-group"><label>Email address</label>
                                            <input type="email" className="form-control w-50 mx-auto" placeholder="Enter email" required="required">
                                            </input>
                                            <small className="form-text text-muted">We'll definitely share your e-mail, 'cause thats how we make money.</small>
                                            </div>
                                        <div className="form-group"><label>Password</label>
                                            <input type="password" className="form-control w-50 mx-auto" placeholder="Password" required="required">
                                            </input>
                                        </div>
                                        <button type="submit" className="btn btn-primary">reinloggen</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Landing;