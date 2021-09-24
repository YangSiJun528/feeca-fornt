import React, { useState,useEffect,useCallback } from 'react';
import '../css/Register.css';
import { Link, Route, Switch } from 'react-router-dom'
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function Register(props) {
  let history = useHistory();
  let [user,setUser] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    let user = {}
    user.id = document.querySelector("#id").value
    user.name = document.querySelector("#name").value
    user.password = document.querySelector("#password").value
    user.email = document.querySelector("#email").value
    let checks = document.querySelectorAll(".gender")
    for (var i = 0; i < checks.length; i++) {
      if (checks[i].checked) {
        user.gender =  checks[i].value;
      }
  }
  console.log(user)
    axios.post(
      'http://3.34.192.110/register', 
      {...user}
      )
      .then(function (response) {
        console.log(response)
        if (response.data.result == true){
          alert("회원가입 되었습니다"); history.push(`/home`)
        } else if (response.data.result == 'false') {
          alert(response.data.reason); history.push(`/register`)
        }
      }) 
      .catch(error => {alert("에러가 발생했습니다. 다시 시도해주세요."); history.push(`/home`)});
  }
  return (
    <div className="container">
      <form>
        <p>
          <strong>닉네임</strong>
          <input type="text" name="name" autocomplete="off" id="name" placeholder="닉네임을 입력하세요"/>
        </p>
        <p>
          <strong>이메일</strong>
          <input type="text" name="email" autocomplete="off" id="email" placeholder="e-mail을 입력하세요"/>
        </p>
        <p>
          <strong>아이디</strong>
          <input type="text" name="id" autocomplete="off" id="id" placeholder="ID를 입력하세요"/>
        </p>
        <p>
          <strong>비밀번호</strong>
          <input type="password" name="password" id="password" placeholder="Passwrod를 입력하세요"/>
        </p>
        <p>
          <strong>성별</strong>
          <input type="radio" name="gender" class="gender" value="M"/>남자
          <input type="radio" name="gender" class="gender" value="F"/>여자
          <input type="radio" name="gender" class="gender" value="N"/>알수없음
        </p>
        <p>
          <input type="button" value="제출" onClick={handleClick}/>
        </p>
      </form>
    </div>
  )
}

export default Register;