import axios from 'axios';
import React, {useState} from 'react';
import {url} from '../helpers/url';
import '../styles/Form.css';

export const Form = () => {

    const [Vehiculo, setVehiculo] = useState({
        id: '',
        Placa: '',
        Marca: '',
        Modelo: '',
        Motor: '',
        Añoproduccion: '',
        imagen: ''
    })

    const {id,Placa,Marca,Modelo,Motor,Añoproduccion,imagen} = Vehiculo;

    const postData = () => {
         axios.post(url,Vehiculo)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
         
    }

    const handleChanged = ({target}) => {
        setVehiculo({
          ...Vehiculo,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
      }

     
    return (
        <div>
           <form id="formulario" onSubmit={handleSubmit}>
           <h2>Registro de Vehiculos</h2>
           <hr/>
               <div>
                   <label>id</label>
                   <input id="inputid"  type="Number" name="id" value={id} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Placa Numero</label>
                   <input id="selectPlaca"  type="text" name="Placa" value={Placa} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Marca</label>
                   <input id="inputMarca" type="text" name="Marca" value={Marca} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Modelo</label>
                   <input id="inputModelo" type="text" name="Modelo" value={Modelo} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Motor</label>
                   <input id="inputMotor" type="text" name="Motor" value={Motor} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Año de Produccion</label>
                   <input id="inputAñoproduccion"  type="Number" name="Añoproduccion" value={Añoproduccion} onChange={handleChanged}/>
               </div>
               <div>
                   <label>Imagen</label>
                   <input id="botonImagen" type="file" name="imagen" value={imagen}    onChange={handleChanged}/>
                    
               </div>
               <div>
                   <button onClick={() => postData()} id="btnRegistro">Enviar</button> 
               </div>
           </form>
        </div>
    )
}
