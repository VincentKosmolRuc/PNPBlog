// app/lib/db.js
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

let connection;

export async function getDb() {
  if (connection) return connection;

  const dbPath = path.join(process.cwd(), "public", "blog.db");

  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
  connection = db;
  return db;
}
