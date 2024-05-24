import { MouseEvent } from "react";

export default function Checkbox() {
  const qqq2 = () => {
    alert("2클릭");
  };
  const qqq3 = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    alert("3클릭");
  };
  return (
    <span onClick={qqq2}>
      <input type="checkbox" onClick={qqq3} />
    </span>
  );
}
