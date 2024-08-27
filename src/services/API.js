import axios from "axios";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import CryptoJS from 'crypto-js';

const secret = import.meta.env.VITE_SECRET;
 export let url = "https://sgf-consultant.onrender.com";
//export let url = "http://localhost:8081";

export const loginFn = async (params) => {
    console.log(params);
    
    axios.defaults.withCredentials = true
    const customUrl =  `${url}/api/adminapi/login`
    try {
        const res = await axios.post(customUrl, params, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,

        })
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(res.data), 1000);
        });
        await toast.promise(
            promise,
            {
                pending: 'Hm...Let me check',
                success: {
                    render({ data: { message } }) {
                        return `${message}`;
                    }
                },
                error: {
                    render({ data: { res } }) {
                        console.log(res);
                        return `Uh-oh,...🤯${res?.data}`;
                    }
                }
            }
        );
        return res.data
    } catch (error) {
        toast.error(`Uh-oh,...🤯${error?.response?.data?.message}`);
    }
}
export const sendotpFn = async (params) => {
const customUrl =  `${url}/api/adminapi/login`
    try {
        const res = await axios.post(customUrl, params, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        })

        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(res.data), 1000);
        });
        await toast.promise(
            promise,
            {
                pending: 'Hm...Let me check',
                success: {
                    render({ data: { message } }) {
                        console.log(message);
                        return `${message}`;
                    }
                },
                error: {
                    render({ data: { res } }) {
                        return `Uh-oh,...🤯${res?.data}`;
                    }
                }
            }
        );
        return res.data
    } catch (error) {
        toast.error(`Uh-oh,...🤯${error?.response?.data?.message}`);
    }
}
export const otpVerificationFn = async (params) => {
    const customUrl =  `${url}/api/adminapi/login`
        try {
            const res = await axios.post(customUrl, params, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            })
    
            const promise = new Promise((resolve) => {
                setTimeout(() => resolve(res.data), 1000);
            });
            await toast.promise(
                promise,
                {
                    pending: 'Hm...Let me check',
                    success: {
                        render({ data: { message } }) {
                            console.log(message);
                            return `${message}`;
                        }
                    },
                    error: {
                        render({ data: { res } }) {
                            return `Uh-oh,...🤯${res?.data}`;
                        }
                    }
                }
            );
            return res.data
        } catch (error) {
            toast.error(`Uh-oh,...🤯${error?.response?.data?.message}`);
        }
    }
export const getProfileDetails = async () => {

    try {
        const res = await axios.get(customUrl, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        })

        return res.data
    } catch (error) {
        toast.error(`Uh-oh,...🤯${error?.response?.data?.message}`);
    }
}
