import express from "express";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { config } from "dotenv";

config();
const app = express();
const PORT = process.env.PORT || 3123;
mongoose.connect(`${process.env.MONGODB_URI}`);

app.use(express.json());

const schema = buildSchema(``);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
