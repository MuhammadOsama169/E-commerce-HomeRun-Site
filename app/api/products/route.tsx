import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
export async function GET() {
  try {
    const posts = await prisma.product.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
