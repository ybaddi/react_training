import logo from './logo.svg';
import './App.css';



import {Component} from 'react';



import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import EditUserPage from './pages/EditUserPage';
import CreateUserPage from './pages/CreateUserPage';

import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';


const HomePage = () => <div>Home</div>
const AboutPage = () => <div>About</div>
const ContactUsPage = () => <div>ContactUs</div>

class App extends Component {

  render(){
  return (
    <BrowserRouter >
    <div className="App">
       <Link to="/">Home</Link>
       <Link to="/users">Users</Link>
       <Link to="/users/create">Create User</Link>
       <Link to="/about">About</Link>

      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/users/create" exact component={CreateUserPage} />
          <Route path="/users/:id" exact component={UserPage} />
          <Route path="/users/edit/:id" exact component={EditUserPage} />
          <Route path="/about"  component={AboutPage} />
       </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
