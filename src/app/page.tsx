import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Metadata } from 'next';
import { SOCIAL_LINKS } from '../../constants';
import Link from 'next/link';
import { HeroHighlightPattern } from '@/components/patterns/text-color-pattern';
import { FlipWords } from '@/components/ui/flip-word';

export const metadata: Metadata = {
  title: 'ALX inc - Homepage',
  description: 'Home page',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center overflow-y-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4">
          <div className="relative flex justify-center items-center">
          <Image
            className="z-50 rounded-full border-2 border-slate-950 dark:border-gray-400 w-40 sm:w-48 md:w-56 lg:w-72 xl:w-80 2xl:w-96 h-auto"
            src="https://avatars.githubusercontent.com/u/59508016?v=4&s=500"
            alt="ALX Picture"
            priority
            width={500}
            height={500}
            quality={90}
            sizes="(max-width: 640px) 320px,   /* 2x de 160px */
                (max-width: 768px) 384px,   /* 2x de 192px */
                (max-width: 1024px) 448px,  /* 2x de 224px */
                (max-width: 1280px) 576px,  /* 2x de 288px */
                (max-width: 1536px) 640px,  /* 2x de 320px */
                768px"                     /* 2x de 384px */
          />
          </div>

          <Card className="border-none flex flex-col justify-start items-center text-center sm:order-none md:order-first ">
            <CardHeader>
                <span className="text-2xl font-semibold ml-2">
                  <FlipWords
                    words={[
                      'What i cannot create, i do not understand.',
                      'Imagination is more important than knowledge.',
                    ]}
                    type="phrases"
                  />
                </span>
            </CardHeader>
            <CardContent>
              <div className="text-pretty text-xl max-w-[750px]">
                <TypographyPattern
                  type="p"
                  text="I believe the power of learning anything lives in practice and consistency over time. This means that learning N things is a matter of one or two years; Being eloquent in one of them takes half a lifetime"
                />
              </div>
              <div className="mt-12 flex flex-col items-center justify-center gap-8">
                <HeroHighlightPattern colorizeText="Find me" />
                <div className="flex gap-4">
                  <Link
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    className="transition-colors"
                  >
                    <Button variant={'default'} size={'lg'}>
                      Linkedin
                    </Button>
                  </Link>
                  <Link
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    className="transition-colors"
                  >
                    <Button variant={'default'} size={'lg'}>
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
