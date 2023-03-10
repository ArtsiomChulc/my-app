import React, { useState } from 'react';
import { FilterValuesType } from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    // removeTask: (taskId: number) => void
    setTasks: (tasks: TaskType[]) => void
    // changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {

    function removeTask(id: number) {
        let filteredTasks = props.tasks.filter(t => t.id !== id);
        props.setTasks(filteredTasks);
    }
    let [filter, setFilter] = useState<FilterValuesType>("all");
    let tasksForTodolist = props.tasks;

    if (filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    if (filter === "delall") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true && false);
    }
    if (filter === "threetasks") {
        tasksForTodolist = props.tasks.slice(0, 3)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input />
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={() => { removeTask(t.id) }}>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={() => changeFilter("delall")}>Delete All tasks</button>
        </div>
        <div>
            <button onClick={() => { changeFilter("all") }}>
                All
            </button>
            <button onClick={() => { changeFilter("active") }}>
                Active
            </button>
            <button onClick={() => { changeFilter("completed") }}>
                Completed
            </button>
            <button onClick={() => { changeFilter("threetasks") }}>
                the first 3 tasks are visible
            </button>
        </div>
    </div>
}

























//------------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {FilterValuesType} from './App';
//
// type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     //changeFilter: (value: FilterValuesType) => void
//     deleteAllTasks:()=>void
// }
//
// export function Todolist(props: PropsType) {
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = props.tasks;
//
//     if (filter === "three") {
//         tasksForTodolist = props.tasks.filter(t => t.id<4);
//     }
//     if (filter === "active") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input/>
//             <button>+</button>
//         </div>
//         <ul>
//             {
//                 tasksForTodolist.map(t => <li key={t.id}>
//                     <input type="checkbox" checked={t.isDone}/>
//                     <span>{t.title}</span>
//                     <button onClick={ () => { props.removeTask(t.id) } }>x</button>
//                 </li>)
//             }
//         </ul>
//         <button onClick={()=>props.deleteAllTasks()}>DELETE ALL TASKS</button>
//         <div>
//             <button onClick={ () => { changeFilter("three") } }>
//                 Give me the first three
//             </button>
//             <button onClick={ () => { changeFilter("all") } }>
//                 All
//             </button>
//             <button onClick={ () => { changeFilter("active") } }>
//                 Active
//             </button>
//             <button onClick={ () => { changeFilter("completed") } }>
//                 Completed
//             </button>
//         </div>
//     </div>
// }