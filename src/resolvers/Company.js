module.exports.Company = {
  jobs: async ({ id }, _args, { prisma }) => {
    return await prisma.job.findMany({
      where: {
        companyId: id,
      },
    });
  },
};
