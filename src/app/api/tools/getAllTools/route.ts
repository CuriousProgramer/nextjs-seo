import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch('https://dummyjson.com/products/1');
    const data = await res.json()

    console.log('Products are',data);
   
    return NextResponse.json({data});
  }