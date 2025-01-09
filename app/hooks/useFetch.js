import {useCallback, useState} from "react";
import {clientApi} from "../lib/ClientApi";
export function useFetch(url, options){
    const [loading, setLoading] = useState(false);
    const make = useCallback(async ()=>{
            console.trace('Fetch', url)
            setLoading(true);
            return new Promise((resolve, reject) => {
                clientApi({
                    url,
                    ...options
                }).then((response) => {
                    setLoading(false);
                    resolve(response);
                }).catch((error) => {
                    setLoading(false);
                    reject(error);
                })
            });
    },[url])

    return {
        make,
        loading
    }
}