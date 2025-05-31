import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CarrouselAliados() {
  return (
    <Carousel className="w-full max-w-2xl mx-auto">
      <CarouselContent>
        {[1, 2, 3, 4].map((n) => (
          <CarouselItem key={n} className="basis-1/2 lg:basis-1/4">
            <Card className="h-32 flex items-center justify-center">
              <CardHeader>
                <CardTitle>Aliado {n}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-16">Logo o SVG</div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
