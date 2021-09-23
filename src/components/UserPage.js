import React, { useState,useEffect,useCallback } from 'react';
import '../css/UserPage.css';
import { Work } from './Home.js';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function UserPage(props) {
  let history = useHistory();
  let [user,setUser] = useState(null);
  let { user_id } = useParams();
    useEffect(async () => {
      await axios.get(`http://3.34.192.110/user/${user_id}`)
      .then((result)=>{
        console.log(result.data)
        setUser(result.data)
      })
      .catch(()=>{});
    }, [])
  return (
    <div className="container">
    {user != null && <>
        <p>
          <img src={user.profile_img}></img>
        </p>
        <p>{user.name}</p>
        <div>
          {
            user.illust.map((work, i)=>{
              return <Work key={i} i={i} url={work.img} id={work.id} name={work.name} author={work.author} />
            })
          }
        </div>
        </>
        }
    </div>
  )
}

export default UserPage;