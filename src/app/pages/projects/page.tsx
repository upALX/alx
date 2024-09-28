'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carroussel';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function ProjectsPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="grid place-items-center min-h-screen w-full overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-11/12 sm:w-9/12 lg:w-8/12"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-2 sm:p-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center w-full space-y-4">
                    {/* Project Image */}
                    <div className="view_project">
                      <img
                        src={`/assets/weather-app.gif`}
                        alt="Little girl constructing something"
                        className="w-full h-auto max-h-64 sm:max-h-72 lg:max-h-96 rounded-lg shadow-lg object-cover"
                      />
                    </div>

                    {/* Project Description */}
                    <div className="presentation_content text-center px-4">
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                        A weather data API developed with NodeJS, NestJS,
                        Typescript, PostgreSQL, TypeORM, Docker.
                      </p>
                    </div>

                    {/* Project Buttons */}
                    <div className="presentation__buttons-link flex space-x-4">
                      <button className="focus:outline-none">
                        <a
                          href="https://github.com/upALX/Orpen-Weather"
                          target="_blank"
                        >
                          <img
                            className="w-6 h-6 sm:w-8 sm:h-8 transition-transform hover:scale-110"
                            src="/assets/go-code.png"
                            alt="Code link"
                          />
                        </a>
                      </button>
                      <button className="focus:outline-none">
                        <a href="https://youtu.be/nFREOIxeqig" target="_blank">
                          <img
                            className="w-6 h-6 sm:w-8 sm:h-8 transition-transform hover:scale-110"
                            src="/assets/go-project.png"
                            alt="Project demo link"
                          />
                        </a>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
