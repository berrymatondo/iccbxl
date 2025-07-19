import Image from "next/image";
import p001 from "@/public/mjib/p001.jpg";
import p002 from "@/public/mfi/fi.png";
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
            MINISTÈRE
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mt-2">
            {"DES FEMMES D'IMPACT"}
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
                  "Le Ministère des Femmes d’Impact - MFI est une plateforme de transformation dédié aux femmes de l’église. Elle a pour rôle d’organiser ou de proposer des rencontres conviviales afin d’aider les femmes à se déployer, s’épanouir en Christ, apprendre à devenir un leader dont le témoignage influence son environnement."
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
                  "Être pour vous un centre de refuge si vous êtes en détresse, un centre de guérison si vous êtes blessée, un centre d’épanouissement si vous rêvez de déployer votre immense potentiel et un centre de transformation si vous voulez apprendre à devenir un leader dont le témoignage influence votre conjoint, vos enfants et toutes les personnes qui vous entourent."
                }
              </div>
            </div>

            <h1 className="pt-4 text-center text-blue-600 text-3xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              <p>NOS RENCONTRES</p>
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-8 md:py-16 px-4 bg-gray-50">
        {" "}
        <div className="absolute inset-0 bg-pink-900/70 z-10" />
        <Image
          src={p001}
          alt="Hommes souriants représentant le ministère"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center ">
          <div className="text-sm md:md text-white  tracking-wider flex flex-col gap-4">
            <div className="font-bold text-center">
              {
                "Des ateliers tout au long de l’année pour faciliter les échanges."
              }
            </div>
            <p>
              {
                "Des Retraites entre Femmes d’Impact se déroule dans un cadre verdoyant, calme et reposant."
              }
            </p>
            <p>
              {
                "Des séminaires et des conférences comme « Khayil » où pendant quatre jours des oratrices de renommée internationale nous challenge à être ces femmes vertueuses."
              }
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
