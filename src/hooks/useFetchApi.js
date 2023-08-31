import {useEffect, useState} from 'react';

function useFetchApi({url}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false)

    async function fetchData () {
        setLoading(true);
        const respData =await fetch(url);
        const data = await respData.json();

        setData(data)
        setLoading(false)
        setFetched(true)
    }

    useEffect(() => {
        fetchData()
    }, []);
    return {
        data,
        setData,
        loading,
        fetched
    }
}

export default useFetchApi;
