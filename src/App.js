import React from 'react'
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

import './App.css';

const contacts = [
  {
    id: "1",
    name: "tushar",
    email: "tushar11223@gmail.com"
  },
  {
    id: "2",
    name: "rohit",
    email: "haeg11231@gmail.com"
  }
];

function App() {
  return (
    <div className="app">
       <Header />
       <AddContact />
       <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
