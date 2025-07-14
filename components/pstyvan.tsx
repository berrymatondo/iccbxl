"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PastorCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
    "Yvan Castanou est le Père fondateur des églises « Impact Centre Chrétien » implantées dans le monde, à travers lesquelles le Saint-Esprit transforme une multitude d'hommes et de femmes en de véritables adorateurs (disciples).";

  const fullText =
    "Yvan Castanou est le Père fondateur des églises « Impact Centre Chrétien » implantées dans le monde, à travers lesquelles le Saint-Esprit transforme une multitude d'hommes et de femmes en de véritables adorateurs (disciples). Après avoir effectué un premier cursus biblique en Angleterre, il en a suivi une autre à l'Institut Biblique de Paris et à l'Académie des Hautes Études Théologiques et Pastorales. Homme de Dieu passionné par l'évangélisation et l'enseignement de la Parole, il a consacré sa vie au service du Royaume de Dieu. Son ministère s'étend aujourd'hui sur plusieurs continents, touchant des milliers de vies à travers ses prédications, ses livres et ses formations bibliques. Il est marié à Modestine Castanou, qui partage avec lui cette vision d'impact pour Christ.";

  return (
    <div className="text-center px-2">
      <div className="text-white leading-relaxed space-y-4">
        <p className="text-lg md:text-xl  leading-relaxed mb-8">
          {isExpanded ? fullText : shortText}
        </p>

        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg font-medium transition-colors duration-200"
        >
          {isExpanded ? "Voir Moins" : "En Savoir Plus"}
        </Button>
      </div>
    </div>
  );
}
