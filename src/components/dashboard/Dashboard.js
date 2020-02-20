// Dashboard fetching all data
import React, { useEffect, useState, useRef } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { getAllCitater, deleteCitatById } from '../context/citat'
import { uploadFile } from '../context/uploadFile'
import { FaPen, FaTrash } from 'react-icons/fa'

const Dashboard = () => {
    const [citater, setCitater] = useState([])
    const [id, setId] = useState()
    const [redirect, setRedirect] = useState(false)

    const inputUpload = useRef(null);

    useEffect(() => {
        getAllCitater().then((citater) => setCitater(citater))
    }, [])

    if (redirect) {
        return <Redirect to={`/dashboard/edit/${id}`}></Redirect>
    }

    function handleDelete(id) {
        let Confirm = window.confirm("Vil du slette citatet?")
        if (Confirm) deleteCitatById(id).then(() => getAllCitater().then((citater) => setCitater(citater)));
    }

    function handleRedirect(id) {
        setId(id)
        setRedirect(true)
    }

    const citatList = citater.length ? (
        citater.map(citat => {
            return (
                <tr key={citat._id}>
                    <td>{citat._id}</td>
                    <td>{citat.titel}</td>
                    <td>{citat.citatTekst.length > 50 ? citat.citatTekst.substr(0, 100) + '...' : citat.citatTekst}</td>
                    <td>{citat.kategori.kategorinavn}</td>
                    <td><button className="btn btn-primary" onClick={() => handleRedirect(citat._id)}><FaPen /> Ret</button></td>
                    <td><button className="btn btn-danger" onClick={() => handleDelete(citat._id)}><FaTrash /> Slet</button></td>
                </tr>
            )
        })
    ) : (
            <></>
        );

    function uploadImage(e) {
        e.preventDefault();
        let formData = new FormData()
        formData.append('avatar', inputUpload.current.files[0])
        if (inputUpload.current.files[0]) {
            uploadFile(formData).then(() => alert("Image has been uploaded"))
        } else (
            alert("Du har ikke vedhæftet en billede")
        )
    }

    return (
        <div className="row">
            <div className="container">
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Titel</th>
                            <th scope="col">CitatTekst</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Ret</th>
                            <th scope="col">Slet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citatList}
                    </tbody>
                </table>
            </div>
            <div className="container text-center">
                <Link to="/dashboard/create" className="btn btn-primary w-25 font-weight-bold">Opret nyt citat</Link>
            </div>
            <div className="container text-center mt-3">
                <form onSubmit={uploadImage} method="post">
                    <input type="file" name="avatar" id="avatar" className="border mr-3 p-1 rounded" accept="image/jpeg, image/jpg" ref={inputUpload} />
                    <button type="submit" className="btn btn-primary">Tilføj billede</button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard
