const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
} = graphql;

const homepages = require('../data/homepage.json');
const faqs = require('../data/faq.json');

const HomepageType = new GraphQLObjectType({
  name: 'Homepage',
  fields: () => ({
    id: {type: GraphQLID},
    heading: {type: GraphQLString},
    subheading: {type: GraphQLString},
    heroImageUrl: {type: GraphQLString}
  })
});

const FaqType = new GraphQLObjectType({
  name: 'Faq',
  fields: () => ({
    id: {type: GraphQLID},
    title: {type: GraphQLString},
    body: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    faq: {
      type: FaqType,
      args: {id:{type:GraphQLID}},
      resolve(parent, args){
        return _.find(faqs, {id:args.id});
        //Here get the data from DB/ JSON file
      }
    },
    homepage: {
      type: HomepageType,
      args: {id: {type:GraphQLID}},
      resolve(parent, args){
        return _.find(homepages, {id:args.id});
      }
    },
    faqs: {
      type: new GraphQLList(FaqType),
      resolve(parent,args){
        return faqs;
      }
    }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});
