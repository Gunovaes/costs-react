import { useEffect, useState } from "react"

import styles from "./ProjectForm.module.css"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    //faz a requisição dos dados da rota /categories
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-type":"application/json"
            } 
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setCategories(data)
        }).catch((err) => {
            console.log("Houve um erro" + err)
        })

    }, [])

    //envia od dados do forumário
    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    //altera os dados coletados até o momento no formulário
    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
        console.log(project)
    }

    //formulário
    return (
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input type="text" 
                text="Nome do Projeto" 
                name="name" 
                placeholder="Insira o nome do Projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name: ""}
                />
            </div>
            <div>
                <Input type="number" 
                text="Orçamento do projeto" 
                name="budget" 
                placeholder="Insira o orçamento total" 
                handleOnChange={handleChange}
                value={project.budget ? project.budget: ""}
                />
            </div>
            <div>
                <Select 
                name="category_id" 
                text="Selecione a categoria:" 
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id: ""}
                />
            </div>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm