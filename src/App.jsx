import { Header } from "./components/Header"
import Balance from "./components/Balance"
import './App.css'
import { IncomeExpenses } from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import { AddTransaction } from "./components/AddTransaction"

import { GlobalProvider } from "./context/GlobalState"

function App() {
 

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
      </div>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  )
}

export default App
