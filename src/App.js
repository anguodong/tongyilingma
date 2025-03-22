import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={StudentList} />
                    <Route path="/add" component={AddStudent} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;