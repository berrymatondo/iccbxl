import Image from "next/image";
import help from "@/public/help.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight text-[#015DC0] text-center">
          COMMENT POUVONS-NOUS
          <br />
          VOUS AIDER ?
        </h1>
        <div className="grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={help}
                alt="Mains jointes symbolisant l'unité pastorale"
                width={500}
                height={350}
                className="rounded-3xl shadow-lg object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                PERMANENCES
                <br />
                PASTORALES
              </h1>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900 md:mb-2">
                  QUAND:
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Tous les dimanches de 11h30 à 16h
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 md:mb-2">
                  LIEU:
                </h2>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Chaussée de Ruisbroek, 75
                  <br />
                  1190 Forest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
