import { useState } from 'react'
import './App.css'
import Form from './components/Form/form'
import Header from './components/Header/header'
import CardList from './components/CardList/CardList'
import TotalMoney from './components/TotalMoney/TotalMoney'



function App() {
  const [listTransactions, setListTransactions] = useState([])


const removeTransactions = (transactionsId) => {
const newListTransactions = listTransactions.filter(transactions => transactions.id !== transactionsId);
setListTransactions(newListTransactions)
}



  return (
    
    <div className="App">
      <Header />
    <div className="contanier">
    <section className="contanier_form">
      <Form listTransactions={listTransactions} setListTransactions = {setListTransactions} />
      <TotalMoney listTransactions={listTransactions} />
    </section>

    <section className="contanier_list">

    <h2 className="resumo">Resumo financeiro</h2>

    {listTransactions.length > 0 ?(
      <ul>
      {listTransactions.map(({description , declaredValue , valueType, id})=>{
        return(
         <CardList key={id} description={description} declaredValue={declaredValue} valueType={valueType} removeTransactions = {removeTransactions} id = {id}/>
        )
      })}
     </ul>
      ) : (
      <h3 className='lançamento'>Você ainda não possui nenhum lançamento</h3>
      )
    }
      </section>
    
    </div>
    </div>
  )
}

export default App
