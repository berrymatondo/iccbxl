import Image from "next/image";
import p001 from "@/public/mjib/p001.jpg";
import p002 from "@/public/ado/ado.jpg";

import { Separator } from "@/components/ui/separator";
import { Phone } from "lucide-react";

export default function MjibPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-teal-600/70 z-10" />
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
            {"DES ADOS"}
          </h2>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-center text-blue-600 text-3xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              <p>QUI NOUS SOMMES?</p>
            </h1>

            <div className="pt-2 flex items-start gap-2 w-full rounded-xl">
              <div className="text-center text-sm w-2/2">
                {
                  "Le Ministère Impact Ados est une plateforme d’édification et une communauté  qui facilite la cohésion  spirituelle et sociale des ados entre eux."
                }
              </div>
            </div>
          </div>

          <Separator />
          <div className="pt-8 flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-center text-blue-600 text-3xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
              <p>NOTRE VISION</p>
            </h1>

            <div className="pt-2 flex items-start gap-2 w-full rounded-xl">
              <div className="text-sm text-center">
                {
                  "Notre vision  est de contribuer à manifester des ados leaders et épanouis, aui vivent pleinement pour accomplir la volonté  de Dieu dans leur génération. "
                }
              </div>
            </div>
          </div>

          <Separator />
          <div className="pt-8 flex flex-col md:flex-row items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h1 className="text-center text-blue-600 text-3xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
                <p>NOTRE MISSION</p>
              </h1>

              <div className="relative pt-2 flex flex-col items-start gap-2 w-full rounded-xl">
                <div className="relative w-full h-60 rounded-xl">
                  <Image
                    src={p002}
                    alt="Hommes souriants représentant le ministère"
                    fill
                    priority
                    className="rounded-xl"
                  />
                </div>

                <div className="text-sm text-center">
                  <p className="font-bold">
                    Qu’au travers des différentes plateformes et évènements:
                  </p>
                  <p>
                    {
                      "Que les ados fassent le choix personnel d'accepter et de suivre Christ."
                    }
                  </p>
                  <p>
                    {
                      "Créer des affinités en maximisant des temps de rencontre."
                    }
                  </p>
                  <p>
                    {
                      "Qu’ils vivent une vie épanouie dans tous les domaines afin de partager au monde leur potentiel."
                    }
                  </p>{" "}
                  <p>
                    {"Leur apprendre le savoir-vivre (codes, étiquettes etc….)"}
                  </p>
                </div>
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
            <p className=" text-center">
              {"Les occuper et les rendre concernés  par la vie du ministère "}
              <br />

              {"●- Repérer leurs centres d'intérêts  "}
              <br />

              {"●- Travailler avec eux sur leur parcours d'adolescents"}
              <br />

              {
                "●- Organiser des activités  spirituelles et sociales pour garder l'équilibre  dans leur croissance "
              }
              <br />

              {
                "●- Contribuer à grandir dans la connaissance de leur identité en Christ "
              }
              <br />

              {"●- Etre présent  sur les réseaux sociaux"}
            </p>
          </h1>
        </div>
      </section>
      <section className="relative py-8 md:py-16 px-4 bg-gray-50">
        <p className="text-sm text-center p-4">
          {"Vous pouvez nous contacter à l’un de nos numéros."}
        </p>
        <div className="flex text-xs">
          <p className=" text-center p-2">
            <span className="flex flex-col  items-center gap-2">
              <Phone className="size-4" />
              +32 484 15 39 72
            </span>
          </p>
          <p className=" text-center p-2">
            <span className="flex flex-col  items-center gap-2">
              <Phone className="size-4" />
              +32 492 82 96 81
            </span>
          </p>
          <p className="text-center p-2">
            <span className="flex flex-col items-center gap-2">
              <Phone className="size-4" />
              {"+32 484 49 97 73"}
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
