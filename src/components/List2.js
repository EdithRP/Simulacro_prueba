import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Form } from '../components/Form';
import {url} from '../helpers/url';
import '../styles/List.css';

export const List2 = () => {

    const [registro, setRegistro] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
            axios.get(url)
            .then(response => {
                setRegistro(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const modificarData = (id) => {
        <Form/>
         axios.put(url+id)
         .then(response => {
             getData();
           console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }

    console.log(registro)
    return (
        <div className="gridcolumn">        {
                         registro.map(r => (
                             <div className="card" key={r.id}>
                                 <div className="titulo">
                                  <span>{r.Marca}</span></div>
                                <li>{r.Placa}</li>
                                <li>{r.Modelo}</li>
                                <li>{r.Motor}</li>
                                <li>{r.Añoproduccion}</li>
                                <li><img src={r.imagen} width={230} height={345} className="imagen"alt=""/></li>
                                <button onClick={() => modificarData(r.id)}>Modificar</button>
                      </div>
                         ))
                     } </div>   
)}
