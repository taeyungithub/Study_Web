import {
  checkEmail,
  getWelcomeTemplate,
  sendTempleateToEmail,
} from "./email.js";

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
