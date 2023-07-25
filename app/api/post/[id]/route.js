// url: http://localhost:3000/api/post/123
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    
    try {
        const { id } = params
        
        const item =  await prisma.item.findUnique({
            where: {
                id
            }
        })
        if(!item){
            return NextResponse.json(
                {message: "Post not found", err},
                {status: 404}
            )
        }
        return NextResponse.json(item)

    } catch (err) {
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}

export const PATCH = async (request, {params}) => {
    try {
        const body = await request.json();
        const {title, description, streak } = body;
        const {id} = params

        const updateStreak =  await prisma.item.update({
            where: {
                id
            },
            data: {
                title,
                description,
                streak
            }
        })

        if(!updateStreak){
            return NextResponse.json(
                {message: "Streak not found", err},
                {status: 404}
            )
        }

        return NextResponse.json(updateStreak)

    } catch (err) {
        return NextResponse.json({message: "Update Error", err}, {status: 500})
    }
}