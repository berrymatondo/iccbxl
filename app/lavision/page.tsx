"use client";
import Image from "next/image";
import ppp from "@/public/ppp.png";
import v1 from "@/public/vis1.jpg";
import v2 from "@/public/v2.jpg";
import v3 from "@/public/v3.png";
import { useRouter } from "next/navigation";
import { CrossIcon } from "lucide-react";

export default function VisionPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* Qui nous sommes Section */}
      <section className="py-8 md:py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/*           <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-8 mb-8">
         
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                VIE A ICC
              </h2>
    
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className=" text-white text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              LA VISION
            </h1>
            <div className="relative lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={ppp}
                  alt="Quatre hommes en discussion"
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h1 className="text-center text-white p-4">
                <p className="">{"Apôtres Yvan & Yves"}</p>
                <p className="uppercase font-semibold">{"Castanou"}</p>
              </h1>
            </div>

            <div className=" flex items-center gap-4 p-4 w-full rounded-xl">
              {/*               <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
                <Image src={v1} alt="Quatre hommes en discussion" fill />
              </div> */}
              <p className="text-white">
                <span className="font-light">
                  {
                    "La vision de Impact Centre Chrétien est de construire des hommes et des femmes qui inspirent et influencent positivement leur environnement pour la gloire de Dieu et pour l’avancement de l’humanité."
                  }
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className=" max-w-6xl mx-auto">
          {/*           <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-8 mb-8">
         
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                VIE A ICC
              </h2>
    
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className=" text-blue-600 text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              NOS VALEURS
            </h1>
            <div className=" relative lg:w-1/2">
              {/*               <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={ppp}
                  alt="Quatre hommes en discussion"
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div> */}
              <h1 className="text-center text-black p-4">
                <span className="">{"Nos valeurs sont "}</span>
                <span className="uppercase font-semibold text-lg">
                  {"C.H.R.I.S.T."}
                </span>
              </h1>
            </div>

            <div className="bg-gradient-to-bl from-blue-600 to-blue-500 flex items-start gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15">
                <CrossIcon className="text-white" />
                {/*                 <Image src={v4} alt="Quatre hommes en discussion" fill />
                 */}{" "}
              </div>
              <p className="text-white flex flex-col">
                <span className=" ">
                  <strong className="text-2xl">C</strong> pour{" "}
                  <strong className="text-lg">{"Consécration"}</strong>
                </span>
                <span className="text-sm pt-2 text-gray-200">
                  {
                    " Vivre une vie active pour Dieu dans la sainteté et l’obéissance à Christ."
                  }
                </span>
              </p>
            </div>

            <div className="bg-gradient-to-bl from-purple-600 to-purple-500 flex items-start gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15">
                <CrossIcon className="text-white" />
                {/*                 <Image src={v4} alt="Quatre hommes en discussion" fill />
                 */}{" "}
              </div>
              <p className="text-white flex flex-col">
                <span className=" ">
                  <strong className="text-2xl">H</strong> pour{" "}
                  <strong className="text-lg">{"Humilité"}</strong>
                </span>
                <span className="text-sm pt-2 text-gray-200">
                  {
                    "  Servir Dieu  avec un coeur humble et bien disposé et en respectant les autres."
                  }
                </span>
              </p>
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
              <span className="font-semibold ">{"Les cellules de maison"}</span>
            </div>

            <div className="border-1 border-green-400 flex items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15 rounded-full overflow-hidden shadow-lg">
                <Image src={v1} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="font-semibold ">
                Comment pouvons-nous vous aider ?
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
