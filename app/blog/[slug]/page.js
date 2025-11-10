import { getDb } from "@/app/lib/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentCard from "@/app/ui/ContentCard";


export default async function BlogPostPage({ params }) {
  const { slug } = params;
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
        <div>
             <p>This blog post is not yet build. CMS is being constructed. For style example look at <a href="https://pnp-blog-test.vercel.app/blog/5" className="text-blue-500">100k run</a> </p>
            notFound()
        </div>
       
    );


  return (
  <div className="max-w-3xl mx-auto p-6 space-y-2">
    {posts.map(post=> (
        <div key={post.id}>
            <h1  className="font-extrabold text-center text-4xl text-gray-700">{post.title}</h1>
            <Image
                    src={`/${post.front_image}`}
                    width={1920}
                    height={1080}
                    alt={post.title}
                    className="aspect-[16/9] object-cover w-full"
            />
        </div>
        ))}
    
    {content.map((cont) => (
      <ContentCard key={cont.id} cont={cont} />
    ))}
  </div>
);

}
