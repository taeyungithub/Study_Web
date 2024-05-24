import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

interface IAplloSettingProps {
  children: JSX.Element;
}

export default function ApolloSetting(props: IAplloSettingProps): JSX.Element {
  const uploadLink = createUploadLink({
    uri: "http://backend-preactice.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 벡엔드에서 받아온 데이터 임시로 저장해 놓기 ==> 나중에 더 자세히 알아보기
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
