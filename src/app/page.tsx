import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Metadata } from 'next';
// import { useRouter } from 'next/navigation';
import { SOCIAL_LINKS } from '../../constants';
import Link from 'next/link';
import { Github, Code } from 'lucide-react';
import { HeroHighlightPattern } from '@/components/patterns/text-color-pattern';
import { FlipWords } from '@/components/ui/flip-word';

export const metadata: Metadata = {
  title: 'ALX inc - Homepage',
  description: 'Home page',
};

// const router = useRouter();

const phrases = ['I do not understand', 'i cannot understand'];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4">
          <Card className="border-none flex flex-col justify-start items-center text-center">
            <CardHeader>
              <CardTitle>
                <span className="text-2xl font-bold leading-tight text-gray-800 dark:text-white">
                  What I cannot create,
                </span>
                <span className="text-2xl text-blue-700 ml-2">
                  <FlipWords words={phrases} type="phrases" />
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-pretty text-xl">
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
        </div>
      </main>
      <footer className="w-full flex justify-center mt-auto mb-12">
        <div className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-end w-1/3 break-words">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Hacker Rank{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
                <Code />
              </span>
            </h2>
            <p className="text-muted text-sm">
              Veja meus testes e algoritmos no Hacker Rank.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Github{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                <Github />
              </span>
            </h2>
            <p className="text-muted text-sm">Acesse meus projetos no Github</p>
          </a>
        </div>
      </footer>
    </div>
  );
}
