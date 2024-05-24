import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  background-color: blue;
  // 안에 함수 만들기 가능
  ${(props) => (props.isActive ? "yellow" : "")}
`;
