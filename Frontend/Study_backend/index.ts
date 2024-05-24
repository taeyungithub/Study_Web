// const qqq: String = "안녕하세요";

// console.log(qqq);

import { DataSource } from "typeorm/data-source";
import { Board } from "./Board.postgres";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// API-DOCS 만들기

const typeDefs = `#graphql

    input CreateBoardInput{
        writer : String
         title : String
        contents : String
    }

    type MyBoard{
        number: Int
        writer: String
        title: String
        contents: String
    }

  type Query {
    fetchBoards: [MyBoard]
  }
  type Mutation{
    // createBoard(writer : String, title : String, contents : String): String

    createBoard(createBoardInput: CreateBoardInput): String

  }
`;

// API만들기
const resolvers = {
  Query: {
    fetchBoards: async () => {
      //모두꺼내기
      const result = await Board.find();
      return result;

      //   한개꺼내기
      //   const result1 = await Board.findOne({ where: { number: 3 } });
      //   return result;
    },
  },
  Mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,

        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });

      return "게시글 등록에 성공";
    },

    // updateBoard: async () => {
    //   await Board.update({ number: 3 }, { writer: "영희" });
    // },

    // deleteBoard: async () => {
    //   // 3가지
    //   await Board.delete({ number: 3 }); //삭제
    // //   await Board.update({ number: 3 }, { isDeleted: true }); //삭제했다 치자  | soft delete
    // //   await Board.update({ number: 3 }, { deletedAt: new Date() }); //삭제했다 치자  | null이면 삭제x 날짜가있으면 삭제된거
    // },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   cors: true,
});

startStandaloneServer(server).then(() => {
  console.log("그래프큐엘 서버가 실행됨");
});

// const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "", //"데이터베이스 깔린 컴퓨터 IP 주소",
//   port: 0, //"데이터베이스 깔린 컴퓨터 포트",
//   username: "",
//   password: "",
//   database: "",
//   entities: [Board],
//   synchronize: true,
//   logging: true,
// });

// AppDataSource.initialize()
//   .then(() => {
//     console.log("DB접속에 성공했습니다.");

//     startStandaloneServer(server).then(() => {
//       console.log("그래프큐엘 서버가 실행됨");
//     });
//   })
//   .catch((error) => {
//     console.log("DB접속에 실패했습니다");
//     console.log(error);
//   });
