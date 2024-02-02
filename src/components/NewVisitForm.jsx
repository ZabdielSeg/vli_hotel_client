import { useState } from "react";
import DataService from "../service/data-service.js";

const NewVisitForm = ({ fetchAllData }) => {
    const [user, setUser] = useState({
        nombre_del_visitante: '',
        tipo_de_visitante: '',
        fecha_y_hora: '',
        visita_con: ''
    });

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const service = new DataService()

    const registerUserOnDB = (e) => {
        e.preventDefault();
        service
            .registerUser(user)
            .then(() => fetchAllData())
            .catch(err => console.log(err))
    }

    return (
        <div className="container-fluid row shadow mb-5 rounded">
            <div className="col-12 text-center mb-4">
                <h2>Crear nuevo registro</h2>
            </div>
            <form className="col-12 row">
                <div className="col-6 mb-4">
                    <input type="text" name="nombre_del_visitante" className="form-control " placeholder="Nombre de la persona" value={user.nombre_del_visitante} onChange={handleInputChange} />
                </div>

                <div className="col-6 row mb-4">
                    <label className="col-form-label col-form-label-sm col-6 col-md-4">Fecha y hora de visita</label>
                    <div className="col-6 col-md-8">
                        <input type="datetime-local" className="form-control " placeholder="Día y hora de visita" onChange={handleInputChange} name="fecha_y_hora" />
                    </div>
                </div>

                <div className="col-6 mb-4">
                    <select className="form-select" aria-label="Tipo de usuario" name="tipo_de_visitante" value={user.tipo_de_visitante} onChange={handleInputChange}>
                        <option defaultChecked disabled value=''>Tipo de visitante...</option>
                        <option value="Proveedor">Proveedor</option>
                        <option value="Huésped">Huésped</option>
                    </select>
                </div>


                {
                    user.tipo_de_visitante === "Proveedor" &&
                    <div className="col-6 mb-4">
                        <input type="text" className="form-control " placeholder="¿A quién visita?" onChange={handleInputChange} name="visita_con" />
                    </div>
                }

                <div className="col-auto mb-4">
                    <button type="submit" className="btn btn-primary" onClick={registerUserOnDB}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewVisitForm