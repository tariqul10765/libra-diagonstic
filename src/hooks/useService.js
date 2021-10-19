import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeData/service.json')
            .then(res => res.json())
            .then(json => setServices(json))

        console.log('hocche...');
    }, [])

    return {
        services,
        setServices
    }
}

export default useService;