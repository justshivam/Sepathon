import axios from "axios";

const FLASK_BASE_URL = '/api/v1'

const FlaskRoutes = {
    testRoute: FLASK_BASE_URL
}

const getRequest = async (url:string) => {
    let axiosResponse = null;
    await axios.get(url).then((response) => axiosResponse = response).catch((err:any) => axiosResponse = err.response)
    return axiosResponse;
}

const FlaskService = {
    testRoute: () =>  getRequest(FlaskRoutes.testRoute)
}

export {FlaskService};