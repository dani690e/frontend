import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getCitatById} from '../context/citat'

const Citat = () => {
    const [citat, setCitat] = useState()
    const { id } = useParams()

    useEffect(() => {
        getCitatById(id).then((citat) => setCitat(citat))
    }, [id])

    const showCitat = citat ? (
        <div className="container">
            <h2 className="text-center">{citat.titel}</h2>
            <p>{citat.citatTekst}</p>
        </div>
    ) : (
        <div className="container text-center">Loading citat...</div>
    )

    return (
        <div>
            {showCitat}
        </div>
    )
}

export default Citat
