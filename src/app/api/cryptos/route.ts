import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = "force-static";
const BASE_URL = process.env.EXTERNAL_API_BASE_URL || "http://localhost:3000/cryptos";
const JSON_HEADERS = {
  "Content-Type": "application/json",
};

const CryptoSchema = z.object({
  id: z.string(),
  name: z.string().max(50),
  ticker: z.string().max(20),
  price: z.number().min(1),
  amount: z.number().min(1),
});

export async function GET() {
  // Get all cryptos
  const res = await fetch(BASE_URL, {
    headers: JSON_HEADERS,
  });
  const data = await res.json();

  return Response.json({ data });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Check if the request body is valid
  const result = CryptoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  // Send data to the server
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(result.data),
  });

  const data = await res.json();

  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const result = CryptoSchema.pick({ id: true }).safeParse(body);

  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  try {
    const res = await fetch(`${BASE_URL}/${result.data.id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Error deleting crypto from DB");
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const result = CryptoSchema.safeParse(body.crypto);

  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  try {
    const res = await fetch(`${BASE_URL}/${result.data.id}`, {
      method: "PATCH",
      headers: JSON_HEADERS,
      body: JSON.stringify(result.data),
    });

    if (!res.ok) {
      throw new Error("Error updating crypto in DB");
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: (error as Error).message },
      { status: 500 }
    );
  }
}
