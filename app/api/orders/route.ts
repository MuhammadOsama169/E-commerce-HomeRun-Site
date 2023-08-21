import { getAuthSession } from "@/app/utils/auth";
import { NextRequest, NextResponse } from "next/server";
import prisma from '../../lib/prisma'

// CREATE ORDER
export const POST = async (req: NextRequest) => {
    const session = await getAuthSession();
  
    if (session) {
      try {
        const body = await req.json();
        const order = await prisma.order.create({
          data: body,
        });
        return new NextResponse(JSON.stringify(order), { status: 201 });
      } catch (err) {
        console.log(err);
        return new NextResponse(
          JSON.stringify({ message: "Something went wrong!" }),
          { status: 500 }
        );
      }
    } else {
      return new NextResponse(
        JSON.stringify({ message: "You are not authenticated!" }),
        { status: 401 }
      );
    }
  };

  // FETCH ALL ORDERS
  export async function GET() {
    try {
      const posts = await prisma.order.findMany({
        orderBy:{
          createdAt:'desc'
        },
        select:{
          status:true,
          createdAt:true,
          price:true,
          products:true,
          id:true
        }
      });
      return NextResponse.json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
