import {
  Wrapper,
  Title,
  Label,
  ID,
  Password,
} from "../../../styles/01-02-emotion";

export default function EmotionPage() {
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Label>아이디</Label>
      <ID type="text" />
      <Label>비밀번호</Label>
      <Password type="password" />
    </Wrapper>
  );
}
