import React, { useState,useEffect } from 'react';
import '../css/TopBar.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';

function TopBar(props) {
  let history = useHistory();
  return (
    <div className="topBar">
      {props.topBarBackSpace === false
        ? <img onClick={()=>{ history.push('/home') }} className="feeca_logo" src="icons/feeca_logo.svg" alt="피카 로고"></img>
        : <img onClick={()=>{ history.goBack() }} src="icons/arrow_back.svg" alt="뒤로가기"></img>
      }
      {props.topBarText === ""
        ? null
        : <p className="topBar_title">{props.topBarText}</p>
      }
      {props.topBarIcon === false
        ? null
        : <div>
            <img className="topBar_icon" src="icons/header_bell.svg" alt="알람"></img>
            <img className="topBar_icon" src="icons/header_search.svg" alt="검색"></img>
          </div>
      }
    </div>
  )
}

export default TopBar;