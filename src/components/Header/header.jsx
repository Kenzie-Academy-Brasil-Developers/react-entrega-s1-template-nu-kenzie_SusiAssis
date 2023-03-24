import styles from "./style.module.css"
import logo from "../../assets/NuKenzie.png"

const Header = ()=>{
    return(
        <header className={styles.header}>
           <img src={logo} alt="logo NuKenzie" />
        </header>
    )
}

export default Header