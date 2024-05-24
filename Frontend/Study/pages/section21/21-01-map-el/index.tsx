export default function MapElPage(): any {
  // 1. 기본방법
  // map은 리턴필요 forEach는 리턴x
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  // 2. 매개변수 변경

  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("el:", asdf);
    console.log("index:", qwer);
  });

  // 3. 함수선언식 방법

  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("el:", asdf);
    console.log("index:", qwer);
  });

  // 4. el index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  return <></>;
}
