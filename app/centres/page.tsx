"use client";
import Image from "next/image";
import mhi from "@/public/vie2.jpg";
import v1 from "@/public/vis1.jpg";
import v2 from "@/public/v2.jpg";
import v3 from "@/public/v3.png";
import v4 from "@/public/v4.jpg";
import { useRouter } from "next/navigation";

export default function CentresPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-md:hidden relative h-[30vh] md:h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-slate-600/70 z-10" />
        <Image
          src={mhi}
          alt="Hommes souriants représentant le ministère"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
            NOS RENDEZ-VOUS ET PROGRAMMES
          </h1>
        </div>
      </section>

      {/* Qui nous sommes Section */}
      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/*           <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-8 mb-8">
         
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                VIE A ICC
              </h2>
    
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className=" text-blue-600 text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              LA VIE A ICC
            </h1>
            <div className="relative lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={mhi}
                  alt="Quatre hommes en discussion"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/*               <h1 className="absolute top-3 left-1/2 transform -translate-x-1/2  text-white text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
                VIE A ICC
              </h1> */}
            </div>

            <div className="border-1 border-purple-400 flex items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
                <Image src={v1} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="font-semibold ">
                Visite du campus de Bruxelles
              </span>
            </div>

            <div className="border-1 border-blue-400 flex items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
                <Image src={v4} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="font-semibold ">
                Nos rendez-vous et programmes
              </span>
            </div>

            <div className="border-1 border-red-400 flex items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
                <Image src={v3} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="font-semibold ">Nos formations</span>
            </div>

            <div
              onClick={() => router.push("https://cellulesicc.be")}
              className="border-1 border-yellow-400 flex items-center gap-4 p-4 w-full rounded-xl"
            >
              <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
                <Image src={v2} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="font-semibold ">{"Nos centres d'intérêt"}</span>
            </div>

            <div className="border-1 border-green-400 flex items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
                <Image src={v1} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="font-semibold ">
                Comment pouvons-nous <br />
                vous aider ?
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
