import React, { useState,useEffect,useCallback } from 'react';
import '../css/home.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import { useInView } from "react-intersection-observer"
import axios from 'axios';

function Home(props) {
  const [ref, inView] = useInView()
  let history = useHistory();
  let [works,setWork] = useState([]);
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true)
    await axios.get('http://10.120.74.70:5000/')
    .then((result)=>{
      console.log(result)
      setWork([...works, ...result.data.works])
    })
    .catch(()=>{});
    setLoading(false)
  }, [page])

  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems()
  }, [getItems])

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage(prevState => prevState + 1)
    }
  }, [inView, loading])

  return (
    <div className="container">
      <div className="grid">
        {
          works.map((work, i)=>{
            return <Work key={i} i={i} url={work.img} id={work.id}/>
            // return <Work key={i} i={i} url={"logo192.png"}/>
          })
        }
        <div ref={ref} className="bottom">
        </div>
      </div>
    </div>
  )
}

function Work(props) {
  let history = useHistory();
  return (
    <div className="work" onClick={()=>{ history.push(`/work/${props.id}`)}}>
      <div>
        <img src={props.url} className="work-img"></img>
      </div>
      <p className="work-name">작품 이름</p>
      <p className="work-author">@{props.i}</p>
      <img src="icons/work_like.svg" className="work-like"></img>
    </div>
  )
}

export default Home;