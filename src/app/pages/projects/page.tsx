'use client';

import CarouselPattern from '@/components/patterns/carousel-pattern';

export default function ProjectsPage() {
  const items = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam incidunt iure facilis enim velit perferendis, corporis soluta sunt aperiam quibusdam laborum. Laborum aperiam temporibus voluptate quis velit facilis blanditiis!',
      mainImagePath: '/assets/weather-app.png',
      githubPath: 'https://github.com/alexandre-bouchard/weather-app',
      videoPath: 'https://www.youtube.com/watch?v=l9eZ3g_V72k',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam incidunt iure facilis enim velit perferendis, corporis soluta sunt aperiam quibusdam laborum. Laborum aperiam temporibus voluptate quis velit facilis blanditiis!',
      mainImagePath: '/assets/weather-app.png',
      githubPath: 'https://github.com/alexandre-bouchard/weather-app',
      videoPath: 'https://www.youtube.com/watch?v=l9eZ3g_V72k',
    },
  ];

  return (
    <div className="grid place-items-center  min-h-screen w-full overflow-hidden">
      <CarouselPattern items={items} />
    </div>
  );
}
