import PostCard from "../ui/PostCard";
import Link from "next/link";
import { getDb } from "@/app/lib/db";

export default async function SearchPage({ searchParams }) {
  const query = searchParams.query || "";
  const db = await getDb();

  const posts = await db.all(
    "SELECT * FROM posts WHERE title LIKE ? OR description LIKE ? OR tags LIKE ?",
    [`%${query}%`, `%${query}%`,`%${query}%`]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-6">
      <ul>
        {posts.length === 0 ? (
               <p>No posts found.</p>
             ) : (
                 posts.map((post) => 
            <Link key ={post.id} href={`/blog/${post.id}`}>
              <PostCard key={post.id} post={post} />
            </Link>
            )
             )}
      </ul>
    </div>
  );
}

