import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Citat from './components/citater/Citat'
import Citater from './components/citater/Citater'
import Category from './components/Category'
import Dashboard from './components/dashboard/Dashboard'
import CreateCitat from './components/dashboard/CreateCitat'
import EditCitat from './components/dashboard/EditCitat'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" render={() =>
        <h2 className="text-center">Velkommen</h2>
      } />
      <Route exact path="/citat/:id" component={Citat} />
      <Route exact path="/category/" component={Citater} />
      <Route exact path="/category/:category_id" component={Category} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/create" component={CreateCitat} />
      <Route exact path="/dashboard/edit/:citat_id" component={EditCitat} />
    </BrowserRouter>
  )
}

export default App
