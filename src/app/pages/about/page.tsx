'use client';

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
import { Suspense, useEffect, useState } from 'react';
import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { CardExperiencePattern } from '@/components/patterns/card-experience-pattern';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  // TODO bater no github e pegar dados

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

  const [githubData, setGithubData] = useState([]);
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // const GITHUB_DATA = fetch("https://api.github.com/users/upALX")

  console.log(githubData);

  const PUBLIC_REPOS =
    (githubData?.public_repos || 0) + (githubData?.total_private_repos || 0);
  console.log(PUBLIC_REPOS);

  // TODO pegar os dados public_repos e total_private_repos

  const PHRASER = [
    {
      text: 'Total',
    },
    {
      text: 'of',
    },
    {
      text: 'projects',
    },
    {
      text: `${PUBLIC_REPOS}`,
      className: 'text-blue-500 dark:text-blue-500',
    },
  ];

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
          <TypographyPattern type="h2" text={'Numbers'} />
        </div>
        <div className="flex w-full items-center justify-center gap-4">
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
