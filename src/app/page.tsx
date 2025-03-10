// This page runs on the server only - I can make db and sql calls directly

import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

const mockUrls = [
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxgo5ZuuxmhTP9Bqp035voV8WFJIdS2gXbDkit",
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxChCuiQZwUM3OCd0rlYiXITkNSsocEBVRD2JQ",
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxEsUPmLraO98mBjEHKhunw3lvzFDPRZNeV2Ji",
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxxygV2tX0LocruJqZNXn2kiYaT5F91vb8RSlp",
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url: url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
          {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
          {[...mockImages, ...mockImages, ...mockImages,].map((image, index) => (
            <div key={`${image.id}-${Math.random()}`} className="w-[100px] h-[100px] relative">
              <Image 
                src={image.url} 
                alt={`Image ${image.id}`} 
                fill
                sizes="100px"
                priority={index === 0}
                style={{ objectFit: 'cover' }}
              />  
            </div>
          ))}
      </div>
      <h1>Gallery in progress</h1>
    </main>
  );
}
