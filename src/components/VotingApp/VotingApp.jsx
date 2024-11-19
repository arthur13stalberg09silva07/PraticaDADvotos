import React, { useState, useEffect } from 'react';
import styles from './VotingApp.module.css'

import TodoForm from '../CandidateForm/CandidateForm'
import TodoFilter from '../VotesSummary/VotesSummary'
import TodoList from '../CandidateList/CandidateList'

const VotingApp = ({}) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('todoTasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState(() => {
        return localStorage.getItem('todoFilter') || '';
    });

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setTasks([...tasks, newTask])
    }

    const editTask = (taskId, newText) => {
        setTasks (
            tasks.map((task) =>
                task.id === taskId ? {...task, text: newText} : task
            )
        )
    }

    const removeTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)
    }


    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed
        if (filter === 'incompleted') return !task.completed
        return true
    })

    useEffect(() => {
        localStorage.setItem('todoTasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('todoFilter', filter);
    }, [filter]);

    return (
        <div className={styles.card}>
            <div className={styles.cardInfo}>
                <div className={styles.cardHeader}>
                    <h1 className={styles.title}>App Votos</h1>
                </div>
                <TodoForm addTask={addTask} />
                <TodoList 
                tasks={filteredTasks}
                removeTask={removeTask}
                />
                <TodoFilter filter={filter} setFilter={setFilter} />
            </div>
        </div>
    )
}

export default VotingApp