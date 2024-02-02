import axios from "axios";

class DataService {
    constructor() {
        let service = axios.create({
            baseURL: `${import.meta.env.VITE_DB_BASE_URL}`,
        })
        this.service = service;
    }

    fetchAllData = () => {
        return this.service.get('/allVisits').then(response => response.data)
    }

    registerUser = (user) => {
        return this.service.post('/registerVisit', user).then(response => response.data)
    }

    updateStatus = (id, status) => {
        return this.service.put(`/updateVisit/${id}`, { status }).then(response => response.data)
    }
}

export default DataService;