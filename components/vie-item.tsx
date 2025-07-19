"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type VieItemProps = {
  img: StaticImageData;
  path: string;
  text: string;
  color: string;
};

const VieItem = ({ img, path, text, color }: VieItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/${path}`)}
      className={`border-1 ${color} flex items-center gap-4 p-4 w-full rounded-xl`}
    >
      <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
        <Image src={img} alt="Quatre hommes en discussion" fill />
      </div>
      <span className="font-semibold ">{text}</span>
    </div>
  );
};

export default VieItem;
