import { useNavigate } from "react-router-dom"
import ProjectForm from "../project/ProjectForm"
import styles from "./NewProject.module.css"

function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {
        //innitialize costs and serviçes
        project.costs = 0
        project.services = []
        console.log("Dados do projeto:", project)
        fetch("http://localhost:5000/projects", {
            method: "post",
            headers: {
                "Content-type" : "application/json"
            },
            body:JSON.stringify(project),
        }).then((res) => {
            return res.json()
        }).then((e) => navigate('/projects', { state: { message: 'Projeto criado com sucesso!' }})
        ).catch((err) => {
            console.log("Houve um erro" + err)
        })

    }
    

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject