export function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    console.log("에러 발생! 이메일을 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, createdAt }) {
  const mytemplate = `
      <html>
          <body>
              <h1>가입을 환영합니다!</h1>
              <hr />
              <div>이름: ${name}</div>
              <div>나이: ${age}</div>
              <div>가입일: ${createdAt}</div>
          </body>
      </html>
      `;
  return mytemplate;
}

export function sendTempleateToEmail(email, template) {
  console.log(
    email + " 이메일로 가입환영템플릿 " + template + "를 전송합니다."
  );
}
