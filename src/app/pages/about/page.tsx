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
  // TODO bater no github e pegar dados

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
    <div className="grid sm:grid-cols-1 md:grid-cols-2 items-start justify-start gap-4">
      <div className="flex flex-col gap-4 relative p-4">
        <div className="flex justify-center">
          <TypographyPattern text="Timeline" type="h2" />
        </div>
        {cards_timeline.map((card, index) => (
          <div
            key={index}
            className={`relative flex flex-col ${
              index % 2 === 0 ? 'items-center' : 'items-end'
            } `}
          >
            <div className="animate-float w-full sm:max-w-max ">
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
      <div className="flex flex-col justify-evenly gap-4 flex-grow h-full">
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <div className="flex justify-center w-full sm:mt-4">
            <TypographyPattern type="h2" text={'Numbers'} />
          </div>
          <div className="flex w-2/3">
            <Image
              alt="Stats"
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
          <div className="flex justify-center">
            <Button
              onClick={() => {
                router.push(SOCIAL_LINKS.GITHUB);
              }}
              variant={'link'}
            >
              All data was collected from my Github, click to see more.
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <Separator className="w-2/3" />
        </div>

        <div className="w-full">
          <div className="flex justify-center w-full">
            <TypographyPattern type="h2" text={'FAQ'} />
          </div>
          <div className="flex items-center justify-center">
            <AccordionALX />
          </div>
        </div>

        <div className="flex justify-center">
          <Separator className="w-2/3" />
        </div>

        <div className="w-full">
          <div className="flex justify-center w-full mb-4">
            <TypographyPattern type="h2" text={'Socials'} />
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center break-words">
              <a
                href="https://www.hackerrank.com/profile/alxinc"
                className="group rounded-lg border  border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-4 lg:mb-0"
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
                className="group rounded-lg  border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
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
    </div>
  );
}
