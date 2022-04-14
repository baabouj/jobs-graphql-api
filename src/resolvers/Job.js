module.exports.Job = {
  company: async ({ companyId }, _args, { prisma }) => {
    return await prisma.company.findUnique({
      where: {
        id: companyId,
      },
    });
  },
};
