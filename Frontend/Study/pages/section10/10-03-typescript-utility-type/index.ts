export interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1.Partial 타입
type aaa = Partial<IProfile>;
// 속성들이 ?로 다 변함

// 2.Required 타입
type bbb = Required<IProfile>;
// 속성들이 ? 다 사라짐

// 3.Pick 타입
type ccc = Pick<IProfile, "name" | "age">;
// 원하는 속성만

// 4. Omit 타입
type ddd = Omit<IProfile, "school">;
// 속성빼기

// 5.Record 타입
type eee = "철수" | "영희" | "훈이"; //Union타입
let child: eee = "철수";
// 3개중에 하나만 선택가능

type fff = Record<eee, IProfile>;
// 속성들 타입을 IProfile로 바꿈

// 6. 객체의 key들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "hobby";

// 7. type vs interface 차이 (선언병합)
export interface IProfile {
  candy: number; //추가느낌
}
//type은 불가능

// 8.응용
let profile: Partial<IProfile> = {
  candy: 10,
};
