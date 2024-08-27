import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(){
  try {
    const contacts = await prisma.contact.findMany();
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching contacts' }, { status: 500 });
  }
}