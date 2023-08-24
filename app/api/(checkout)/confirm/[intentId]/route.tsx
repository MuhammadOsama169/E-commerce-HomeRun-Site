import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export const PUT = async (
  request: NextRequest,
  { params }: { params: { payment_intent: string } }
) => {
  const { payment_intent } = params;

  try {
    // Find the order with the given intent_id
    const order = await prisma.order.findFirst({
      where: {
        intent_id: payment_intent,
      },
    });

    if (order) {
      // Update the status using the found order's id
      await prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          status: 'Being prepared!',
        },
      });

      return new NextResponse(
        JSON.stringify({ message: 'Order has been updated' }),
        { status: 200 }
      );
    } else {
      return new NextResponse(JSON.stringify({ message: 'Order not found!' }), {
        status: 404,
      });
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};
