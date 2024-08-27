import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(){
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {createdAt: 'asc'}
    });
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching contacts' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest){
  try {
    const { id } = await request.json();
    await prisma.contact.delete({ where: { id } })
    return NextResponse.json({ success: 'Contact deleted' }, { status: 200 });
  } catch(error){
    console.error(error);
    return NextResponse.json({ error: 'Error deleting contact' }, { status: 500 });
  }
}