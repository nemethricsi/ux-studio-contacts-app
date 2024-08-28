import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await prisma.contact.delete({ where: { id } });
    return NextResponse.json({ success: 'Contact deleted' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error deleting contact' }, { status: 500 });
  }
}
