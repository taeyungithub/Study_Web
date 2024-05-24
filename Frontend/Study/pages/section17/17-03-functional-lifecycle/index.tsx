import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount(): void {
  //   console.log("그려지고나서 실행");
  // }
  useEffect(() => {
    console.log("그려지고나서 실행");
  }, []);
  // componentDidUpdate(): void {
  //   console.log("변경되고 나서 실행");
  // }
  useEffect(() => {
    console.log("변경되고 나서 실행");
  }, []);
  // componentWillUnmount(): void {
  //   console.log("사라지기 전에 실행");
  // }
  useEffect(() => {
    return () => {
      console.log("사라지기 전에 실행");
    };
  }, []);

  // 하나로 합치기
  useEffect(() => {
    console.log("그려지고나서 실행");

    return () => {
      console.log("사라지기 전에 실행");
    };
  });

  const onClockCountUp = (): void => {
    setCount(1);
  };
  const onClickMove = (): void => {
    void router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClockCountUp}>카운트올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
