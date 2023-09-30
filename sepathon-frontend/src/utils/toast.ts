import { toast } from "react-toastify";

const errorToast = (errorMessage:string) => {
    toast.error(errorMessage, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
};

const successToast = (successMessage:string) => {
    toast.success(successMessage, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
};

const infoToast = (infoMessage:string) => {
    toast.info(infoMessage, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
};

const warningToast = (warningMessage:string) => {
    toast.warn(warningMessage, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
};

const callbackOrError = (response:any, callback:Function, errorMessage:string) => {
    if (response.status >= 400) errorToast(errorMessage);
    else callback(response.data);
};

export {callbackOrError, errorToast, successToast, infoToast, warningToast};