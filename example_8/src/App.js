import logo from './logo.svg';
import './App.css';
import { Component} from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
 

const HomePage = () => <div>Home</div>
const AboutPage = () => <div>About</div>
const ContactUsPage = () => <div>ContactUs</div>

class App extends Component{
  render(){
  return (
    <BrowserRouter >
    <div className="App">
      <Link to="/">Home</Link> {" "}
      <Link to="/about">About</Link> {" "}
      <Link to="/contactus">ContactUS</Link> {" "}
     
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contactus" component={ContactUsPage} />
      
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
