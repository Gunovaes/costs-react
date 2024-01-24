import svg from "../../img/savings.svg"
import styles from "./Home.module.css"
import LinkButton from "../layout/LinkButton"

function Home() {
    return(
        <div className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar seus projetos agora mesmo</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={svg} alt="img"/>
        </div>
    )

}

export default Home