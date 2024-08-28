import {useContext, useState} from 'react'
import { GlobalContext } from "../context/GlobalState";


export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
        setAmount(0)
        setText('')
    }
    
    return (
    <>
        <h3>Add new transaction</h3>
        <form className='form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor='text'>Text</label>
                <input type='text' placeholder='Enter text...' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="amount">
                <label htmlFor='amount'>Amount</label><br/>
                <input type='number' placeholder='Enter amount...' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </>
  )
}
