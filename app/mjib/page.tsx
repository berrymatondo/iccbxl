import Image from "next/image";
import p001 from "@/public/mjib/p001.jpg";
import p002 from "@/public/mjib/ejp.jpg";
import { Separator } from "@/components/ui/separator";

export default function MjibPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-purple-600/70 z-10" />
        <Image
          src={p001}
          alt="Hommes souriants représentant le ministère"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
            EGLISE
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mt-2">
            {"DES JEUNES PRODIGES"}
          </h2>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-center text-blue-600 text-3xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              <p>QUI SOMMES-NOUS?</p>
            </h1>

            <div className="pt-2 flex items-start gap-2 w-full rounded-xl">
              <div className="relative w-35 h-25 rounded-lg overflow-hidden shadow-lg">
                <Image src={p002} alt="Quatre hommes en discussion" fill />
              </div>
              <div className="text-sm w-2/2">
                {
                  "L'Eglise des Jeunes Prodiges de Bruxelles dit EJP est une plateforme d’édification et de communion fraternelle des jeunes au sein de l’église Impact Centre Chrétien Bruxelles."
                }
              </div>
            </div>
          </div>

          <Separator />
          <div className="pt-8 flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-center text-blue-600 text-3xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              <p>NOTRE MISSION</p>
            </h1>

            <div className="pt-2 flex items-start gap-2 w-full rounded-xl">
              <div className="text-sm text-center">
                {
                  "L'EJP a pour mission de participer à la création et au développement, à Bruxelles et dans le Benelux, d’une génération de jeunes hommes et femmes qui vivent l’I.M.P.A.C.T :"
                }
              </div>
            </div>

            <div className="flex flex-col items-start  gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-purple-600 rounded-full flex justify-center items-center">
                  <p className="text-white">I</p>
                </div>
                <p className="text-sm">
                  {"Influencer positivement"} <br /> {"leur environnement"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-blue-600 rounded-full flex justify-center items-center">
                  <p className="text-white">M</p>
                </div>
                <p className="text-sm">
                  {"Manifester"} <br /> {"les standards divins"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-red-600 rounded-full flex justify-center items-center">
                  <p className="text-white">P</p>
                </div>
                <p className="text-sm">
                  {"Partager le règne de Dieu "} <br />{" "}
                  {"et la Bonne nouvelle du Royaume "}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-green-600 rounded-full flex justify-center items-center">
                  <p className="text-white">A</p>
                </div>
                <p className="text-sm">
                  {"Aimer Dieu et les autres "} <br /> {"en actes et en vérité"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-teal-600 rounded-full flex justify-center items-center">
                  <p className="text-white">C</p>
                </div>
                <p className="text-sm">
                  {"Transformer "} <br /> {"les vies"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 bg-yellow-600 rounded-full flex justify-center items-center">
                  <p className="text-white">T</p>
                </div>
                <p className="text-sm">
                  {"Influencer positivement"} <br /> {"leur environnement"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-8 md:py-16 px-4 bg-gray-50">
        {" "}
        <div className="absolute inset-0 bg-blue-900/70 z-10" />
        <Image
          src={p001}
          alt="Hommes souriants représentant le ministère"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center ">
          <h1 className="text-sm md:md text-white  tracking-wider flex flex-col gap-4">
            <p className="font-bold text-center">
              {"L'EJP veut accomplir cette mission selon Actes 2:42 :"}
            </p>
            <p className="italic text-center">
              {
                "«Ils persévéraient dans l'enseignement des apôtres, dans la communion fraternelle, dans la fraction du pain, et dans les prières.»"
              }
            </p>{" "}
            <p className="font-semibold text-center">
              {
                "Grâce à des programmes en présentiel ou en ligne, locaux ou corporate, de prière (Night of Spirit, veillées) , de partages bibliques (Cultes des jeunes, Koinonia, Famille d’impact Kaïnos) et de communion fraternelle (Famille d’impact Kaïnos, Koinonia) et grâce à une collaboration avec l’église pour les formations bibliques. »"
              }
            </p>
          </h1>
        </div>
      </section>
    </div>
  );
}
