'use client';
import { useState, useRef } from 'react';
import { snoop_information } from '@/app/mapper';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/modal';
import { Badge } from '@/components/ui/badge';
import {
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carroussel';
import Autoplay from 'embla-carousel-autoplay';

type LinkItem = {
  label: string;
  url: string;
};

type CardDetail = {
  slug: string;
  title: string;
  period: string;
  type: string;
  links: {
    linkedin: string;
    company: string;
  };
  highlights: string[];
  tech_stack: string[];
  images: string[];
  contributions?: LinkItem[];
  projects?: LinkItem[];
};

export function AnimatedModal({ slug }: { slug?: string }) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const detail = snoop_information.card_details.find(
    (d: CardDetail) => d.slug === slug
  );
  if (!detail) return null;

  const items = detail.type === 'work' ? detail.contributions : detail.projects;

  return (
    <Modal>
      <ModalTrigger className="text-primary underline-offset-4 hover:underline">
        See more
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <div className="flex flex-col gap-6">
            <div className="text-center">
              <h4 className="text-lg md:text-2xl font-bold text-neutral-600 dark:text-neutral-100">
                {detail.title}
              </h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {detail.period}
              </p>
            </div>

            <LinksSection links={detail.links} />

            {detail.images.length > 0 ? (
              <ImagesGrid images={detail.images} />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/image_fallback_two.svg"
                  alt=""
                  className="h-24 w-24 md:h-32 md:w-32 object-contain opacity-40"
                />
                <p className="text-sm text-neutral-400 dark:text-neutral-500">
                  No images to display.
                </p>
              </div>
            )}

            <div>
              <h5 className="text-sm font-semibold text-neutral-600 dark:text-neutral-100 mb-3 text-center">
                {detail.type === 'work' ? 'Contributions' : 'Projects'}
              </h5>
              {items && items.length > 0 ? (
                <Carousel
                  opts={{ loop: true, align: 'center' }}
                  plugins={[plugin.current]}
                  onMouseEnter={() => plugin.current.stop()}
                  onMouseLeave={() => plugin.current.play()}
                >
                  <CarouselContent>
                    {items.map((item, i) => (
                      <CarouselItem key={i} className="basis-4/5 md:basis-3/5">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 p-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-sm"
                        >
                          <FaGithub className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-300" />
                          <span className="truncate font-medium text-blue-600 dark:text-blue-400">
                            {item.label}
                          </span>
                          <FaExternalLinkAlt className="h-3 w-3 shrink-0 text-neutral-400" />
                        </a>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              ) : (
                <p className="text-center text-sm text-neutral-400 dark:text-neutral-500">
                  No related{' '}
                  {detail.type === 'work' ? 'contributions' : 'projects'} to
                  display.
                </p>
              )}
            </div>

            {detail.highlights.length > 0 && (
              <div>
                <h5 className="text-sm font-semibold text-neutral-600 dark:text-neutral-100 mb-2">
                  Highlights
                </h5>
                <ul className="list-disc list-inside space-y-1">
                  {detail.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-sm text-neutral-600 dark:text-neutral-300"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {detail.tech_stack.length > 0 && (
              <div>
                <h5 className="text-sm font-semibold text-neutral-600 dark:text-neutral-100 mb-2">
                  Tech Stack
                </h5>
                <div className="flex flex-wrap gap-2">
                  {detail.tech_stack.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

function LinksSection({ links }: { links: CardDetail['links'] }) {
  return (
    <div className="flex justify-center gap-6">
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FaLinkedin className="h-4 w-4" />
        LinkedIn
        <FaExternalLinkAlt className="h-3 w-3" />
      </a>
      <a
        href={links.company}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        <FaGlobe className="h-4 w-4" />
        Website
        <FaExternalLinkAlt className="h-3 w-3" />
      </a>
    </div>
  );
}

function ImagesGrid({ images }: { images: string[] }) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-2">
      {images.map((src, idx) => {
        const isExpanded = expandedIdx === idx;
        return (
          <div
            key={idx}
            onClick={() => toggleExpand(idx)}
            className={`
              rounded-lg overflow-hidden shrink-0 border border-neutral-200
              dark:border-neutral-700 cursor-pointer transition-all duration-300
              hover:scale-110 hover:z-10
              ${isExpanded ? 'scale-110 z-10' : ''}
            `}
          >
            <img
              src={src}
              alt=""
              className={`
                object-cover transition-all duration-300
                ${isExpanded ? 'h-40 w-40 md:h-48 md:w-48' : 'h-20 w-20 md:h-28 md:w-28'}
              `}
            />
          </div>
        );
      })}
    </div>
  );
}
