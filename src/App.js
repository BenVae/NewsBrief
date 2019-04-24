import React, {Component} from 'react';
import './App.css';
import Routes from './components/route/Routes'
import Navbar from '../src/components/navbar/Navbar'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <header className="App-header">
                    <Routes/>
                </header>
            </div>
        );
    }
}

export default App;
