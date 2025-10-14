import db from '../../lib/db';

import { NextResponse } from 'next/server';

export async function GET() {
  const posts = db.prepare('SELECT * FROM posts ORDER BY created_at DESC').all();
  return NextResponse.json(posts);
}
