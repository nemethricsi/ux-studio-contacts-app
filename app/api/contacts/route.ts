import s3Client from '@/app/lib/aws';
import prisma from '@/app/lib/prisma';
import { PutObjectCommand, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'asc' },
    });
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching contacts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const email = formData.get('email') as string;
    const file = formData.get('image') as File | null;

    let imageUrl = null;

    if (file) {
      const fileName = `${uuidv4()}-${file.name}`;
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadParams: PutObjectCommandInput = {
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      };

      const command = new PutObjectCommand(uploadParams);
      await s3Client.send(command);

      imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`;
    }

    const response = await prisma.contact.create({
      data: { name, phoneNumber, email, imageUrl },
    });

    if (response.id) {
      return NextResponse.json(response, { status: 201 });
    }
  } catch (error) {
    if (error instanceof Error && error.message === 'Name field cannot be empty') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error('Error creating contact:', error);
    return NextResponse.json({ error: 'Error creating contact' }, { status: 500 });
  }
}
