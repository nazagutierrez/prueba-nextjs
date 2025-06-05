import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const dynamic = 'force-static'

const CryptoSchema = z.object({
  id: z.string(),
  name: z.string().max(50),
  ticker: z.string().max(20),
  price: z.number().min(1),
  amount: z.number().min(1),
});
 
export async function GET() {
  const res = await fetch('http://localhost:3000/cryptos', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = CryptoSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(result.error, { status: 400 });
  }

  const res = await fetch('http://localhost:3000/cryptos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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
    const res = await fetch(`http://localhost:3000/cryptos/${result.data.id}`, {
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
