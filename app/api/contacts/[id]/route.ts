import s3Client from '@/app/lib/aws';
import prisma from '@/app/lib/prisma';
import type { DeleteObjectCommandInput, PutObjectCommandInput } from '@aws-sdk/client-s3';
import { DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function PATCH(request: NextRequest, context: { params: { id: string } }) {
  try {
    const { id } = context.params;
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const email = formData.get('email') as string;
    const file = formData.get('image') as File | null;
    const shouldDeleteImage = formData.get('shouldDeleteImage') as string;

    const existingContact = await prisma.contact.findUnique({
      where: { id },
    });

    let imageUrl = existingContact?.imageUrl || null;

    if (shouldDeleteImage === 'true' && imageUrl) {
      const deleteParams: DeleteObjectCommandInput = {
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: imageUrl.split('/').pop()!,
      };
      const command = new DeleteObjectCommand(deleteParams);
      await s3Client.send(command);
      imageUrl = null;
    }

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

    const updatedContact = await prisma.contact.update({
      where: { id },
      data: {
        name,
        phoneNumber,
        email,
        imageUrl,
      },
    });

    return NextResponse.json(updatedContact, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.message === 'Name field cannot be empty') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error('Error in PATCH handler:', error);
    return NextResponse.json({ error: 'Error updating contact' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: { params: { id: string } }) {
  try {
    const { id } = context.params;

    const existingContact = await prisma.contact.findUnique({
      where: { id },
    });
    let imageUrl = existingContact?.imageUrl || null;

    if (imageUrl) {
      const deleteParams: DeleteObjectCommandInput = {
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: imageUrl.split('/').pop()!,
      };
      const command = new DeleteObjectCommand(deleteParams);
      await s3Client.send(command);
    }

    await prisma.contact.delete({ where: { id } });
    return NextResponse.json({ success: 'Contact deleted' }, { status: 200 });
  } catch (error) {
    console.error('Error in DELETE handler:', error);
    return NextResponse.json({ error: 'Error deleting contact' }, { status: 500 });
  }
}
