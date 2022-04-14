const { Company } = require("./Company");
const { Job } = require("./Job");
const { Mutation } = require("./Mutation");
const { Query } = require("./Query");

module.exports.resolvers = {
  Query,
  Company,
  Job,
  Mutation,
};
