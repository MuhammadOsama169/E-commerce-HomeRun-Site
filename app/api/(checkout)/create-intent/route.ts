import { getAuthSession } from "@/app/utils/auth";
import { NextRequest } from "next/server";

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