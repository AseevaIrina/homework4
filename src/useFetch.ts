import {useEffect, useRef, useState} from "react";

interface IRefetchProps {
    params: {
        _limit: number
    }
}

export const useFetch = (path: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const refetchCouter = useRef(0);

    const fetchData = async () => {
        const request = fetch(path, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        try {
            setError(false);
            setIsLoading(true);
            const response = await request;
            if (response.status === 200) {
                response.json()
                    .then((list) => {
                        setIsLoading(false);
                        setData(list);
                    })
            }
        } catch (e) {
            setIsLoading(false);
            setError(true);
            setData([]);
        }
    }

    const refetch = ({params}: IRefetchProps) => {
        if (refetchCouter.current < params._limit) {
            fetchData();
            refetchCouter.current += 1
        } else {
            setError(true);
            setData([]);
        }
    }

    useEffect(() => {
        fetchData();
    }, [path])

    return {
        data,
        error,
        isLoading,
        refetch
    }
}