import Image from "next/image";
import mhi from "@/public/vie2.jpg";
import v1 from "@/public/vis1.jpg";
import v2 from "@/public/v2.jpg";
import v3 from "@/public/v3.png";
import v4 from "@/public/v4.jpg";
import VieItem from "@/components/vie-item";
import Visite from "@/components/visite";

export default function ViePage() {
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
            VIE A ICC
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

          <div className="flex flex-col  items-center gap-4">
            <h1 className=" text-blue-600 text-4xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              LA VIE A ICC
            </h1>
            <div className="hidden relative lg:w-1/2">
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

            <div className="md:flex md:gap-4 ">
              <Visite />

              <VieItem
                img={v4}
                path="rdv"
                text="Nos rendez-vous et programmes"
                color="border-blue-400"
              />

              <VieItem
                img={v3}
                path="formations"
                text="Nos formation"
                color="border-red-400"
              />

              <VieItem
                img={v2}
                path="groupes"
                text="Nos groupes d'intérêt"
                color="border-yellow-400"
              />

              <VieItem
                img={v1}
                path="contact"
                text="Besoin d'aide ?"
                color="border-green-400"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
