'use client';

import { FAQALX } from '@/components/patterns/faq-pattern';
import { cards_timeline } from '@/app/mapper/cards-timeline.json';
import { useEffect, useState } from 'react';
import { TypographyPattern } from '@/components/patterns/typography-pattern';
import { CardExperiencePattern } from '@/components/patterns/card-experience-pattern';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { SOCIAL_LINKS } from '../../../../constants';
import { BsRocketTakeoff } from 'react-icons/bs';
import { GithubDataTypes } from '@/app/types/about-types';
import { ImagePattern } from '@/components/patterns/image-pattern';
import { LiaHackerrank } from 'react-icons/lia';
import { DiGithubAlt } from 'react-icons/di';
import { links_information } from '@/app/mapper';
import BeutifyLinkPattern from '@/components/patterns/beautify-link-pattern';
import BeautifyLinkPattern from '@/components/patterns/beautify-link-pattern';

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

  const PUBLIC_REPOS =
    (githubData?.public_repos || 0) + (githubData?.total_private_repos || 0);
  console.log(PUBLIC_REPOS);

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <BsRocketTakeoff className="animate-bounce" />
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
              <ImagePattern
                src="https://github-readme-streak-stats-only-contribs.vercel.app?user=upalx&theme=python-dark&border_radius=4&date_format=M%20j%5B%2C%20Y%5D&card_width=550&hide_current_streak=true&hide_longest_streak=true"
                alt="Stats numbers"
                width={200}
                height={200}
                needsCompleteLoad={true}
              />
              <ImagePattern
                src="https://github-readme-activity-graph.vercel.app/graph?username=upalx&radius=8&bg_color=000000&color=7495f2&area_color=e0da22&line=e0da22&point=false&area=true&custom_title=ALX - Activity  flow (D-30)&hide_border=false&grid=false&days=30"
                alt="Activity graph"
                width={200}
                height={200}
                needsCompleteLoad={true}
              />
            </div>
            <div className="flex justify-center w-full mb-4">
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
            <FAQALX />
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Separator className="w-2/3" />
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center w-full mb-4">
            <TypographyPattern type="h2" text={'Socials'} />
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center lg:flex-row lg:justify-center gap-4 break-words">
            <BeautifyLinkPattern
              linkInformationList={links_information.links_information}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
