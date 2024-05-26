// 구조분해할당 예
const profile = {
  name: "철수",
  age: 25,
  school: "대학교",
};

const { name, school, age } = profile;
console.log(name, age, school);

// 1. 일반변수 전달하기
function zzz(aaa) {
  // const aaa = "사과"
  console.log(aaa); //사과
}
zzz("사과");

// 2. 객체 전달하기
function zzz(aaa) {
  // const aaa = { apple: 3, banana: 10 }
  console.log(aaa);
}
zzz({ apple: 3, banana: 10 });

// 3. 객체 전달하기 (구조분해할당)
function zzz({ apple, banana }) {
  // const { apple, banana} = basket
  console.log(apple);
  console.log(banana);
}
const basket = { apple: 3, banana: 10 };
zzz(basket);
