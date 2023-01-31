import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useLogin =  () => {
    const [ error, setError] = useState(null);
    const [ isLoading, setLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {

    setLoading(true);

    const response = await fetch('http://localhost:4000/user/login', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email, password})
    })
    const json = await response.json();

    if (!response.ok) {
        setLoading(false);
        setError(json.error);
        //console.log(json);
    }

    if (response.ok) {
        dispatch({type: 'LOGIN', payload: json});

        setLoading(false);

        setError(null);
    }

    }

    return { login, error, isLoading }
}