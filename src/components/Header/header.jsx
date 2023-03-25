import styles from "./style.module.css"
import logo from "../../assets/NuKenzie.png"

const Header = ()=>{
    return(
        <header className={styles.header}>
            <div className={styles.img}>
           <img src={logo} alt="logo NuKenzie" />
            </div>
        </header>
    )
}

export default Header