import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Component() {
  return (
    <footer className="bg-slate-700 text-white">
      <div className=" w-full  px-6 py-12">
        {/* Header with social media */}
        <div className=" flex flex-col md:flex-row justify-center items-center mb-12">
          {/*           <div className="flex-1"></div>
           */}{" "}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-0 mr-8">
            REJOIGNEZ-NOUS
          </h2>
          <div className="flex gap-3">
            <Button
              size="icon"
              className="bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="icon"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
              asChild
            >
              <Link href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="icon" className="bg-red-600 hover:bg-red-700" asChild>
              <Link href="#" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="icon" className="bg-black hover:bg-gray-800" asChild>
              <Link href="#" aria-label="TikTok">
                <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black text-xs font-bold">T</span>
                </div>
              </Link>
            </Button>
            <Button
              size="icon"
              className="bg-green-600 hover:bg-green-700"
              asChild
            >
              <Link href="#" aria-label="Message">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Main content */}
        {/*         <div className=" grid md:grid-cols-3 gap-8 mb-12">
         */}{" "}
        <div className=" flex justify-between px-8 ">
          {/* Address Card */}
          <Card className="bg-transparent border-none shadow-none">
            <div className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-white">Adresse</h3>
              <div className="text-sm leading-relaxed text-gray-200 space-y-1">
                <p>Rue des lutins 8, Forest, 1190 Bruxelles,</p>
                <p>BELGIQUE</p>
                <p className="mt-2">Réseau STIB : Tram 82, Tram 97 / Bus 50</p>
                <p>– Arrêt: NEERSTALLE</p>
              </div>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="bg-transparent border-none shadow-none">
            <div className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
              <div className="text-sm leading-relaxed text-gray-200 space-y-2">
                <p>
                  <span className="font-medium">Tél. :</span> +32 2 245 92 50
                </p>
                <p>
                  <span className="font-medium">Email :</span>{" "}
                  <Link
                    href="mailto:icc-bruxelles@eglisecc.com"
                    className="hover:text-white underline transition-colors"
                  >
                    icc-bruxelles@eglisecc.com
                  </Link>
                </p>
              </div>
            </div>
          </Card>

          {/* Schedule Card */}
          <Card className="bg-transparent border-none shadow-none">
            <div className="p-0">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Nos rendez-vous
              </h3>
              <div className="text-sm leading-relaxed text-gray-200 space-y-2">
                <p>
                  <span className="font-medium">• Vendredi:</span> 19h30 – 21h30
                  <span className="block text-xs text-gray-300 ml-2">
                    (Atmosphère de Gloire)
                  </span>
                </p>
                <p>
                  <span className="font-medium">• Dimanche</span>
                  <span className="block text-xs text-gray-300 ml-2">
                    (2 cultes de célébration)
                  </span>
                  <span className="block ml-2">
                    9h00 – 11h30 & 11h45 – 14h15
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>
        <Separator className="bg-gray-600 mb-6" />
        {/* Footer links */}
        <div className="text-xs text-gray-300 text-center space-y-3">
          <p>©Impact Centre Chrétien 2021. Tous droits réservés</p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            <Button
              variant="link"
              className="text-xs text-gray-300 hover:text-white p-0 h-auto"
              asChild
            >
              <Link href="#">Politique de confidentialité</Link>
            </Button>
            <span className="text-gray-500">•</span>
            <Button
              variant="link"
              className="text-xs text-gray-300 hover:text-white p-0 h-auto"
              asChild
            >
              <Link href="#">Mentions Légales</Link>
            </Button>
            <span className="text-gray-500">•</span>
            <Button
              variant="link"
              className="text-xs text-gray-300 hover:text-white p-0 h-auto"
              asChild
            >
              <Link href="#">Cookies</Link>
            </Button>
            <span className="text-gray-500">•</span>
            <Button
              variant="link"
              className="text-xs text-gray-300 hover:text-white p-0 h-auto"
              asChild
            >
              <Link href="#">{"Mention d'information applications"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
