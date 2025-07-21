"use client";
import Image from "next/image";
import mhi from "@/public/vie2.jpg";
import mh from "@/public/groupe/mh.jpg";
import fi from "@/public/groupe/fi.png";
import mjib from "@/public/mjib/ejp.jpg";
import ado from "@/public/groupe/ado.jpg";
import jun from "@/public/groupe/jun.png";
import cm from "@/public/groupe/cm.jpg";
import { useRouter } from "next/navigation";

export default function FormationPage() {
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

      <section className="py-8 md:py-16 px-4 ">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h1 className="text-center text-blue-600 text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
            GROUPES <br />
            {" D'INTERET"}
          </h1>

          <div className="flex">
            <div
              onClick={() => router.push("/mhi")}
              className=" flex flex-col items-center gap-4 p-4 w-full rounded-xl"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={mh} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center uppercase">
                {"Ministère des Hommes d’Impact"}
              </span>
            </div>

            <div
              onClick={() => router.push("/mfi")}
              className=" flex flex-col items-center gap-4 p-4 w-full rounded-xl"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={fi} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center uppercase">
                {"Ministère des FEMMES d’Impact"}
              </span>
            </div>

            <div
              onClick={() => router.push("/mjib")}
              className=" flex flex-col items-center gap-4 p-4 w-full rounded-xl"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={mjib} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center uppercase">
                {"Eglise des jeunes prodiges de bruxelles"}
              </span>
            </div>
          </div>

          <div className="flex">
            <div
              onClick={() => router.push("/ados")}
              className=" flex flex-col items-center gap-4 p-4 w-full rounded-xl"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src={ado} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center uppercase">
                {"Ministère d’IMPACT ADOS"}
              </span>
            </div>

            <div className=" flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div
                onClick={() => router.push("/junior")}
                className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg"
              >
                <Image src={jun} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center uppercase">
                {"Ministère d’IMPACT JUNIOR"}
              </span>
            </div>

            <div className=" flex flex-col items-center gap-4 p-4 w-full rounded-xl">
              <div
                onClick={() => router.push("https://cellulesicc.be")}
                className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg"
              >
                <Image src={cm} alt="Quatre hommes en discussion" fill />
              </div>
              <span className="text-xs text-center uppercase">
                {"Ministère dES CELLULES DE MAISON"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
