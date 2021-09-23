import React, { useState,useEffect } from 'react';
import '../css/UnderBar.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';

function UnderBar(props) {
  let history = useHistory();
  function handleProfileClick() {
    props.underBarSwitch === true
    ? props.setUnderBarSwitch(false)
    : props.setUnderBarSwitch(true)  
  }
  return (
    <div>
      <div onClick={handleProfileClick} className={"underBar-block "+(props.underBarSwitch === true ? "underBar-block-on" : "underBar-block-off")}></div>
      <ul className="underBar">
        <li><img onClick={()=>{ history.push('/home') }} className="nav_icon" src="icons/nav_home.svg" alt="홈"/></li>
        <li className="nav_profile"><img onClick={handleProfileClick} className="nav_icon" src="icons/profile.png" alt="프로필"/>
        
        </li>
        <li><img onClick={()=>{ history.push('/setting') }} className="nav_icon" src="icons/nav_setting.svg" alt="설정"/></li>
      </ul>
      {
        <ul className={"underBar-menu "+(props.underBarSwitch === true ? "underBar-animation-on" : "underBar-animation-off")}>
          <li><img src="icons/profile.svg" alt=""/>프로필</li>
          <li><img src="icons/menu_upload.svg" alt=""/>작품 업로드</li>
          <li>피드백 관리</li>
        </ul>
      }
    </div>
  )
}

export default UnderBar;