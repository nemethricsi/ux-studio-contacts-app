import prisma from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest){
  try{
    const { name, phoneNumber, email } = await request.json();
    const response = await prisma.contact.create({
      data: { name, phoneNumber, email }
    })
    if (response.id){
      return NextResponse.json(response, { status: 201 })
    }
  }catch (error) {
    return NextResponse.json({ error: 'Error creating contact' }, { status: 500 });
  }
  }