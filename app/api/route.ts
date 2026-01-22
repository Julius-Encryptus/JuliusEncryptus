import { NextRequest, NextResponse } from "next/server";
import decrypt from "@/lib/decrypt";
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const cipher = formData.get("cipher");
    if (!cipher || typeof cipher != "string")
      return NextResponse.json(
        {
          success: false,
          message: "The cipher is either missing or has an invalid format",
        },
        { status: 401 },
      );

    return NextResponse.json(
      {
        response: decrypt(cipher.toLowerCase()),
        success: true,
      },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err instanceof Error ? err.message : "Unknown Error occured",
      },
      { status: 500 },
    );
  }
}
