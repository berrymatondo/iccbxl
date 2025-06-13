import Image from "next/image";
import { Button } from "@/components/ui/button";
import bg from "@/public/bg2.jpg";
import yvan from "@/public/yvan.png";
import sabou from "@/public/sab2.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={bg}
            alt="Assemblée ICC Bruxelles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div>
            <Image
              src={bg}
              alt="logo"
              width={40}
              height={20}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            BIENVENUE
            <br />
            À
            <br />
            ICC BRUXELLES
          </h1>

          <p className=" text-xl md:text-2xl mb-12  mx-auto leading-relaxed">
            Que vous soyez nouveau dans la foi ou fidèle à Jésus depuis des
            années,
            <br />
            il y a une place pour vous à ICC, chez nous et dans notre famille.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4 rounded-full"
          >
            Voir tous les enseignements
          </Button>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
              — ÉQUIPE DIRIGEANTE —
            </h2>
          </div>

          {/* Pastor Yvan & Mode Castanou */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <Image
                src={yvan}
                alt="Pasteur Yvan & Mode Castanou"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 text-center md:text-left">
                Pasteur Yvan & Mode
                <br />
                CASTANOU
              </h3>

              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Yvan Castanou est le Père fondateur des églises « Impact
                  Centre Chrétien » implantées dans le monde, à travers
                  lesquelles le Saint-Esprit transforme une multitude d'hommes
                  et de femmes en de véritables adorateurs (disciples). Après
                  avoir effectué un premier cursus biblique en Angleterre, il en
                  a suivi une autre à l'Institut Biblique de Paris et à
                  l'Académie des Hautes Études Théologiques et Pastorales de
                  Paris.
                </p>

                <p>
                  En mars 2004, lui et son épouse Modestine, ont été ordonnés
                  pasteurs par les pasteurs André Thobois de la Fédération
                  Protestante de France, et Emmanuel Toussaint du Concile
                  Mondial Protestant et Évangélique des Églises.
                </p>

                <p>
                  Modestine Castanou, quant à elle, est responsable du Ministère
                  des Ressources Humaines et du Ministère des Femmes d'Impact à
                  Impact Centre Chrétien. Le pasteur Mode, comme on l'appelle
                  communément, est une femme de conviction, déterminée et
                  remplie d'assurance. Elle est consacrée au Seigneur et
                  profondément impliquée dans son œuvre. Engagée pour la cause
                  de la femme, elle est préoccupée par son épanouissement et son
                  déploiement dans la cellule familiale comme dans la société.
                </p>
              </div>
            </div>
          </div>

          {/* Pastor Christian & Evelyne Saboukoulou */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-800 text-center md:text-left">
                Pasteur Christian & Evelyne
                <br />
                SABOUKOULOU
              </h3>

              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Le BENELUX (Belgique, Nederlands (Pays-Bas), Luxembourg) pour
                  Christ, voici l'une des missions à charge des pasteurs
                  Christian et Evelyne Saboukoulou.
                </p>

                <p>
                  Tous deux ont œuvrés dès les premières heures d'ICC à Paris et
                  sont en œuvre pour le Seigneur en Belgique, principalement à
                  Bruxelles. Dans la simplicité, la détermination et la
                  consécration totale à Jésus-Christ, ils ont à cœur de faire
                  connaître le message de la bonne nouvelle du Royaume de Dieu
                  et former une armée de Gagneurs d'âmes, à Bruxelles et dans
                  tout le BENELUX.
                </p>

                <p>
                  Passionné de la parole de Dieu, zélé pour gagner et prendre
                  soin des âmes, Christian Saboukoulou a suivi sa formation
                  pastorale auprès du Pasteur Yvan Castanou à Paris.
                </p>

                <p>
                  Minutieux et conscient de l'importance du respect des
                  autorités établis, pasteur Christian a toujours fait preuve
                  d'obéissance et fidélité dans son service dans les petites,
                  comme dans les grandes choses.
                </p>

                <p>Avec son épouse, il a été ordonné par ce dernier en 2011.</p>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <Image
                src={sabou}
                alt="Pasteur Christian & Evelyne Saboukoulou"
                width={500}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
