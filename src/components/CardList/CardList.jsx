import styles from "./style.module.css"

const CardList = ({description , declaredValue , valueType , removeTransactions, id})=>{
   
    console.log(removeTransactions)

    return(
        <li className={valueType == "Entrada" ? styles.Cards : styles.Cardsnone }>
            <div className={styles.contanier_card}>
            <h2>{description}</h2>
            <p>R$ {declaredValue}</p>
            </div>
            <div className={styles.contanier_card}> 
            <p>{valueType}</p>
            <button onClick={()=> removeTransactions(id)}>Excluir</button>
            </div>
        </li>
    )
}

export default CardList