import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './components/welcome-page';
import TasksPage from './components/tasks-page';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={WelcomePage}/>
                    <Route path='/tasks' component={TasksPage}/>
                </div>
            </Router>
        )
    }
}

export default App;
