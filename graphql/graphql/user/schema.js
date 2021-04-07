const {GraphQLSchema,GraphQLObjectType} = require('graphql')
const Query = GraphQLObjectType({
    name:'UserQuery',
    description:"用户信息查询",
    field:() =>(Object.assig({
    },userSchema.query))
})
const schema = new GraphQLSchema({
    query:Query
})
module.exports = schema;