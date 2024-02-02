import UserInfoRow from './UserInfoRow';

const GeneralAgenda = ({ allRegistrations, fetchAllData }) => {
    const updateData = () => {
        fetchAllData()
    }
    return (
        <div className="container-fluid text-center shadow mb-5 rounded-1">
            <div className="row align-items-center">
                <div className="col-12">
                    <h2>Agenda general</h2>
                </div>
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha y Hora</th>
                                <th scope="col">Tipo de usuario</th>
                                <th scope="col">Status</th>
                                <th scope="col">Modificar status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRegistrations.map(userInfo => {
                                    return <UserInfoRow key={userInfo.id} userInfo={userInfo} updateData={updateData} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GeneralAgenda