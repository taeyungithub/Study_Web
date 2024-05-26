function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    console.log("에러 발생! 이메일을 제대로 입력해주세요");
    return false;
  } else {
    return true;
  }
}

function getWelcomeTemplate({ name, age, createdAt }) {
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

function sendTempleateToEmail(email, template) {
  console.log(
    email + " 이메일로 가입환영템플릿 " + template + "를 전송합니다."
  );
}

function createUser({ name, age, school, email, createdAt }) {
  // 1. 이메일이 정상인지 확인 (1-존재여부, 2-"@"포함여부)
  const isVaild = checkEmail(email);
  if (isVaild === false) return;

  // 2. 가입 환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, age, createdAt });
  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTempleateToEmail(email, myTemplate);
}

const name = "철수";
const age = 25;
const school = "대학교";
const email = "qqq@qqq.com";
const createdAt = "2024-05-26";
createUser({ name, age, school, email, createdAt });
