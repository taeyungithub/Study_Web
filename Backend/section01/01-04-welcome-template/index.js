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

  console.log(mytemplate);
}

const name = "철수";
const age = 25;
const createdAt = "2024-05-26";

getWelcomeTemplate({ name, createdAt });
// name, age, createdAt 중간에 하나빠져도 밀리지 않음
// 중괄호를 넣어서 그럼 (객체)
