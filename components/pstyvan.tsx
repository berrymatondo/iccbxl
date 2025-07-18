"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { unstable_ViewTransition as ViewTransition } from "react";

export default function PastorCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
    "Yvan CASTANOU est le pasteur principal des églises Impact Centre Chrétien. Après un premier cursus biblique en Angleterre, Yvan Castanou a suivi une formation biblique à l’Institut Biblique de Paris et à l’Académie des Hautes Etudes Théologiques et Pastorales de Paris. En mars 2004, lui et son épouse Modestine, ont été ordonnés pasteurs par les pasteurs André Thobois de la Fédération Protestante de France, et Emmanuel Toussaint du Concile Mondial Protestant et Evangélique des Eglises.";
  const fullText =
    "Yvan CASTANOU est le pasteur principal des églises Impact Centre Chrétien. Après un premier cursus biblique en Angleterre, Yvan Castanou a suivi une formation biblique à l’Institut Biblique de Paris et à l’Académie des Hautes Etudes Théologiques et Pastorales de Paris. En mars 2004, lui et son épouse Modestine, ont été ordonnés pasteurs par les pasteurs André Thobois de la Fédération Protestante de France, et Emmanuel Toussaint du Concile Mondial Protestant et Evangélique des Eglises. Ses enseignements dynamiques et vivants ont contribué à la transformation d’un nombre incalculable de personnes, grâce aux cultes d’ICC retransmis en direct sur Internet et à travers l’émission « Pour une vie d’impact » diffusée sur plusieurs radios et chaines de télévision francophones et sur Internet. Il est l’auteur et le producteur des célèbres textes et CD audio « Prions Ensemble ! », ainsi que des livres « Maintenant ça suffit, il faut que ça change ! », et « Vous pensez mariage ? Comment faire le bon choix ? » et du tout dernier, « Crucifier la chair ».";

  const fullText2 =
    "Musicien et chantre passionné de Christ, il dirige régulièrement des temps d’adoration prophétique durant lesquels l’on peut expérimenter les réalités de la présence et de la puissance de Dieu ! Au niveau académique, le pasteur Yvan est diplômé (promotion 1995) de l’école « Reims Management School » (ex Ecole Supérieure de Commerce de Reims). Il est également titulaire d’un DUT GEA Gestion des Entreprises et des Administrations et d’un DEUG A Mathématiques. Avec son épouse, ils ont quatre enfants.";

  const fullText3 =
    "Modestine Castanou, quant à elle, est responsable du Ministère des Ressources Humaines et du Ministère des Femmes d’Impact à Impact Centre Chrétien. Le pasteur Mode, comme on l’appelle communément, est une femme de conviction, déterminée et remplie d’assurance. Elle est consacrée au Seigneur et profondément impliquée dans son œuvre. Engagée pour la cause de la femme, elle est préoccupée par son épanouissement et son déploiement dans la cellule familiale comme dans la société. Elle a pour vocation de conduire les femmes de toutes nationalités et de tous âges, à se rassembler et manifester leurs potentiels et leurs aptitudes, afin d’être des sources de bénédiction pour leur génération. Diplômée de l’université de Toulouse (master 2 en Psychologie Clinique) et de l’École Supérieure de Gestion (ESG Paris master 2 en Ressources Humaines), Modestine Castanou a de nombreuses cordes à son arc. En plus d’être une entrepreneure qui dirige ses affaires avec poigne, elle accompagne régulièrement, au travers de modules de formation, de nombreux couples en passe de se marier. Dotée d’un grand cœur et d’une grande capacité d’écoute, pasteur Mode se rend disponible pour tous ceux et celles qui en ont besoin. Elle partage régulièrement sa passion pour Christ dès qu’elle en a l’opportunité, notamment dans divers milieux associatifs et dans le cadre de son ministère pastoral. ";
  return (
    <div className="text-gray-700 leading-relaxed space-y-4 px-2">
      <ViewTransition name="test-1">
        <div className=" leading-relaxed space-y-4">
          <p className="break-words whitespace-normal text-lg md:text-xl  leading-relaxed mb-8">
            {isExpanded ? fullText : shortText}
          </p>
          <br />
          {isExpanded && (
            <>
              <p className="break-words whitespace-normal text-lg md:text-xl  leading-relaxed mb-8">
                {fullText2}
              </p>
              <br />
              <p className="break-words whitespace-normal text-lg md:text-xl  leading-relaxed mb-8">
                {fullText3}
              </p>
            </>
          )}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="bg-neutral-200 border-2  hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
          >
            {isExpanded ? "Voir Moins" : "En Savoir Plus"}
          </Button>
        </div>
      </ViewTransition>
    </div>
  );
}
