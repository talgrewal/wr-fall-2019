const { ApolloServer } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");
const jwt = require("jsonwebtoken");

const typeDefs = require("../prisma/datamodel.prisma");

module.exports = ({ app, pgResource }) => {
  const schema = makeExecutableSchema({
    typeDefs
  });

  const apolloServer = new ApolloServer({
    context: ({ req }) => {
      const tokenName = app.get("JWT_COOKIE_NAME");
      const token = req ? req.cookies[tokenName] : undefined;
      let user = null;
      try {
        if (token) user = jwt.verify(token, app.get("JWT_SECRET"));
        return { req, token, user, pgResource };
      } catch (e) {
        throw e;
      }
    },
    schema
  });

  apolloServer.applyMiddleware({
    app,
    cors: app.get("CORS_CONFIG")
  });
};
