import { useEffect, useState } from "react";
import DataService from "../service/data-service";

const UserInfoRow = ({userInfo, updateData}) => {
    const status = userInfo.status ? 'Activo' : 'Cancelado';
    const service = new DataService()

    const updateInfo = (id) => {
        service
            .updateStatus(id, !userInfo.status)
            .then(() => updateData())
    }

    const time = new Date(userInfo.fecha_y_hora).toLocaleDateString();
    return (
        <tr key={userInfo.id} className={`${!userInfo.status ? 'table-danger' : ''}`}>
            <th scope="row">{userInfo.nombre_del_visitante}</th>
            <td>{time}</td>
            <td>{userInfo.tipo_de_visitante}</td>
            <td>{status}</td>
            <td><button type="submit" className="btn btn-primary" onClick={() => updateInfo(userInfo.id)}>Cambiar status</button></td>
        </tr>
    )
}

export default UserInfoRow