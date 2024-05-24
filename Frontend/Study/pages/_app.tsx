import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

export default function App({ Component }: AppProps): JSX.Element {
  // graphql세팅

  return (
    <div>
      <div>=====여기는 _app.js 컴포넌트 시작부분입니다. =====</div>
      {/* 모든 실행이 여기서 시작됨  페이지 컴포넌트 */}

      <ApolloSetting>
        <>
          {/* <Global styles={globalStyles}> */}
          <Layout>
            <Component />
          </Layout>
          {/* </Global> */}
        </>
      </ApolloSetting>
      <div>=====여기는 _app.js 컴포넌트 끝부분입니다. =====</div>
    </div>
  );
}
