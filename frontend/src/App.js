import React, { useEffect } from 'react';
import './App.css';

import Header from '../src/components/Header'
import Form from '../src/components/Form'
import ReminderList from './components/ReminderList';
import '../src/services/Lembretes'

function App() {
  useEffect(() => {
    fetch('http://localhost:5000')
      .then(response => console.log(response.text()));
    
  }, []);
  return (
    <div className="App">
      <Header/>
      <main>
        <div className='formSide'>
          <Form/>
        </div>
        <div className='remindersSide'>
          <ReminderList>
            <h2>Lista de Lembretes</h2> 
          </ReminderList>
        </div>
      </main>
    </div>
  );
}

export default App;
