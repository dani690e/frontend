import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import {getCitatById, editCitat} from '../context/citat'
import {getAllCategories} from '../context/category'

const EditCitat = () => {
    const [citat, setCitat] = useState({
        titel: "",
        citatTekst: "",
        kategori: ""
    })
    const [redirect, setRedirect] = useState(false)
    const [categories, setCategories] = useState([]);
    const { citat_id } = useParams()

    useEffect(() => {
        getCitatById(citat_id).then((citat) => {
            setCitat({...citat, kategori:citat.kategori._id})
        })
        getAllCategories().then((category) => setCategories(category))
    }, [citat_id])

    if(redirect) return <Redirect to="/dashboard" />

    function handleSubmit(e) {
        e.preventDefault()
        editCitat(citat_id, citat).then(() => setRedirect(true))
    }

    const categoryList = categories.length ? (
        categories.map(category => {
            return (
                <option key={category._id} value={category._id}>{category.kategorinavn}</option>
            )
        })
    ) : (
            <option>Loading Kategori</option>
        );


    const showCitat = citat ? (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="InputTitel">Titel</label>
                    <input type="text" className="form-control" id="InputTitel" aria-describedby="titelHelp" placeholder="Indsæt titel her" required value={citat.titel} onChange={(e) => setCitat({...citat, titel: e.target.value})}/>
                    <small id="titelHelp" className="form-text text-muted">En titel er et navn eller overskrift på et større eller mindre værk, fx en bog, en film eller en melodi.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="InputTekst">Citat tekst</label>
                    <input type="text" className="form-control" id="InputTekst" aria-describedby="textHelp" placeholder="Indsæt dit citat her" required value={citat.citatTekst} onChange={(e) => setCitat({...citat, citatTekst: e.target.value})}/>
                    <small id="textHelp" className="form-text text-muted">Et citat er en mindre del af noget sagt eller skrevet der gengives ordret</small>
                </div>
                <div className="form-group">
                    <label htmlFor="selectKategori">Vælg kategori</label>
                    <select className="form-control" id="selectKategori" aria-describedby="selectHelp" value={citat.kategori} onChange={(e) => setCitat({ ...citat, kategori: e.target.value })}>
                        {categoryList}
                    </select>
                    <small id="selectHelp" className="form-text text-muted">En kategori er en gruppe eller klasse af mennesker eller genstande ordnet efter visse fælles karakteristiske træk eller egenskaber</small>
                </div>
                <button type="submit" className="btn btn-primary">Ret</button>
            </form>
        </div>
    ) : (
        <div></div>
    )

    return (
        <div>
            {showCitat}
        </div>
    )
}

export default EditCitat
