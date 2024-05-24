import { Modal } from "antd";

export default function ModalAlertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공",
    });
  };
  const onClickError = (): void => {
    Modal.error({
      content: "실패",
    });
  };

  return (
    <>
      <button onClick={onClickSuccess}>성공했을때</button>
      <button onClick={onClickError}>실패했을때</button>
    </>
  );
}
