import React from 'react';
import Header from './Components.js/Header'
import Balance from './Components.js/Balance'
import IncomeExpenses from './Components.js/IncomeExpenses'
import TransactionList from './Components.js/TransactionList'
import {AddTransaction} from './Components.js/AddTransaction'
import {GlobalProvider} from './context/GlobalState'


import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;