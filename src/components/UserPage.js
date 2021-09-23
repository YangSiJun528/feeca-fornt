import React, { useState,useEffect,useCallback } from 'react';
import '../css/UserPage.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function UserPage(props) {
  let history = useHistory();
  let [work,setWork] = useState({});
  const getItems = useCallback(async () => {
    await axios.get('http://10.120.74.70:5000/')
    .then((result)=>{
      console.log(result)
      setWork(result)
    })
    .catch(()=>{});
  }, [])
  return (
    <div>

    </div>
  )
}

export default UserPage;