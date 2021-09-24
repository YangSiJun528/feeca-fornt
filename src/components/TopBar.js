import React, { useState,useEffect } from 'react';
import '../css/TopBar.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';

function TopBar(props) {
  let history = useHistory();
  return (
    <div className="topBar">
      {props.topBarBackSpace === false
        ? <img onClick={()=>{ history.push('/home') }} className="feeca_logo" src="https://asdadsads.s3.ap-northeast-2.amazonaws.com/feeca_logo.svg" alt="피카 로고"></img> 
        : <img onClick={()=>{ history.goBack() }} src="https://asdadsads.s3.ap-northeast-2.amazonaws.com/arrow_back.svg" alt="뒤로가기"></img> 
      }
      {props.topBarText === ""
        ? null
        : <p className="topBar_title">{props.topBarText}</p>
      }
      {props.topBarIcon === false
        ? null
        : <div>
            <img className="topBar_icon" src="https://asdadsads.s3.ap-northeast-2.amazonaws.com/header_bell.svg" alt="알람"></img>  
            <img className="topBar_icon" src="https://asdadsads.s3.ap-northeast-2.amazonaws.com/header_search.svg" alt="검색"></img>  
          </div>
      }
    </div>
  )
}

export default TopBar;