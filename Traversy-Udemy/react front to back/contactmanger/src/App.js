import React, { Component } from 'react';
import Contact from './components/Contacts';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
render () {
  return (
    <div className="App"> 
    <Header branding='Contact Manager'/> 
    <div className="container">
    <Contact 
    name='John Doe' 
    email='jdoe@gmail.com' 
    phone='555-555-5555'
    />
    <Contact 
    name='Karen Smith' 
    email='ksmith@gmail.com' 
    phone='333-333-3333'
    />
      </div>      
    </div>
  );
 }
}
export default App;
