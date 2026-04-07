import { NextResponse } from 'next/server';
import type { Book } from '@/types/books';

export async function GET() {
  if (!process.env.API_URL) {
    throw new Error('API_URL not defined');
  }

  const res = await fetch(`${process.env.API_URL}/books`);

  if (!res.ok) {
    const text = await res.text();
    console.error('API fetch error:', text);
    return NextResponse.error();
  }
  const data: Book[] = await res.json();
  return NextResponse.json(data);
}
