//this hook is use to get the differents datas from the bdd

import { useEffect, useState } from 'react';
import Axios from 'axios';
import { axiosConfig } from 'src/axiosConfig';

export default (url, {init = null} ={}) => {
    //initialising test
    const [data, setData] = useState(init);

    //request
    const loadData = (event) => {
        Axios.get(url, axiosConfig)
        .then((response) => {
            if (response.status != 200) return console.error('datas failed to load, please contact SAV');
            setData(response.data);
        })
        .catch();
    };
    useEffect(() => {
        console.log('dataAPI useEffect');
        loadData();
    }, [])

    return[
        data
    ];
};