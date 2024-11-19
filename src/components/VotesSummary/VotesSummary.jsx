import React, { useState } from 'react';
import styles from './VotesSummary.module.css'

const VotesSummary = ({filter, setFilter}) => {

    return (
        <div>
        <h1>Votos Totais: </h1>
        <p>Candidato Vencedor: <></> com <></> votos!</p>
        </div>
    )
}

export default VotesSummary