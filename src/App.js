import React, { useState,useEffect,useContext } from 'react';
import './App.css';
import UnderBar from './components/UnderBar.js';
import TopBar from './components/TopBar.js';
import Home from './components/Home.js';
import Setting from './components/Setting.js';
import WorkPage from './components/WorkPage.js';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import axios from 'axios';

function App() {
  //뒤로가기 부분 변수 추가
  let history = useHistory();
  //언더바 설정 변수
  let [login,setLogin] = useState(false);
  //언더바 설정 변수
  let [underBarSwitch,setUnderBarSwitch] = useState(false);
  //탑바 설정 변수
  let [topBarBackSpace,setTopBarBackSpace] = useState(false);
  let [topBarText,setTopBarText] = useState("");
  let [topBarIcon,setTopBarIcon] = useState(true);
  return (
    <div className="App">
      <Switch>
        <Route path="/webtoon">
          <p>웹툰화면</p>
        </Route>
        <Route path="/">
          <UnderBar underBarSwitch={underBarSwitch} setUnderBarSwitch={setUnderBarSwitch} />
          <Route path="/setting">
            <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={topBarText} setTopBarText={setTopBarText} topBarIcon={false} setTopBarIcon={setTopBarIcon}/> 
            <Setting setTopBarText={setTopBarText}/>
          </Route>
          <Route path="/work/:user_id">
            <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={''} setTopBarText={setTopBarText} topBarIcon={true} setTopBarIcon={setTopBarIcon}/>
            <WorkPage/>
          </Route>
          <Route path="/work/:user_id/:work_id">
            <TopBar topBarBackSpace={true} setTopBarBackSpace={setTopBarBackSpace} topBarText={''} setTopBarText={setTopBarText} topBarIcon={true} setTopBarIcon={setTopBarIcon}/>
            <p>작품화면</p>
          </Route>
          <Route path="/home">
            <TopBar topBarBackSpace={false} setTopBarBackSpace={setTopBarBackSpace} topBarText={''} setTopBarText={setTopBarText} topBarIcon={true} setTopBarIcon={setTopBarIcon}/>
            <Home />
          </Route>
        </Route>
      </Switch>
    </div>
  );
}



export default App;

/*
생각해보니 state가 바뀔때 component가 재실행 되기 때문에 탑바 내부에서 state가 바뀌여야 함
다고 생각을 했는데 그냥 state바꾸는 거 실행하면 위치 상관없이(여기에서도)된다는 것 확인
1.탑,언더바 내부에 라우터 넣기
2.여기서 state값만 바꿀 수 있는 문법 찾아 넣기
2-1. 예상 => 바꿔야하면 바꾸고 아님 그대로 두는 삼항연산자 사용
 */
