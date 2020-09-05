const { GraphQLServer } = require("graphql-yoga");
const csv = require("csv-parser");
const fs = require("fs");

const typeDefs = `
type Query {
  hello(name: String): String,
  products: [Product]
} 
type Product {
  id:String!,
 name:String,
 size:String,
 description:String,
 price:String,
 image:String
}
`;

const resolvers = {
  Query: {
    hello: (_, args) => `Hello ${args.name || "World"}!`,
    products: async (_, args) => {
      // const productsCSV = await getData();
      const results = [];
      await new Promise(function (resolve, reject) {
        fs.createReadStream("./src/sample-data.csv")
          .pipe(csv())
          .on("data", (data) => results.push(data))
          .on("end", () => {
            //some final operation
            resolve();
          });
      });
      return results;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running at http://localhost:4000`));
