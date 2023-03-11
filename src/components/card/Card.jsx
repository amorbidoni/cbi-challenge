import React from 'react'
import styles from './Card.module.scss'
function Card() {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card__image}></div>
                <div className={styles.card__content}></div>
            </div>
        </>
    )
}

export default Card
