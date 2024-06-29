import { AccordionALX } from '@/components/patterns/accourdion-pattern';
import { BriefcaseBusiness, SeparatorVerticalIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import { cards_timeline } from '@/app/mapper/cards-timeline.json';
import { faq_information } from '@/app/mapper/faq-information.json';
import Image from 'next/image';
import { EXTERNAL_DATA_LINKS } from '../../../../constants';
import { ImagePatternALX } from '@/components/patterns/image-pattern';
import { Suspense } from 'react';
import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { Separator } from '@radix-ui/react-dropdown-menu';

export const metadata: Metadata = {
  title: 'ALX inc - Sobre',
  description: 'About page',
};

export default function AboutPage() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className="flex flex-col justify-center gap-4 relative">
          {cards_timeline.map((card, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Vertical line for the timeline */}
              {index !== 0 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 z-0">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-300"></div>
                </div>
              )}
              {/* Card */}
              <Card className="w-2/3 relative z-10">
                <CardHeader className="grid grid-cols-2">
                  <div>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </div>
                  <div className="flex justify-end gap-4">
                    <span>
                      <Badge>{card.badge}</Badge>
                    </span>
                    <span>
                      <BriefcaseBusiness />
                    </span>
                  </div>
                </CardHeader>
                <CardContent>{card.content}</CardContent>
                <CardFooter>
                  <Button variant={'link'}>See more</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <TypographyPattern type="h3" text={'Github stats'} />
          <div className="flex w-full gap-4">
            <Suspense fallback={'carregando'}>
              <div className="w-full">
                <Image
                  alt="Stats"
                  src={
                    'https://stats-github-app.vercel.app?user=upalx&theme=python-dark'
                  }
                  layout="responsive"
                  width={300}
                  height={100}
                  unoptimized
                  priority
                />
              </div>

              <div className="w-2/3">
                <Image
                  alt="Stats"
                  src={
                    'https://github-stats-readme-langs.vercel.app/api/top-langs/?username=upalx&layout=compact&show_icons=true&theme=gotham&border_color=4584b6&title_color=4584b6&text_color=ffde57&bg_color=000000&hide=php,jupyter%20notebook&langs_count=7'
                  }
                  layout="responsive"
                  width={300}
                  height={100}
                  unoptimized
                  priority
                />
              </div>
            </Suspense>
          </div>
          <div className="w-full">
            <TypographyPattern type="h3" text={'FAQ'} />
            <AccordionALX />
          </div>
        </div>
      </div>
    </>
  );
}
