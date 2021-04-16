import React from 'react'
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { TransactionList } from './Components/TransactionList'
import { IncomeExpenses } from './Components/IncomeExpenses'
import { AddTransaction } from './Components/AddTransaction'

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList/>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
