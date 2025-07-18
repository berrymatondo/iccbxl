"use client";
import Image from "next/image";
import ppp from "@/public/ppp.png";
import iccli from "@/public/iccli.jpg";
import { CrossIcon } from "lucide-react";
import { FaHandshake, FaHandsPraying } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { FaBalanceScale } from "react-icons/fa";
import {
  MdAlternateEmail,
  MdOutlineAccessTime,
  MdOutlineLocalPhone,
  MdOutlineSearch,
} from "react-icons/md";
import { GoHome } from "react-icons/go";

export default function VisionPage() {
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
                <FaHandsPraying className="size-6 text-white" />
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

            <div className="bg-gradient-to-bl from-amber-700 to-amber-500 flex items-start gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15">
                <IoMdPeople className="size-6 text-white" />
                {/*                 <Image src={v4} alt="Quatre hommes en discussion" fill />
                 */}{" "}
              </div>
              <p className="text-white flex flex-col">
                <span className=" ">
                  <strong className="text-2xl">R</strong> pour{" "}
                  <strong className="text-lg">{"Respect"}</strong>
                </span>
                <span className="text-sm pt-2 text-gray-200">
                  {
                    "Manifester du respect envers les autres, quel que soit leur statut et leur position."
                  }
                </span>
              </p>
            </div>

            <div className="bg-gradient-to-bl from-green-600 to-green-500 flex items-start gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15">
                <FaBalanceScale className="text-white size-6" />
                {/*                 <Image src={v4} alt="Quatre hommes en discussion" fill />
                 */}{" "}
              </div>
              <p className="text-white flex flex-col">
                <span className=" ">
                  <strong className="text-2xl">I</strong> pour{" "}
                  <strong className="text-lg">{"Intégrité"}</strong>
                </span>
                <span className="text-sm pt-2 text-gray-200">
                  {
                    "  Vivre une vie intègre à l’église et en dehors, sans duplicité."
                  }
                </span>
              </p>
            </div>

            <div className="bg-gradient-to-bl from-red-600 to-red-400 flex items-start gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15">
                <FaHandshake className="text-white size-6" />
                {/*                 <Image src={v4} alt="Quatre hommes en discussion" fill />
                 */}{" "}
              </div>
              <p className="text-white flex flex-col">
                <span className=" ">
                  <strong className="text-2xl">S</strong> pour{" "}
                  <strong className="text-lg">{"Service"}</strong>
                </span>
                <span className="text-sm pt-2 text-gray-200">
                  {
                    " Un service pour Dieu engagé, excellent et imprégné d’un grand sens du devoir."
                  }
                </span>
              </p>
            </div>

            <div className="bg-gradient-to-bl from-teal-600 to-teal-500 flex items-start gap-4 p-4 w-full rounded-xl">
              <div className="relative w-15 h-15">
                <MdOutlineSearch className="text-white size-6" />
                {/*                 <Image src={v4} alt="Quatre hommes en discussion" fill />
                 */}{" "}
              </div>
              <p className="text-white flex flex-col">
                <span className=" ">
                  <strong className="text-2xl">T</strong> pour{" "}
                  <strong className="text-lg">{"Transparence"}</strong>
                </span>
                <span className="text-sm pt-2 text-gray-200">
                  {
                    "  Un service bâti autour de la sincérité, de la franchise et de l’honnêteté."
                  }
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-gray-900">
        <div className="relative lg:w-1/2">
          {/*           <div className=" rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={mhi}
              alt="Quatre hommes en discussion"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute top-0 bg-black/60 z-20 w-full h-full rounded-2xl"></div> */}
          <div className="text-center text-white text-lg font-bold tracking-wider whitespace-nowrap">
            {"Impact Centre Chrétien"}
            <p className="text-center font-thin">{"C'est ..."}</p>
            <div className="flex flex-col gap-2 z-50 text-white font-thin">
              <div className="border-1 border-gray-600 text-sm p-2 rounded-xl ">
                <p className="border-1 border-blue-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre de refuge"}
                </p>
                <p className="border-1 border-purple-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre d'adoration"}
                </p>
                <p className="border-1 border-blue-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre de transformation"}
                </p>
                <p className="border-1 border-purple-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre de puissance spirituelle"}
                </p>
              </div>

              <div className="border-1 border-gray-600 text-sm p-2 rounded-xl ">
                <p className="border-1 border-blue-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre de formation"}
                </p>
                <p className="border-1 border-purple-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre d'excellence"}
                </p>
                <p className="border-1 border-blue-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre d'édification et"}
                  <br />
                  {"d'épanouissement"}
                </p>
                <p className="border-1 border-purple-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre en"}
                </p>
              </div>

              <div className="border-1 border-gray-600 text-sm p-2 rounded-xl ">
                <p className="border-1 border-blue-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre d'impact"}
                </p>
                <p className="line-clamp-3 border-1 border-purple-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre de puissance économique "}
                  <br />
                  {"et financière"}
                </p>
                <p className="border-1 border-blue-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre multiracial"}
                </p>
                <p className="border-1 border-purple-600 p-2 rounded-xl text-center mb-2 z-50 text-white">
                  {"Un centre de communion"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-gray-50 text-black">
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
              ICC AU BENELUX
            </h1>
            <div className="relative lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={iccli}
                  alt="Quatre hommes en discussion"
                  width={400}
                  height={200}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="text-center flex flex-col gap-2 p-4">
                <p className="text-white absolute top-3 left-1/2 transform -translate-x-1/2 text-2xl uppercase font-semibold">
                  {"ICC LIEGE"}
                </p>

                <div className=" mx-auto text-sm">
                  <p className="flex items-center gap-2">
                    <GoHome />
                    {"Rue du Sewage, 3/1 4100 Seraing"}
                  </p>
                  <div className="flex items-start gap-2">
                    <MdOutlineAccessTime />
                    <div className="">
                      <p className="text-start">NOS RENDEZ VOUS</p>
                      <p className="text-start">Mercredi : de 19h à 20h30 </p>
                      <p className="text-start">Vendredi : de 19h30 à 21h00 </p>
                      <p className="text-start">Dimanche : de 10h30 à 12h30</p>
                    </div>
                  </div>
                  <p className="flex items-center gap-2">
                    <MdOutlineLocalPhone />
                    +32 4 243 01 97{" "}
                  </p>
                  <p className="flex items-center gap-2">
                    <MdAlternateEmail className="text-pink-500" />
                    icc-liege@impactcentrechretien.eu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
