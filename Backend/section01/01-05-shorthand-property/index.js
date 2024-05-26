function qqq(aaa) {
  console.log(aaa);
}

const name = "철수";
const age = 25;
const school = "대학교";

// shorthand-property
// const profile = {
//   name,
//   age,
//   school,
// };

const profile = { name, age, school }; //키와 벨류가 같아서 벨류 생략

qqq(profile); // 1. 변수에 담아서 보내주기
qqq({ name, age, school }); // 2. 통째로 보내주기
// 결과는 동일
