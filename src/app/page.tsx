import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Metadata } from 'next';
// import { useRouter } from 'next/navigation';
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
              className="rounded-xl border-2 border-slate-950 dark:border-gray-400"
              src="https://avatars.githubusercontent.com/u/59508016?v=4"
              alt="ALX Picture"
              width={450}
              height={220}
              priority
            />
          </div>

          <Card className="border-none flex flex-col justify-start items-center text-center sm:order-none md:order-first">
            <CardHeader>
              <CardTitle>
                <span className="text-2xl text-blue-700 ml-2">
                  <FlipWords
                    words={[
                      'What i cannot create, i do not understand',
                      'Imagination is more important than knowledge.',
                    ]}
                    type="phrases"
                  />
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-pretty text-xl max-w-[600px]">
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
