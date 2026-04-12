import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Hero() {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[1800px] mx-auto px-2 my-10"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="
                      
              basis-1/2        
              lg:basis-1/3        
            "
          >
            <div>
              <Card>
                <CardContent className="flex h-[220px] sm:h-[260px] md:h-[400px] items-center justify-center">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* responsive arrows position */}
      <CarouselPrevious className="left-2 md:left-4" />
      <CarouselNext className="right-2 md:right-4" />
    </Carousel>
  );
}
