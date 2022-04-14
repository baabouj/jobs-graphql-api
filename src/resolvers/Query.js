module.exports.Query = {
  hello: () => "World!",
  jobs: async (_parent, _args, { prisma }) => {
    return await prisma.job.findMany();
  },
  job: async (_parent, { id }, { prisma }) => {
    return await prisma.job.findUnique({
      where: {
        id,
      },
    });
  },
  companies: async (_parent, _args, { prisma }) => {
    return await prisma.company.findMany();
  },
  company: async (_parent, { id }, { prisma }) => {
    return await prisma.company.findUnique({
      where: {
        id,
      },
    });
  },
};
