import React, { useEffect, useState } from 'react';
import styles from './styles/App.module.scss';
import Header from '../src/components/Header';
import Form from '../src/components/Form';
import ReminderList from './components/ReminderList';
import { obterLembretes } from '../src/services/Lembretes';

function App() {
  const [lembretes, setLembretes] = useState({});

  const fetchLembretes = async () => {
    try {
      const lembretesData = await obterLembretes();
      setLembretes(lembretesData);
    } catch (error) {
      console.error('Erro ao obter lembretes:', error);
    }
  };

  useEffect(() => {
    fetchLembretes();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section className={styles.formSide}>
          <Form fetchLembretes={fetchLembretes} />
        </section>
        <section className={styles.reminderSide}>
          <fieldset>
          <legend><h2>Lista de Lembretes</h2></legend>
          <ReminderList lembretes={lembretes} setLembretes={setLembretes} />
          </fieldset>
        </section>
      </main>
    </div>
  );
}

export default App;
