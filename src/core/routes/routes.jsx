import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../../home/page/home_page';
import Service from '../../service/page/service_page';
import Client from '../../client/page/client_page'
import Header from '../components/header';
import Footer from '../components/footer';
import Auth from '../../auth/page/auth_page'

function PagesRoutes() {
    return (
        <>
            <Header/>
            <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/servicios" element={ <Service/> }/>
                <Route exact path="/clientes" element={ <Client/> }/>
                <Route exact path="/login" element={ <Auth/> }/>
            </Routes>
            <Footer/>
        </>
    );
}
  
export default PagesRoutes;