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
import { CardExperiencePattern } from '@/components/patterns/card-experience-pattern';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'ALX inc - Sobre',
  description: 'About page',
};

export default function AboutPage() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 items-start justify-start">
      <div className="flex flex-col justify-start gap-4 relative">
        {cards_timeline.map((card, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <CardExperiencePattern
              title={card.title}
              description={card.description}
              badge_description={card.badge_description}
              text_content={card.text_content}
              type_experience={card.type_experience}
              see_more_link={card.see_more_link}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-start gap-4">
        <div className="flex w-full">
          <TypographyPattern type="h3" text={'My numbers'} />
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <Suspense fallback={'carregando'}>
            <div className="flex w-2/3 ">
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
        <Separator />
        <div className="w-full">
          <TypographyPattern type="h3" text={'FAQ'} />
          <div className="flex items-center justify-center">
            <AccordionALX />
          </div>
        </div>
      </div>
    </div>
  );
}
