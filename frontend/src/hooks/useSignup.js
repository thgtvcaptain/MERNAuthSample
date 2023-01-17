import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignup =  () => {
    const [ error, setError] = useState(null);
    const [ isLoading, setLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {

    const response = await fetch('http://localhost:4000/user/signup', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({email, password})
    })
    const json = await response.json();

    if (!response.ok) {
        setLoading(false);
        setError(json.error);
    }

    if (response.ok) {
        dispatch({type: 'LOGIN', payload: json});

        setLoading(false);

        setError(null);
    }

    }

    return { signup, error, isLoading }
}