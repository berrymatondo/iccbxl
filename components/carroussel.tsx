import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import bg from "@/public/mhi1.jpg";

const Carroussel = () => {
  return (
    <Carousel className="w-full px-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full bg-amber-500">
            <div className="p-1">
              <Card className="bg-green-400">
                <CardContent className="bg-blue-300 flex items-center justify-center p-6">
                  <p className="text-4xl font-semibold">
                    <Image
                      src={bg}
                      alt="Assemblée ICC Bruxelles"
                      fill
                      className="object-cover"
                      priority
                    />
                    {index + 1}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Carroussel;
