import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllCitater } from '../context/citat'

const Citater = () => {

    const [citater, setCitater] = useState([])

    useEffect(() => {
        getAllCitater().then((citater) => setCitater(citater))
    }, [])

    const citatList = citater.length ? (
        citater.map(citat => {
            return (
                <div className="col-md-6" key={citat._id}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">{citat.titel}</h4>
                            <p className="card-text">{citat.citatTekst}</p>
                            <Link to={`/citat/${citat._id}`}>Læs mere</Link>
                        </div>
                    </div>
                </div>

            )
        })
    ) : (
            <div>
                <h4>Can't find any citater</h4>
            </div>
        );

    return (
        <div className="container">
            <h4 className="text-center">Alle citater</h4>
            <div className="row">
                {citatList}
            </div>
        </div>
    )
}

export default Citater
