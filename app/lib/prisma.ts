import { enforceNonEmptyNameExtension } from '@/app/lib/prismaExtensions';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient().$extends(enforceNonEmptyNameExtension);

export default prisma;
