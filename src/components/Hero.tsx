import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  image: string;
  alt: string;
  children: ReactNode;
};

export default function TitleBanner({ image, alt, children }: Props) {
  const CDN = process.env.NEXT_PUBLIC_CDN || "";
  return (
    <div className="relative max-h-screen overflow-hidden">
      <div className="w-full h-full z-0">
        <div className="absolute w-full h-full z-10">
          {children}
        </div>
        <Image
          className="w-full object-cover translate-y-1/2 z-0"
          src={`${CDN}${image}`}
          alt={alt}
          width={1280}
          height={720}
          layout="responsive"
        />
      </div>
    </div>
  );
}
