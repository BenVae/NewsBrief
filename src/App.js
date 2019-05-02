import React, {Component} from 'react';
import './App.css';
import Routes from './components/route/Routes'
import Navbar from '../src/components/navbar/Navbar'
import Footer from '../src/components/footer/Footer'


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <header className="App-header">
                    <Routes/>
                </header>
                <Footer/>
            </div>
        );
    }
}
