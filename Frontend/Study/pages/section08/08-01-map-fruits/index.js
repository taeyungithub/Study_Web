//컴포넌트 위에 만든이유 : 컴포넌트가 리렌더링돼도 다시 안만들어짐
// 1. 가장 기본 에제

const aaa = [
  <div>1 레드향</div>,
  <div>2 샤인머스켓</div>,
  <div>3 산청딸기</div>,
  <div>4 바나나</div>,
];

const FRUITS = [
  { number: 1, title: "레드향" },
  { numver: 2, title: "샤인머스켓" },
  { numver: 3, title: "산청딸기" },
  { numver: 4, title: "바나나" },
];

export default function MapFrutisPage() {
  // 2. 실무 백엔드 데이터 예제

  const bbb = FRUITS.map((el) => (
    <div>
      {el.numver} {el.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      ==========================
      <div>{bbb}</div>
      {/* 실무 효율적인 렌더링 에제 */}
      <div>
        {FRUITS.map((el) => (
          <div>
            {el.numver} {el.title}
          </div>
        ))}
      </div>
    </div>
  );
}
