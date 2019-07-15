const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

const FaqType = new GraphQLObjectType({
  name: 'Faq',
  fields: () => ({
    title: {type: GraphQLString},
    body: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    faq: {
      type: FaqType,
      args: {id:{type:GraphQLString}},
      resolve(parent, args){
        //Here get the data from DB/ JSON file
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});
