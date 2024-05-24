import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovedPage() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        number: Number(router.query.qqq),
      },
    }
  );

  console.log(data);

  return (
    <div>
      <div>{router.query.qqq}번 게시글 이동이 완료되었습니다.</div>;
      {/* 너무빠르기 때문에 data &&을 넣어줌   undefined일때 fetchBoard할수 있기때문 */}
      {/* <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목:{data && data.fetchBoard.title}</div>
      <div>내용:{data && data.fetchBoard.contents}</div> */}
      {/* 다른표현 옵셔널체이닝*/}
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목:{data?.fetchBoard?.title}</div>
      <div>내용:{data?.fetchBoard?.contents}</div>
      {/*       <div>내용:{data ? data.fetchBoard.contents : "로딩중입니다!!!"}</div> 삼항연산자도 가능 */}
    </div>
  );
}

// data || data.fetchProfile
// data가 거짓이면 오른쪽거 실행

// 널리쉬 퀄리씽
// data ?? data.fetchProfile
// data가 비어있으면 오른쪽거 실행
