import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carroussel';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { CarouselPatternProps } from '@/components/types/carousel-pattern-types';
import { CodeXml, Video } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function CarouselPattern(props: CarouselPatternProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full sm:w-9/12 lg:w-8/12 mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {props.items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-2 sm:p-4">
              <Card>
                <CardHeader className="flex justify-center items-center">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>{item.text}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center w-full space-y-4">
                  <div className="p-4">
                    <img
                      src={item.mainImagePath}
                      alt="Little girl constructing something"
                      className="w-full h-auto max-h-64 sm:max-h-72 lg:max-h-96 rounded-lg shadow-lg object-cover"
                    />
                  </div>

                  <div className="presentation__buttons-link flex space-x-4">
                    <Link href={item.githubPath} target="_blank">
                      <Button className="rounded-full">
                        <CodeXml className="w-4 h-4 hover:animate-spin" />
                      </Button>
                    </Link>
                    <Link href={item.videoPath} target="_blank">
                      <Button className="rounded" variant={'outline'}>
                        <Video className="w-4 h-4 hover:animate-spin" />
                      </Button>
                    </Link>
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
  );
}
