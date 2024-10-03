'use client';

import { projects_information_list } from '@/app/mapper';
import CarouselPattern from '@/components/patterns/carousel-pattern';

export default function ProjectsPage() {
  return (
    <div className="grid place-items-center min-h-screen w-full overflow-hidden">
      <div className="w-full max-w-full overflow-x-hidden box-border dark:hover:z-20 ">
        <CarouselPattern
          items={projects_information_list.projects_information_list}
        />
      </div>
    </div>
  );
}
