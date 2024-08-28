import { Prisma } from '@prisma/client';

export const enforceNonEmptyNameExtension = Prisma.defineExtension((client) => {
  return client.$extends({
    query: {
      contact: {
        create: async ({ args, query }) => {
          const { name } = args.data;
          if (!name || name.trim() === '') {
            throw new Error('Name field cannot be empty');
          }
          return query(args);
        },
        update: async ({ args, query }) => {
          const { name } = args.data;

          if (typeof name === 'string') {
            if (name.trim() === '') {
              throw new Error('Name field cannot be empty');
            }
          } else if (name && 'set' in name) {
            // Handling the case where `name` is a StringFieldUpdateOperationsInput
            const nameValue = name.set;
            if (typeof nameValue === 'string' && nameValue.trim() === '') {
              throw new Error('Name field cannot be empty');
            }
          }
          return query(args);
        },
      },
    },
  });
});
