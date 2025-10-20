import { getDb } from "@/app/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentCard from "@/app/ui/ContentCard";


export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const db = await getDb();

  const content = await db.all(
    "SELECT * FROM content WHERE post_id = ? ORDER BY id ASC",
    slug
  );
  const posts = await db.all(
    "SELECT * FROM posts WHERE id = ?",
    slug
  )

  if (!content || content.length === 0) 
    return( 
        //TO DO: better visuals error code
        // <div className="flex content-center max-w-3xl mx-auto">
        //     <p className="font-extrabold text-gray-700">404 This page could not be found</p>
        // </div>
        notFound()
    );


  return (
  <div className="max-w-3xl mx-auto p-6 space-y-2">
    {posts.map(post=> (
        <h1 key={post.id} className="font-extrabold font text-gray-700">{post.title}</h1>
        ))}
    
    {content.map((cont) => (
      <ContentCard key={cont.id} cont={cont} />
    ))}
  </div>
);

}
