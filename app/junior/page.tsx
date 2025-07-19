import Image from "next/image";
import p001 from "@/public/mjib/p001.jpg";
import p002 from "@/public/mjib/p002.png";
import { Separator } from "@/components/ui/separator";

export default function MjibPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[60vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-green-600/70 z-10" />
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
            {"IMPACT JUNIOR"}
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
              <div className="text-center text-sm">
                <p>
                  {
                    "Impact Junior est l'école du Saint-Esprit pour les enfants de l’église Impact Centre Chrétien, campus Bruxelles."
                  }
                </p>

                <p className="pt-2">
                  {
                    "Nous accueillons les enfants qui ont entre 3 et 12 ans. Avant cet âge, ils sont pris en charge à la nurserie, et après cet âge, ils sont invités à rejoindre le groupe des adolescents avec un enseignements et des activités mieux adaptées à leur croissance."
                  }
                </p>
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
                  "Notre vision est de créer des jeunes disciples qui deviendront demain des pionniers dans leur génération selon la recommandation du SEIGNEUR de faire de toutes les nations des disciples."
                }
              </div>
            </div>

            <div className="flex flex-col items-start  gap-4">
              <div className="flex items-start gap-2">
                <div className=" ">
                  <p className="h-10 w-10 bg-purple-600 rounded-full text-white flex justify-center items-center">
                    1
                  </p>
                </div>
                <p className="">
                  {
                    "L’équipe accueille les enfants de différentes tranches d’âges dans leurs locaux respectifs."
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="">
                  <p className="h-10 w-10 bg-blue-600 rounded-full flex justify-center items-center text-white">
                    2
                  </p>
                </div>
                <p className="text-sm">
                  {
                    "Après leur installation, la célébration commence avec au programme un moment de louange, d’adoration et de prière."
                  }{" "}
                  <br />
                  {
                    "Un partage biblique qui a pour objectif d’enseigner, d’instruire, d’interpeller et faire échanger les enfants"
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="">
                  <p className="h-10 w-10 bg-red-600 rounded-full flex justify-center items-center text-white">
                    3
                  </p>
                </div>
                <p className="text-sm">
                  {
                    "Le partage est un temps d’enseignement, d’échange, de témoignage et/ou d’activité centrés sur la Bible, la Parole de Dieu à partir de support pédagogique et un est défini chaque année. "
                  }
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="">
                  <p className="h-10 w-10 bg-green-600 rounded-full flex justify-center items-center text-white">
                    4
                  </p>
                </div>
                <p className="text-sm">
                  {
                    "Pour requinquer nos champions, une agape sous forme de goûter leur est proposée avant de rejoindre leurs parents. Le goûter est un moment particulièrement apprécié des enfants !!"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center text-blue-600 text-3xl md:text-6xl font-bold tracking-wider whitespace-nowrap">
        <p>NOS OBJECTIFS</p>
      </h1>
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
              <p className="font-bold">{"Les objectifs sont de :"}</p>

              <p>
                {
                  "-  Créer des classes unies, où les enfants apprennent à aimer, à manifester le fruit du SAINT ESPRIT avec une mise en pratique de ce qui a été enseigné les dimanches . Mais surtout créer une atmosphère où les enfants peuvent rencontrer Jésus et expérimenter Sa présence."
                }
              </p>
              <p>
                {
                  "- Les responsabiliser à avoir une vie de prière et grandir dans la connaissance de la Parole."
                }
              </p>
              <p>
                {
                  "- Responsabiliser les parents de les accompagner dans leur croissance spirituelle."
                }
              </p>
            </p>
          </h1>
        </div>
      </section>
      <p className="text-sm text-center p-4">
        {
          "Une équipe de moniteurs formés accueillent les enfants entre 9h et 15h, chaque dimanche."
        }
      </p>
    </div>
  );
}
