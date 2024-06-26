const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
}

type Auth {
    token: ID!
    user: User
}

type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

input BookInput {
    author: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Query {
    me: User
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    deleteBook(bookId: String!): User
}

`;

module.exports = typeDefs;