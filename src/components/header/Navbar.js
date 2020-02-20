import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { getAllCategories } from '../context/category'

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories().then((categories) => setCategories(categories))
    }, [])

    const categoryList = categories.length ? (
        categories.map(category => {
            return (
                <NavLink className="dropdown-item text-dark bg-white" to={`/category/${category._id}`} key={category._id}>{category.kategorinavn}</NavLink>
            )
        })
    ) : (
            <div><p>No posts to show</p></div>
        );

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand font-weight-bold" to="/">Citater</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Forside</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Kategorier
        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {categoryList}
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item text-dark bg-white" to="/category">Vis alle citater</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
