"use client";
import Image from "next/image";
import mhi from "@/public/vie2.jpg";
import pcnc from "@/public/formation/pcnc.png";
import iebi from "@/public/formation/iebi.jpg";
import p001 from "@/public/formation/001.png";
import p101 from "@/public/formation/101.png";
import p201 from "@/public/formation/201.png";
import p301 from "@/public/formation/301.png";
import p401 from "@/public/formation/401.png";

export default function FormationPage() {
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

      <section className="py-8 md:py-16 px-4 ">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h1 className="text-center text-blue-600 text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
            NOS FORMATIONS
          </h1>

          <div className="flex">
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-35 h-20  overflow-hidden shadow-lg">
                <Image src={pcnc} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">{"Impact santé"}</span>
            </div>
          </div>

          <div className="flex">
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative  w-35 h-20  overflow-hidden shadow-lg">
                <Image src={p001} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Service de traduction</span>
            </div>

            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-35 h-20   overflow-hidden shadow-lg">
                <Image src={p101} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Ecole du dimanche</span>
            </div>
          </div>

          <div className="flex">
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative w-35 h-20  overflow-hidden shadow-lg">
                <Image src={p201} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Nurserie</span>
            </div>
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative  w-35 h-20   overflow-hidden shadow-lg">
                <Image src={p301} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">
                Espace
                {"bébés"}
              </span>
            </div>
          </div>

          <div className="flex">
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative  w-35 h-20   overflow-hidden shadow-lg">
                <Image src={p401} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">Sandwicherie</span>
            </div>
            <div className="text-white flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div className="relative  w-35 h-20   overflow-hidden shadow-lg">
                <Image src={iebi} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center">{"Impact santé"}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
