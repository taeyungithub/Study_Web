export default function BoardComponent(props) {
  return (
    <Fragment>
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      제목: <input type="text" /> <br />
      내용: <input type="text" /> <br />
      <buuton>{props.isEdit ? "수정" : "등록"}하기</buuton>
    </Fragment>
  );
}
