import axios from "axios";

const FLASK_BASE_URL = '/api/v1'

const FlaskRoutes = {
    testRoute: FLASK_BASE_URL,
    networkTraffic: FLASK_BASE_URL + '/networkTraffic'
}

const getRequest = async (url:string, params:any) => {
    let axiosResponse = null;
    if (params) await axios.get(url, {params: params}).then((response) => axiosResponse = response).catch((err:any) => axiosResponse = err.response);
    else await axios.get(url).then((response) => axiosResponse = response).catch((err:any) => axiosResponse = err.response);
    return axiosResponse;
}

const postRequest = async (url:string, requestBody:any) => {
    let axiosResponse = null;
    await axios.post(url, requestBody).then((response) => axiosResponse = response).catch((err:any) => axiosResponse = err.response);
    return axiosResponse;
}

const FlaskService = {
    testRoute: () => getRequest(FlaskRoutes.testRoute, null),
    networkTraffic: (params:any) => postRequest(FlaskRoutes.networkTraffic, params)
}

export {FlaskService};