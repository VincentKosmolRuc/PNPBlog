import { getDb } from "@/app/lib/db";
import PostCard from "@/app/ui/PostCard";
import Link from "next/link";

export default async function BlogPage() {
  const db = await getDb();
  const posts = await db.all("SELECT * FROM posts ORDER BY created_at DESC");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-6">
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
            posts.map((post) => 
            <Link key ={post.id} href={`/blog/${post.id}`}>
              <PostCard key={post.id} post={post} />
            </Link>
            )
        )}
    </div>
  );
}
