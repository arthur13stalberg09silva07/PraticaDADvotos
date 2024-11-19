import React, { useState } from 'react';
import styles from './CandidateList.module.css'
import TodoItem from '../Item/Item'

const CandidateList = ({tasks, toggleComplete, removeTask, editTask}) => {

    return (
        <div className={styles.allTasks}>
            <ul className={styles.tasks}>
                {
                    tasks.map((task) => (
                        <TodoItem 
                            key={task.id}
                            task={task}
                            toggleComplete={toggleComplete}
                            removeTask={removeTask}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default CandidateList