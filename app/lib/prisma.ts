import { enforceNonEmptyNameExtension } from '@/app/lib/prismaExtensions';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL!;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter }).$extends(enforceNonEmptyNameExtension);

export default prisma;
