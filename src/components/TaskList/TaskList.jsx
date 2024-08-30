import styles from './TaskList.module.css'

import {TaskItem} from "./TaskItem/TaskItem"

export function TaskList() {

    const listaTarefas = [
        {id: 1, tarefa: "Estudar"},
        {id: 2, tarefa: "Lavar a louça"},
        {id: 3, tarefa: "Ir a acads"}
    ]


    return (
        <ul className={styles.TaskList}>

            <TaskItem texto={listaTarefas[2].tarefa}/>
            <TaskItem texto={listaTarefas[0].tarefa}/>
            <TaskItem texto={listaTarefas[1].tarefa}/>

            

        </ul>
    )
}