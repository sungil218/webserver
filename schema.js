import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers' // resolvers.js 파일 생성

const typeDefs = `
    type Lib_1 {
        _id: ID!
        lib_num: Int!
        seat_num: Int!
        seat_check: Int!
    }

    type Query {
        seat_check: [Lib_1]
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;