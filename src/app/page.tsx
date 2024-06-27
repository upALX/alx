import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALX inc - Homepage',
  description: 'Home page',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className=" flex items-center justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center px-4">
          <div className="relative z-10 flex justify-center items-center before:absolute before:h-[300px] before:w-full before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:left-1/3 after:translate-x-1/3 after:bg-gradient-conic from-sky-200 via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image
              className="rounded-xl border-2 border-slate-950 dark:border-gray-400"
              src="https://avatars.githubusercontent.com/u/59508016?v=4"
              alt="Next.js Logo"
              width={450}
              height={220}
              priority
            />
          </div>
          <Card className="border-none flex flex-col justify-center items-center text-center">
            <CardHeader>
              <CardTitle>
                <span className="text-2xl font-bold leading-tight text-gray-800 dark:text-white">
                  What i cannot create,
                </span>
                <span className="text-2xl text-blue-700 ml-2">
                  i do not understand.
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
                <TypographyPattern type="h4" text={'Find me'} />
                <div className="flex gap-4">
                  <Button variant={'default'} size={'lg'}>
                    Linkedin
                  </Button>
                  <Button variant={'default'} size={'lg'}>
                    Github
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <footer>
        <div className="flex flex-col justify-end items-center lg:flex-row lg:justify-around lg:items-end mb-12">
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              See all my trajectory at {new Date().getFullYear()}
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Projects{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              See all projects create by me.
            </p>
          </a>
        </div>
      </footer>
    </main>
  );
}
