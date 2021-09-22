import React, { useState,useEffect } from 'react';
import '../css/setting.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';

function Setting(props) {
  let history = useHistory();

  return (
    <div className="container">
      <Switch>
        <Route path="/setting/account">
          <Account setTopBarText={props.setTopBarText}/>
        </Route>
        <Route path="/setting/alarm">
          <Alarm setTopBarText={props.setTopBarText}/>
        </Route>
        <Route path="/setting/blockUsers">
          <BlockUser setTopBarText={props.setTopBarText}/>
        </Route>
        <Route path="/setting/blockTags">
          <BlockTags setTopBarText={props.setTopBarText}/>
        </Route>
        <Route path="/setting/help">
          <Help setTopBarText={props.setTopBarText}/>
        </Route>
        <Route path="/setting/termsOfUse">
          <TermsOfUse setTopBarText={props.setTopBarText}/>
        </Route>
        <Route path="/setting/policy">
          <Policy setTopBarText={props.setTopBarText}/>
        </Route>
        <Route path="/setting">
          <Main setTopBarText={props.setTopBarText}></Main>
        </Route>
      </Switch>
    </div>
  )
}

function Main(props) {
  let history = useHistory();
  
  useEffect(()=>{
  props.setTopBarText('설정')
  },[]);

  return(
    <div className="setting-main">
      <p>설정</p>
            <ul>
              <li onClick={()=>{ history.push('/setting/account') }}>계정 설정</li>
              <li onClick={()=>{ history.push('/setting/alarm') }}>알림 설정</li>
              <li onClick={()=>{ history.push('/setting/blockUsers') }}>유저 차단</li>
              <li onClick={()=>{ history.push('/setting/blockTags') }}>태그 차단</li>
              <li onClick={()=>{ history.push('/setting') }} className="red-font">로그아웃</li>
              <li onClick={()=>{ history.push('/setting') }} className="red-font">계정 탈퇴</li>
            </ul>
            <p>기타</p>
            <ul>
              <li onClick={()=>{ history.push('/setting/help') }}>도움말</li>
              <li onClick={()=>{ history.push('/setting/termsOfUse') }}>이용약관</li>
              <li onClick={()=>{ history.push('/setting/policy') }}>개인정보취급방침</li>
            </ul>
    </div>
  )
}

function Account(props) {
  useEffect(()=>{
    props.setTopBarText('계정 설정')
    },[]);
  return(
    <div>
      <p>계정 설정</p>
    </div>
  )
}

function Alarm(props) {
  useEffect(()=>{
    props.setTopBarText('알람 설정')
    },[]);
  return(
    <div>
      <p>알람 설정</p>
    </div>
  )
}

function BlockUser(props) {
  useEffect(()=>{
    props.setTopBarText('유저 차단')
    },[]);
  return(
    <div>
      <p>유저 차단</p>
    </div>
  )
}

function BlockTags(props) {
  useEffect(()=>{
    props.setTopBarText('태그 차단')
    },[]);
  return(
    <div>
      <p>태그 차단</p>
    </div>
  )
}

function Help(props) {
  useEffect(()=>{
    props.setTopBarText('도움말')
    },[]);
  return(
    <div>
      <p>도움말</p>
    </div>
  )
}

function TermsOfUse(props) {
  useEffect(()=>{
    props.setTopBarText('이용약관')
    },[]);
  return(
    <div>
      <p>이용약관</p>
    </div>
  )
}

function Policy(props) {
  useEffect(()=>{
    props.setTopBarText('개인정보취급방침')
    },[]);
  return(
    <div>
      <p>개인정보취급방침</p>
    </div>
  )
}

export default Setting;