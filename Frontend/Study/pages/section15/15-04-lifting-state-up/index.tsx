import { useState } from "react";
import Child1 from "../../../src/components/units/15-lifting-state-up/Child1";
import Child2 from "../../../src/components/units/15-lifting-state-up/Child2";

export default function CounterLetDocumentPage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child1 count={count} setCount={setCount}></Child1>
      <div>===============================</div>
      <Child2 count={count} onClickCount={onClickCount}></Child2>
    </div>
  );
}
