// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useFetch = (url) => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 console.log('Fetching data from URL:', url);
//                 let response;
//                 if (url.includes('categories')) {
//                     response = await axios.get(`${process.env.PUBLIC_URL}/categories.json`);
//                 } else if (url.includes('dishes')) {
//                     response = await axios.get(`${process.env.PUBLIC_URL}/dishes.json`);
//                 } else {
//                     const dishId = url.split('/').pop();
//                     response = await axios.get(`${process.env.PUBLIC_URL}/dishDetail-${dishId}.json`);
//                 }
//                 console.log('Response Data:', response.data);
//                 setData(response.data);
//             } catch (err) {
//                 console.error('Fetch Error:', err);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [url]);

//     return { data, loading, error };
// };

// export default useFetch;

import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('Fetching data from URL:', url); // Add this line for debugging
                let response;
                if (url.includes('categories')) {
                    response = await axios.get(`${process.env.PUBLIC_URL}/categories.json`);
                } else if (url.includes('dishes')) {
                    response = await axios.get(`${process.env.PUBLIC_URL}/dishes.json`);
                } else {
                    response = await axios.get(`${process.env.PUBLIC_URL}${url}`);
                }
                console.log('Response Data:', response.data); // Add this line for debugging
                setData(response.data);
            } catch (err) {
                console.error('Fetch Error:', err); // Add this line for debugging
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
