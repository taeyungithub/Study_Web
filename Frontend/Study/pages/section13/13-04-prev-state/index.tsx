import { useState } from "react";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  //   임시저장공간이용하여 바로 적용
  function onClickCountUp(): void {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  //   function onClickCountDown(): void {
  //     setCount(count - 1);
  //   }

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기!!!</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기!!!</button> */}
    </div>
  );
}
