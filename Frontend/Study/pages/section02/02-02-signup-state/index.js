import { useState } from "react";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {
    // 1. 검증하기
    if (email.includes("@") === false) {
      //   alert("이메일이 올바르지 않습니다!!");
      //   document.getElementById("myerror").innerText =
      //     "이메일이 올바르지 않습니다!!";
      setEmailError("이메일이 올바르지 않습니다!!");
    } else {
      // 2.백엔드 컴퓨터에 보내주기(API에)
      // 3.성공알람 보여주기
      alert("회원가입을 축하합니다!!");
    }
  }
  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail}></input>
      {/* <div id="myerror"></div> */}
      <div>{emailError}</div>
      비밀번호: <input type="password" onChange={onChangePassword}></input>
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
