import React, { useState,useEffect,useCallback } from 'react';
import '../css/WorkPage.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function WorkPage(props) {
  let history = useHistory();
  let [work,setWork] = useState(null);
  let { work_id } = useParams();
  useEffect(async () => {
    await axios.get(`http://3.34.192.110/work/${work_id}`)
    .then((result)=>{
      console.log(result.data)
      setWork(result.data)
    })
    .catch(()=>{});
  }, [])
  return (
    <div className="container">
    {work != null && <>
        <p>
          <img src={work.work.img}></img>
        </p>
        <button onClick={()=> {history.push(`/user/${work.work.author_id}`)}}>유저</button>
        <div>
          <p>
            {work.work.name}
          </p>
          <p>
            {work.work.author}
          </p>
        </div>
          <p>
            likes: {work.work.like}
          </p>
          <p>
            {work.work.tag}
          </p>
        </>
        }
    </div>
  )
}

export default WorkPage;