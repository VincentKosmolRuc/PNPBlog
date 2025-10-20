import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm">
      <Image
        src={`/${post.front_image}`}
        width={1920}
        height={1080}
        alt={post.title}
        className="aspect-[16/9] object-cover w-full"
      />
      <div className="p-2">
        <h1 className="font-extrabold text-gray-700">{post.title}</h1>
        <p className="line-clamp-3 text-sm text-gray-700">{post.description}</p>
      </div>
    </div>
  );
}

