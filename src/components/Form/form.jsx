import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from "./style.module.css"

const Form = ({listTransactions, setListTransactions})=>{

    const [transactions, setTransactions] = useState({
        description:"",
        declaredValue:"",
        valueType:"Entrada",
    })


     const submit = (event)=>{
        event.preventDefault()

        const newObject = {
            ...transactions,
            "id":uuidv4(),
            declaredValue: Number(transactions.declaredValue)
        }
        
        setListTransactions([...listTransactions,newObject])
     }
    
    
    return(
        <form className={styles.Form} onSubmit = {(event)=>submit(event)}>
            <label>Descrição</label>
            <input placeholder="Digite aqui sua descrição" value={transactions.description} onChange={(event)=> setTransactions({...transactions , description:event.target.value})}/>

            <label>Valor R$</label>
            <input placeholder="1" value={transactions.declaredValue} onChange={(event)=> setTransactions({...transactions , declaredValue:event.target.value})}/>

            <label>Tipo de valor</label>
            <select value={transactions.valueType} onChange={(event)=> setTransactions({...transactions , valueType: event.target.value})}>
                <option>Entrada</option>
                <option>Despesa</option>
            </select>

            <button type="submit">Inserir valor</button>
        </form>
    )
}

export default Form