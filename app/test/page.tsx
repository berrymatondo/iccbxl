import Image from "next/image";
import React from "react";
import img from "@/public/tjtj.png";

const TestPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <div className="relative w-60 h-52 bg-red-400 ">
        <div className="relative w-60 h-52 clip-diagonal">
          <Image src={img} alt="Placeholder" fill />
        </div>
        <p className="absolute top-0 left-0 text-black z-50 p-2 font-bold">
          Bruxelles
        </p>
      </div>
    </div>
  );
};

export default TestPage;
