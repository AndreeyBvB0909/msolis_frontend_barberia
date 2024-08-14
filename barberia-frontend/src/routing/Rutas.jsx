import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Login } from "../components/pages/Login";
import { Registro } from "../components/pages/Registro";
import { Servicios } from "../components/pages/Servicios";
import { Dashboard } from "../components/pages/Dashboard";
import { Citas } from "../components/pages/Citas";
import { Parametros } from "../components/pages/Parametros";

export const Rutas = () => {
    return(
        <BrowserRouter>
        {/*LAYOUT*/}

        {/*Contenido principal y rutas*/}
        <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/registro" element={<Registro/>} />
                <Route path="/servicios" element={<Servicios/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/citas" element={<Citas/>} />
                <Route path="/parametros" element={<Parametros/>} />
            </Routes>
        </section>
        </BrowserRouter>
    );
}