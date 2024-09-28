'use client';

import { projects_information_list } from '@/app/mapper';
import CarouselPattern from '@/components/patterns/carousel-pattern';

export default function ProjectsPage() {
  return (
    <div className="grid place-items-center  min-h-screen w-full overflow-hidden">
      <CarouselPattern items={projects_information_list} />
    </div>
  );
}
