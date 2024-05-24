import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const { isEdit, setisEdit } = useState(false);

  const onClickEdit = (): void => {
    setisEdit(true);
  };

  return (
    <div>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el.title}</span>
          <span style={{ margin: "10px" }}>{props.el.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <input type="text" />
      )}
    </div>
  );
}
