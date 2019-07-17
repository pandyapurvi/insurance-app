const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./server/schema/schema');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request');
});
