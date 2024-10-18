'use client';

import { AccordionALX } from '@/components/patterns/accourdion-pattern';
import { cards_timeline } from '@/app/mapper/cards-timeline.json';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { CardExperiencePattern } from '@/components/patterns/card-experience-pattern';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { SOCIAL_LINKS } from '../../../../constants';
import { Code, Github, Rocket } from 'lucide-react';
import { GithubDataTypes } from '@/app/types/about-types';

export default function AboutPage() {
  const router = useRouter();

  const fetchUserRepos = async (username: string, apiKey: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const repos = await response.json();
    return repos;
  };

  const [githubData, setGithubData] = useState({} as GithubDataTypes);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const githubAPIKey = process.env.NEXT_PUBLIC_GITHUB_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserRepos('upALX', githubAPIKey!);
        console.log('github data getted: ', data);
        setGithubData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [githubAPIKey]);

  console.log(githubData);

  const PUBLIC_REPOS =
    (githubData?.public_repos || 0) + (githubData?.total_private_repos || 0);
  console.log(PUBLIC_REPOS);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <Rocket className="animate-bounce" />
    </div>
  ) : (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="flex flex-col justify-between gap-4 p-4 h-full">
        <div className="flex flex-col items-center">
          <TypographyPattern text="Timeline" type="h2" />
          <Separator className="w-2/3" />
        </div>
        <div className="flex flex-col justify-between h-full gap-4 mt-10">
          {cards_timeline.map((card, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:px-20 ${
                index % 2 === 0 ? 'items-start' : 'items-end'
              } `}
            >
              <div className="animate-float w-full sm:max-w-max dark:hover:z-20">
                <CardExperiencePattern
                  title={card.title}
                  description={card.description}
                  badge_description={card.badge_description}
                  text_content={card.text_content}
                  type_experience={card.type_experience}
                  see_more_link={card.see_more_link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between items-center gap-4 p-4 h-full">
        <div className="flex flex-col w-full items-center">
          <TypographyPattern type="h2" text={'About'} />
          <Separator className="w-2/3" />
        </div>

        <div className="flex flex-col items-center  w-full gap-4">
          <div className="flex flex-col items-center w-2/3 gap-4">
            <div className="flex justify-center w-full">
              <TypographyPattern type="h2" text={'Numbers'} />
            </div>

            <div className="flex flex-col gap-4 justify-center">
              <Image
                alt="Activity graph"
                src={
                  'https://github-readme-activity-graph.vercel.app/graph?username=upalx&radius=8&bg_color=000000&color=e0da22&area_color=7495f2&line=3265f0&point=false&area=true&custom_title=ALX - Activity flow&hide_border=false&grid=false'
                }
                layout="responsive"
                width={200}
                height={200}
                unoptimized
                priority
              />
              <Image
                alt="Stats numbers"
                src={
                  'https://stats-github-app.vercel.app?user=upalx&theme=python-dark'
                }
                layout="responsive"
                width={250}
                height={100}
                unoptimized
                priority
              />
            </div>
            <div className="flex justify-center w-full my-4">
              <Button
                onClick={() => {
                  router.push(SOCIAL_LINKS.GITHUB);
                }}
                variant={'link'}
                className="text-wrap"
              >
                All data was collected from my Github, click to see more.
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Separator className="w-2/3" />
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center w-full">
            <TypographyPattern type="h2" text={'FAQ'} />
          </div>

          <div className="flex justify-center w-full">
            <AccordionALX />
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Separator className="w-2/3" />
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center w-full mb-4">
            <TypographyPattern type="h2" text={'Socials'} />
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-4 break-words">
            <a
              href="https://www.hackerrank.com/profile/alxinc"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-4 lg:mb-0"
              target="_blank"
            >
              <h2 className="mb-3 text-2xl font-semibold">
                Hacker Rank{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <Code />
                </span>
              </h2>
              <p className="text-sm">See more...</p>
            </a>

            <a
              href="https://github.com/upalx"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
            >
              <h2 className="mb-3 text-2xl font-semibold animation-wave">
                Github{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <Github />
                </span>
              </h2>
              <p className="text-sm">See more...</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
