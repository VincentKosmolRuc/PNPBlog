import Image from "next/image";
import NavLink from "./ui/NavLink";
import Button from "./ui/Button";

export default function Page() {
  return (
    <div>
      <Image
      src="/HeroImage.jpg"
      width={4000}
      height={800}
      alt="beautifull view of mount blanc"
      // className="w-screen max-w-none fixed left-0"
      /> 
     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 m-6">

        {/* Placeholder until database is build */}
        <div>
          <Image
          src="/RecentBlogPost.jpg"
          width={1920}
          height={1080}
          alt="most recent blog post"
          className="col-start-1"
          /> 
          <h1 className="col-start-1 font-extrabold text-gray-700">Headline post 1</h1>
          <p className="line-clamp-3 col-start-1 text-sm text-gray-700">This is the description for the first post and it is very long lgrdg rfefgrdgrdr ngrdr lgdrg nridlgnridn rldngirndlgrngdi rgnridlgnridngirlndgilrd dwadwa dwad dwa dwad wad wad.</p> 
        </div>

        <div>
          <Image
          src="/RecentBlogPost.jpg"
          width={1920}
          height={1080}
          alt="most recent blog post"
          className="col-start-2"
          /> 
          <h1 className="col-start-2 font-extrabold text-gray-700">Headline post 2</h1>
          <p className="line-clamp-3 col-start-2 text-sm text-gray-700">This is the description for the second post and it is very long lgrdg rfefgrdgrdr ngrdr lgdrg nridlgnridn rldngirndlgrngdi rgnridlgnridngirlndgilrd dwadwa dwad dwa dwad wad wad.</p>
        </div>

        <div>
          <Image
          src="/RecentBlogPost.jpg"
          width={1920}
          height={1080}
          alt="most recent blog post"
          className="col-start-3"
          /> 
          <h1 className="col-start-3 font-extrabold text-gray-700">Headline post 3</h1>
          <p className="line-clamp-3 col-start-3 text-sm text-gray-700">This is the description for the third post and it is very long lgrdg rfefgrdgrdr ngrdr lgdrg nridlgnridn rldngirndlgrngdi rgnridlgnridngirlndgilrd dwadwa dwad dwa dwad wad wad.</p> 
        </div>

        <div>
          <Image
          src="/RecentBlogPost.jpg"
          width={1920}
          height={1080}
          alt="most recent blog post"
          className="col-start-1"
          /> 
          <h1 className="col-start-1 font-extrabold text-gray-700">Headline post 4</h1>
          <p className="line-clamp-3 col-start-1 text-sm text-gray-700">This is the description for the fourth post and it is very long lgrdg rfefgrdgrdr ngrdr lgdrg nridlgnridn rldngirndlgrngdi rgnridlgnridngirlndgilrd dwadwa dwad dwa dwad wad wad.</p> 
        </div>

        <div>
          <Image
          src="/RecentBlogPost.jpg"
          width={1920}
          height={1080}
          alt="most recent blog post"
          className="col-start-2"
          /> 
          <h1 className="col-start-2 font-extrabold text-gray-700">Headline post 5</h1>
          <p className="line-clamp-3 col-start-2 text-sm text-gray-700">This is the description for the fifth post and it is very long lgrdg rfefgrdgrdr ngrdr lgdrg nridlgnridn rldngirndlgrngdi rgnridlgnridngirlndgilrd dwadwa dwad dwa dwad wad wad.</p>
        </div>

        <div>
          <Image
          src="/RecentBlogPost.jpg"
          width={1920}
          height={1080}
          alt="most recent blog post"
          className="col-start-3"
          /> 
          <h1 className="col-start-3 font-extrabold text-gray-700">Headline post 6</h1>
          <p className="line-clamp-3 col-start-3 text-sm text-gray-700">This is the description for the sixed post and it is very long lgrdg rfefgrdgrdr ngrdr lgdrg nridlgnridn rldngirndlgrngdi rgnridlgnridngirlndgilrd dwadwa dwad dwa dwad wad wad.$</p> 
        </div>
  
      </div>

      <div className="flex justify-center m-8">
        <Button path="/blog" title="More Blog Posts"/>
      </div>
    </div>
  );
}
