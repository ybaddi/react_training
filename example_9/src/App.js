import logo from './logo.svg';
import './App.css';



import {Component} from 'react';



import UsersPage from './pages/UsersPage'
import UserPage from './pages/UserPage'

import { BrowserRouter, Route, Link} from 'react-router-dom';


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
       <Link to="/about">About</Link>

       <Route path="/" exact component={HomePage} />
       <Route path="/users" exact component={UsersPage} />
       <Route path="/users/:id" exact component={UserPage} />
       <Route path="/about"  component={AboutPage} />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;