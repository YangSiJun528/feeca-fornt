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
          <img src={user.banner_img}></img>
        </p>
        <p>
          <img className="pro" src={user.profile_img}></img>
        </p>
        <p>이름: {user.name} & follower: {user.follower}</p>
        <br></br>
        <p>{user.intro}</p>
        <br></br>
        <br></br>
        <p>{user.name}의 최근 작품</p>
        <div>
          {
            user.works.map((work, i)=>{
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