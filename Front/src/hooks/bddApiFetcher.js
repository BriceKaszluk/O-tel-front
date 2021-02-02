// this hook is use to get the differents datas from the bdd
import { useEffect, useState } from 'react';
import { useAuthentication } from 'src/components/UserContext';
import Axios from 'axios';

export default (url, {init=[], body={}, method='GET'}) => {

  const { token } = useAuthentication();
  // initialising test
  const [data, setData] = useState({});

  // request
  const loadData = (event) => {
    Axios(event)
      .then((response) => {
        if (response.status != 200) return console.error('datas failed to load, please contact SAV');
        setData(response.data);
      })
      .catch();
  };

  useEffect(() => {
    console.log(url);
    const requestOptions = {
      method,
      url,
      headers: { 
        'Content-Type': 'application/json'
       },
      data : body
    };
    if(token){
    //requestOptions.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('dataAPI useEffect');
    loadData(requestOptions);
  }, [token]);

  return [
    data,
  ];
};
