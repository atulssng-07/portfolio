import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thanks for reaching out. This demo contact route received the message successfully."
  });
}
