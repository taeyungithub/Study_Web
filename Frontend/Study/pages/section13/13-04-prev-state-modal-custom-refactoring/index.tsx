import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function ModalAlertPage(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = (): void => {
  //   setIsModalOpen((prev) => !prev);
  // };

  // const handleOk = (): void => {
  //   setIsModalOpen((prev) => !prev);
  // };

  // const handleCancel = (): void => {
  //   setIsModalOpen((prev) => !prev);
  // };

  const onToggleModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달 열기</button>

      {/* 모달 종료방식 1  숨기기 */}
      <Modal open={isModalOpen} onOk={onToggleModal} onCancel={onToggleModal}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      {/* 모달 종료방식 2 삭제 */}
      {isModalOpen && (
        <Modal open={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
