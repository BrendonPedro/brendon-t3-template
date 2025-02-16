import Link from "next/link";
import Image from "next/image";

const mockUrls = [
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxgo5ZuuxmhTP9Bqp035voV8WFJIdS2gXbDkit",
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxChCuiQZwUM3OCd0rlYiXITkNSsocEBVRD2JQ",
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxEsUPmLraO98mBjEHKhunw3lvzFDPRZNeV2Ji",
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxxygV2tX0LocruJqZNXn2kiYaT5F91vb8RSlp",
  "https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxt2qHY8RcNnwsZYMPoFSEQIOrbcm8Xfd2kzW0",
  'https://gybih0c1ba.ufs.sh/f/w3thSjMmOXFxRm911xuLGOPx0n2ds8VBf3Y6jE9CcuqJik5A'
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url: url,
}));

export default function HomePage() {
  return (
    <main className="">
        <div className="flex flex-wrap gap-4">
          {[...mockImages, ...mockImages, ...mockImages,].map((image) => (
            <Image key={`${image.id}-${Math.random()}`} src={image.url} alt={`Image ${image.id}`} width={100} height={100} />  
          ))}
      </div>
      <h1>Gallery in progress</h1>
    </main>
  );
}
