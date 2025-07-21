"use client";
import { useRouter } from "next/navigation";
import React from "react";
import v1 from "@/public/vis1.jpg";
import Image from "next/image";

const Visite = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("https://www.youtube.com/watch?v=8PtpKC5GZ-4")}
      className="border-1 border-purple-400 flex items-center gap-4 p-4 w-full rounded-xl"
    >
      <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
        <Image src={v1} alt="Quatre hommes en discussion" fill />
      </div>
      <span className="font-semibold ">Visite du campus de Bruxelles</span>
    </div>
  );
};

export default Visite;
