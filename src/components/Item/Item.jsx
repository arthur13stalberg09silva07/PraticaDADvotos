import React, { useState } from 'react';
import styles from './Item.module.css'

const Item = ({key, task, toggleComplete, removeTask, editTask}) => {
    const [newTask, setNewTask] = useState(task.text)
    const [isAnimating, setIsAnimating] = useState(false);
    const [contador, setContador] = useState(0);

    
    const contadorVoto = () => {
        setContador(contador + 1)
    }

    const handleSave = () => {
        editTask(task.id, newTask)
    }

    const handleRemove = () => {
        removeTask(task.id)
    }

    const handleToggleComplete = () => {
        setIsAnimating(true);
        setTimeout(() => {
            toggleComplete(task.id);
            setIsAnimating(false);
        }, 500);
    }

    return (
        <div
            className={[
                styles.item,
                isAnimating
                    ? task.completed
                        ? styles.slideOutRight
                        : styles.slideInLeft
                    : '',
                task.completed ? styles.completed : ''
            ].join(' ')}
        >
            
                <>  
                    <p 
                    className={[task.completed ? styles.completed : '', styles.itemText].join(' ')} onClick={handleToggleComplete}>
                        {task.text}
                    </p>
                    <p>votos: {contador} </p>
                    <div className={styles.buttons}>
                        <p className={styles.editButton} onClick={contadorVoto} >Votar</p>
                        <p className={styles.removeButton} onClick={handleRemove} >X</p>
                    </div>
                </>
            
        </div>
    )
}

export default Item