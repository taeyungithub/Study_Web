export default function TypescriptPage() {
  let aaa = "안녕하세요";
  //  aaa = 3   <= 오류 타입추정

  let bbb: String = "반갑습니다";

  //   타입명시가 필요한 상황
  let ccc: number | string = 1000;
  ccc = "1000원";

  // 숫자타입
  let ddd: number = 10;

  //   불린타입
  let eee: boolean = true;
  //   eee = "false" 로 벡엔드에서 줄수도 있음 저거는 true로 작동됨 따라서 타입스크립트를 사용함

  // 배열타입
  let fff: number[] = [1, 2, 3, 4, 5];
  let ggg: string[] = ["a", "b", "c"];
  let hhh = ["철수", "영희", 111]; // 타입추론

  // 객체타입

  interface IProfile {
    name: string;
    age: number;
    school: string;
    hobby?: string; //있어도 되고 없어도 됨
  }

  const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "중학교",
  };

  // IProfile 안하면 추가안됨 profile.hobby = "수영"   x
  profile.hobby = "수영";
  //IProfile 선언할때 hobby에서 ? 안하면 오류

  //   함수타입
  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(1000, 2000, "원");
  //result가 string    결과의 리턴타입 예측가능

  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result2 = add2(1000, 2000, "원");

  //any 타입
  let qqq: any = "철수"; // js와 동일
  qqq = 123;
  qqq = true;

  return;
}
