import React, { useState,useEffect,useContext } from 'react';
import './App.css';
import UnderBar from './components/UnderBar.js';
import TopBar from './components/TopBar.js';
import { Home } from './components/Home.js';
import Setting from './components/Setting.js';
import WorkPage from './components/WorkPage.js';
import UserPage from './components/UserPage.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function App() {
  //뒤로가기 부분 변수 추가
  let history = useHistory();
  //유저 관련
  let [login, setLogin] = useState(false);
  let [logining, setLogining] = useState(false);
  let [user, setUser] = useState(null);
  //언더바 설정 변수
  let [underBarSwitch,setUnderBarSwitch] = useState(false);
  //탑바 설정 변수
  let [topBarBackSpace,setTopBarBackSpace] = useState(false);
  let [topBarText,setTopBarText] = useState("");
  let [topBarIcon,setTopBarIcon] = useState(true);
  return (
    <div className="App">      
    <Switch>
      {
        login === true
        ?<>
        <Route path="/webtoon">
          <p>웹툰화면</p>
        </Route>
        <Route path="/">
          <UnderBar underBarSwitch={underBarSwitch} setUnderBarSwitch={setUnderBarSwitch} />
          <Route path="/setting">
            <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={topBarText} setTopBarText={setTopBarText} topBarIcon={false} setTopBarIcon={setTopBarIcon}/> 
            <Setting setTopBarText={setTopBarText}/>
          </Route>
          <Route path="/work/:work_id">
            <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={''} setTopBarText={setTopBarText} topBarIcon={true} setTopBarIcon={setTopBarIcon}/>
            <WorkPage/>
          </Route>
          <Route path="/home">
            <TopBar topBarBackSpace={false} setTopBarBackSpace={setTopBarBackSpace} topBarText={''} setTopBarText={setTopBarText} topBarIcon={true} setTopBarIcon={setTopBarIcon}/>
            <Home />
          </Route>
          <Route path="/user/:user_id/">
            <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={''} setTopBarText={setTopBarText} topBarIcon={true} setTopBarIcon={setTopBarIcon}/>
            <UserPage/>
          </Route>
        </Route>
        </>
        :
          logining === false
          ?
          <Route path="/">
            <p>로그인이 필요합니다.</p>
            <button onClick={()=>{setLogining(true); history.push('/login')}}>로그인 하러 가기</button>
          </Route>
          :<>
            <Route path="/login">
              <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={topBarText} setTopBarText={setTopBarText} topBarIcon={false} setTopBarIcon={setTopBarIcon}/> 
              <Login login={login} setLogin={setLogin} setUser={setUser} setLogining={setLogining}/>
            </Route>
            <Route path="/register">
              <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={topBarText} setTopBarText={setTopBarText} topBarIcon={false} setTopBarIcon={setTopBarIcon}/> 
              <Register setLogining={setLogining}/>
            </Route>
          </>
      }
      </Switch>
    </div>
  );
}



export default App;
