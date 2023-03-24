//import { useState } from "react"
import styles from "./style.module.css"


const TotalMoney = ({listTransactions})=>{

const amount = listTransactions.reduce((previousValue,currentValue)=>{
    return currentValue.valueType == "Entrada" ? previousValue+Number(currentValue.declaredValue) : previousValue-Number(currentValue.declaredValue)
},0)



return(

    <div className={styles.total}>
    <h2>Valor Total: <span>R${amount}</span></h2>
    <p>O valor se refere ao saldo</p>
    </div>
)
}

export default TotalMoney

