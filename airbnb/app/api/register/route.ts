import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    // Hash the password with a salt of 12 rounds
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    // Return the created user as a JSON response
    return NextResponse.json(user);
  } catch (error) {
    // Handle any errors that occur during the request
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}
