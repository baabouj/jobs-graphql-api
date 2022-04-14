module.exports.Mutation = {
  signup: async (_parent, args, { prisma }) => {
    const company = await prisma.company.create({
      data: args,
    });
    return company;
  },
  login: async (_parent, { id }, { prisma }) => {
    const company = await prisma.company.findUnique({
      where: { id },
    });
    return company;
  },
  post: async (_parent, { companyId, job }, { prisma }) => {
    let newJob = await prisma.job.create({
      data: { ...job, companyId },
    });
    return newJob;
  },
};
