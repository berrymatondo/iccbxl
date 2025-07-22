import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import mhi from "@/public/mhi.jpg";
import mhi2 from "@/public/mhi2.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[30vh] md:h-[60vh] flex items-center justify-center text-white">
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
            <strong className="text-blue-500">M</strong>INISTÈRE
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider mt-2">
            {"DES "}
            <strong className="text-red-500">H</strong>
            {"OMMES D'"}
            <strong className="text-blue-500">I</strong>
            {"MPACT"}
          </h2>
        </div>
      </section>

      {/* Qui nous sommes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-8 mb-8">
              {/*               <div className="w-16 h-0.5 bg-blue-600"></div>
               */}{" "}
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                QUI NOUS SOMMES?
              </h2>
              {/*               <div className="w-16 h-0.5 bg-blue-600"></div>
               */}{" "}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/*             <div className="md:w-1/3">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <div className="text-center">
                      <div className="text-6xl font-bold mb-4">
                        <span className="text-blue-600">M</span>
                        <span className="text-red-600">H</span>
                        <span className="text-blue-600">I</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{"Hommes d'Impact"}</div>
                    <div>{"Humilité Ouverture Maturité"}</div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={mhi2}
                  alt="Quatre hommes en discussion"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                {"Le Ministère des Hommes d'Impact dit MHI est une plateforme"}
                {
                  "d'édification et de communion fraternelle des hommes au sein de"
                }
                {"l'église Impact Centre Chrétien Bruxelles."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Vision Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-8 mb-8">
              {/*               <div className="w-16 h-0.5 bg-blue-600"></div>
               */}{" "}
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                NOTRE VISION
              </h2>
              {/*               <div className="w-16 h-0.5 bg-blue-600"></div>
               */}{" "}
            </div>
          </div>

          <div className="flex flex-col  lg:flex-row gap-12 items-start  md:justify-center">
            <div className="lg:w-1/2 space-y-6">
              <p className="text-gray-700 leading-relaxed text-justify">
                {
                  "Notre vision est d'œuvrer et contribuer à la construction d'une"
                }
                {"génération d'hommes matures et modèles qui influencent"}
                {"positivement leur environnement avec Dieu."}
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                Cette vision se décline en 3 points qui sont soutenus par les
                {"objectifs ci-dessous:"}
              </p>

              <div className="space-y-4 text-gray-700">
                <div>
                  <span className="font-semibold">1.</span> En encourageant les
                  {
                    "hommes à utiliser les principes de la parole de Dieu pour être"
                  }
                  {
                    "des bons époux, des bons pères et des bons citoyens en étant"
                  }
                  {"soumis à Dieu."}
                </div>

                <div>
                  <span className="font-semibold">2.</span> En incitant les
                  {
                    "hommes à travailler pour l'avancement du royaume de Dieu en"
                  }
                  {
                    "servant Dieu dans l'église et par l'évangélisation des âmes."
                  }
                </div>

                <div>
                  <span className="font-semibold">3.</span> En organisant les
                  {"événements réguliers (retraites spirituelle, ateliers"}
                  {
                    "thématiques, séminaires à thème, etc.) destinés à aider les"
                  }
                  {"Hommes à avoir une vie chrétienne, familiale, et"}
                  {" professionnelle épanouie en accomplissant leur destinée."}
                </div>
              </div>
            </div>

            {/*             <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={mhi2}
                  alt="Quatre hommes en discussion"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Nos Objectifs Section */}
      <section className="py-16 px-4 bg-slate-800 text-white relative">
        <div className="absolute inset-0 bg-slate-800/90 z-10"></div>
        <div className="relative z-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-8 mb-8">
              {/*               <div className="w-16 h-0.5 bg-white"></div>
               */}{" "}
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                NOS OBJECTIFS
              </h2>
              {/*               <div className="w-16 h-0.5 bg-white"></div>
               */}{" "}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-blue-400 flex-shrink-0">
                    1.
                  </span>
                  <p className="text-white leading-relaxed">
                    {"Créer un réseau d'hommes engagés avec Dieu et dynamiques"}
                    {" dans l'action."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-blue-400 flex-shrink-0">
                    2.
                  </span>
                  <p className="text-white leading-relaxed">
                    {
                      "Faciliter l'intégration des hommes dans une église qui veut"
                    }
                    {"être une véritable famille, aider à les former pour"}
                    {" enflammer leur zèle pour Dieu et son œuvre."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-blue-400 flex-shrink-0">
                    3.
                  </span>
                  <p className="text-white leading-relaxed">
                    {
                      "Créer un réseau entre les hommes pour agir collectivement"
                    }
                    {
                      " dans la communion fraternelle, la confiance l'entraide, et"
                    }
                    {" le soutien mutuel."}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-blue-400 flex-shrink-0">
                    4.
                  </span>
                  <p className="text-white leading-relaxed">
                    {
                      "Apporter aux hommes des réponses inspirées et pratiques pour"
                    }
                    {
                      " leur défi du quotidien et les questions qu'ils se posent."
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
