'use client';

import { HeroHighlightPattern } from '@/components/patterns/text-color-pattern';
import { Button } from '@/components/ui/button';
import { BsRocketTakeoff } from 'react-icons/bs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <main className="text-center">
        <Image
          alt="Image of stars in the universe"
          src="/watch-stars-always.svg"
          width={500}
          height={250}
          priority
        />
        <h1 className="text-4xl font-bold mb-2 mt-8">
          404 - Houston, we are on the stars!{' '}
        </h1>
        <div className="mb-4">
          <HeroHighlightPattern colorizeText="Please, try come back to the earth clicking below." />
        </div>

        <Button
          variant={'outline'}
          onClick={() => {
            router.push('/');
          }}
          className="p-4 overflow-hidden"
        >
          <div className="flex justify-center items-center">
            <BsRocketTakeoff className="animate-bounce" />
          </div>
        </Button>
      </main>
    </div>
  );
}
