import React, {useState, useEffect} from 'react'
import axios from 'axios'

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetcData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setData(responseData);
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }

    useEffect(() => {
        fetcData();
    }, [])


    return {error, loading, data}
}

export default useFetch

