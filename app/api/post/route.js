// url: http://localhost:3000/api/post
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";


    export const POST = async (request) => {
        try {
            const body = await request.json();
            const {title, description, streak } = body;
    
            const newItem =  await prisma.item.create({
                data: {
                    title,
                    description,
                    streak,
                },
            })
    
            return NextResponse.json(newItem)
    
        } catch (err) {
            return NextResponse.json({message: "POST Error", err}, {status: 500})
        }
    }
    export const GET = async (request) => {
        try {
            
            const items =  await prisma.item.findMany()
    
            return NextResponse.json(items)
    
        } catch (err) {
            return NextResponse.json({message: "GET Error", err}, {status: 500})
        }
    }
    
 