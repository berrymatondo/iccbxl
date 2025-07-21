"use client";
import Image from "next/image";
import mhi from "@/public/vie2.jpg";
import adg from "@/public/adp.jpg";
import cel from "@/public/cel.jpg";
import vei from "@/public/vei.jpg";
import dim from "@/public/dim.jpg";
import tr from "@/public/service/tr.png";
import ij from "@/public/service/ij.png";
import nu from "@/public/service/nu.jpg";
import eb from "@/public/service/eb.jpg";
import sa from "@/public/service/sa.jpg";
import lm from "@/public/service/lm.jpg";
import is from "@/public/service/is.jpg";
import { Calendar, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function RDVPage() {
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
            <h1 className="text-center text-blue-600 text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              <p>NOS RENDEZ-VOUS</p> ET PROGRAMMES
            </h1>
            {/*             <div className="relative lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={mhi}
                  alt="Quatre hommes en discussion"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
                            <h1 className="absolute top-3 left-1/2 transform -translate-x-1/2  text-white text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
                VIE A ICC
              </h1> 
            </div> */}

            <div className="pt-8 flex items-start gap-4 w-full rounded-xl">
              <div className="relative w-35 h-25 rounded-lg overflow-hidden shadow-lg">
                <Image src={dim} alt="Quatre hommes en discussion" fill />
              </div>
              <div className="text-sm">
                <div className="font-semibold uppercase ">
                  Cultes du dimanche
                </div>
                <div className="text-sm mt-4">
                  <p className="flex items-start gap-2">
                    <Calendar className="text-purple-600" /> Tous les dimanches{" "}
                  </p>
                  <div className="flex items-start gap-2 pt-2">
                    <Clock className="text-green-600" />
                    <div className=" flex flex-col items-start ">
                      <p className="">1er culte: 9h à 11h30</p>
                      <p>2ème culte: de 11h45 à 14h15 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm">
              {
                "Venez adorer, célébrer et louer Dieu avec nous lors de nos deux cultes dominicaux."
              }
            </p>

            <Separator />
            <div className="pt-4 flex items-start gap-4 w-full rounded-xl">
              <div className="relative w-35 h-25 rounded-lg overflow-hidden shadow-lg">
                <Image src={adg} alt="Quatre hommes en discussion" fill />
              </div>
              <div className="text-sm">
                <div className="font-semibold ">ATHMOSPHERE DE PRIERE</div>
                <div className="text-sm mt-4">
                  <p className="flex items-start gap-2">
                    <Calendar className="text-purple-600" /> Tous les vendredis{" "}
                  </p>
                  <div className="flex items-start gap-2 pt-2">
                    <Clock className="text-green-600" />
                    <div className=" flex flex-col items-start ">
                      <p className="">de 19h30 à 21h30</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm">
              {
                "En sigle ADP, est un programme de prière et d'adoration prophétique qui se déroule sur place à l'église à l'autorium principal."
              }
            </p>
            <Separator />
            <div className="pt-4 flex items-start gap-4 w-full rounded-xl">
              <div className="relative w-35 h-25 rounded-lg overflow-hidden shadow-lg">
                <Image src={cel} alt="Quatre hommes en discussion" fill />
              </div>
              <div className="text-sm">
                <div className="font-semibold ">LES CELLULES DE MAISON</div>
                <div className="text-sm mt-4">
                  <p className="flex items-start gap-2">
                    <Calendar className="text-purple-600" /> Tous les jeudis{" "}
                  </p>
                  <div className="flex items-start gap-2 pt-2">
                    <Clock className="text-green-600" />
                    <div className=" flex flex-col items-start ">
                      <p className="">à partir de 19h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm">
              {
                "Les Groupes d'Impact, connus par certains comme cellules de maison sont des groupes de partage de la parole de Dieu qui favorisent la croissance spirituelle ainsi que la communion fraternelle. "
              }
            </p>
            <Separator />
            <div className="pt-4 flex items-start gap-4 w-full rounded-xl">
              <div className="relative w-35 h-25 rounded-lg overflow-hidden shadow-lg">
                <Image src={vei} alt="Quatre hommes en discussion" fill />
              </div>
              <div className="text-sm">
                <div className="font-semibold ">{"LES VEILLEES DE PRIERE"}</div>
                <div className="text-sm mt-4">
                  <p className="flex items-start gap-2">
                    <Calendar className="text-purple-600" /> Tous les vendredis{" "}
                  </p>
                  <div className="flex items-start gap-2 pt-2">
                    <Clock className="text-green-600" />
                    <div className=" flex flex-col items-start ">
                      <p className="">de 22h30 à 1h30 du matin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm">
              {
                "Temps de prières et d'intercessions qui se déroule uniquement en présentiel, à l'auditorium annexe."
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-purple-800">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h1 className="text-center text-white text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
            NOS SERVICES <br /> DU DIMANCHE
          </h1>
          <div className="flex">
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={tr} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Service de traduction</span>
            </div>

            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={ij} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Ecole du dimanche</span>
            </div>

            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={nu} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Nurserie</span>
            </div>
          </div>

          <div className="flex">
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={eb} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">
                Espace
                {" bébés"}
              </span>
            </div>

            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={sa} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Sandwicherie</span>
            </div>

            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={lm} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Librairie Métanoïa</span>
            </div>
          </div>

          <div className="flex">
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={is} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">{"Impact santé"}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
