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
import Image from 'next/image';

export default function CarouselPattern(props: CarouselPatternProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full sm:w-9/12 lg:w-8/12 mx-auto"
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {props.items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-2 sm:p-4">
              <Card className="flex flex-col md:h-[500px] overflow-hidden transition-all duration-300 transform hover:scale-104 hover:shadow-lg hover:border-slate-900 text-slate-900 bg-slate-100 dark:bg-slate-950 dark:hover:border-blue-400 dark:text-gray-300 hover:z-20">
                <CardHeader className="flex justify-center items-center">
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-center">
                    {item.text}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:justify-between items-center flex-grow z-20">
                  <div className="relative w-full h-auto max-h-64 sm:max-h-72 lg:max-h-80">
                    <Image
                      src={item.mainImagePath}
                      alt="item image representation"
                      className="w-full h-full object-contain"
                      width={200}
                      height={200}
                    />
                  </div>

                  <div className="presentation__buttons-link flex space-x-4 mt-5">
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
