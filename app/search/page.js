// 'use client'
 
// import { useSearchParams } from 'next/navigation'
// import { getDb } from "@/app/lib/db";

// export default function SearchBar() {
//   const searchParams = useSearchParams()
 
//   const search = searchParams.get('query')
//   return (
//   <p>{search}</p>
//   )
// }




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







// export default async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const q = searchParams.get("q") || "";
//   const db = await getDb();
//   const results = await db.all(
//     "SELECT * FROM posts WHERE title LIKE ? OR description LIKE ? OR tags LIKE ? ORDER BY id ASC",
//     [`%${q}%`, `%${q}%`]
//   );
//   return Response.json(results);
// }


// export default async function SearchPage({
//   searchParams,
// }: {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }) {
//   const results = await getDb((await searchParams).query)
 
//   return <div>...</div>
// }
