import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma'

export const PUT= async ({params}:{params:{intentId:string}})=>{
    const {intentId} = params

    try{
        await prisma?.order.update({
            where:{
                intent_id:intentId,
            },
            data:{status:'Order confirmed, Getting Shipped'}
        })
        return new NextResponse(
            JSON.stringify({ message:"Order has been updated!" }),
            { status: 200 }
          );
    }catch(err){
        console.log(err)
        return new NextResponse(
            JSON.stringify({ message:"Something went wrong!" }),
            { status: 500 } 
        )
        
    }
    
}