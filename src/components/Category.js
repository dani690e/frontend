import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCitatByKad } from './context/citat'
import { getCategoryById } from './context/category'

const Category = () => {
    const [citater, setCitater] = useState([]);
    const [categoryname, setCategoryname] = useState()
    const { category_id } = useParams();

    useEffect(() => {
        getCitatByKad(category_id).then((citater) => setCitater(citater))
        getCategoryById(category_id).then((Category) => setCategoryname(Category.katogorinavn))
    }, [category_id])

    const citatListe = citater.length ? (
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
            <div className="container">
                <h4 className="mt-4 text-center">Can't find any citater</h4>
            </div>
        );

    return (
        <div className="container">
            <h4 className="text-center">{categoryname}</h4>
            <div className="row">
                {citatListe}
            </div>
        </div>
    )
}

export default Category
