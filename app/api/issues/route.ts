import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
    title: z.string().min(1).max(255), // has to be a string with a minimum of 1 character and a maximum of 255 characters
    description: z.string().min(1) // minimum of 1 character
});

// Discussed in part one
export async function POST(request: NextRequest) {
    const body = await request.json(); // request.json() returns a promise, so await
    const validation =  createIssueSchema.safeParse(body);

    if(!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 }) // ERROR 400 -> "bad request"


    // Inserting a new issue in our database
    const newIssue = await prisma.issue.create({
        data: { title: body.title, description: body.description }
    });

    return NextResponse.json(newIssue, { status: 201 }) // 201 -> "An object was created"
}