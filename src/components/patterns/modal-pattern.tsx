'use client';
import { snoop_information } from '@/app/mapper';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/modal';
import { Badge } from '@/components/ui/badge';

type CardDetail = {
  slug: string;
  title: string;
  period: string;
  highlights: string[];
  tech_stack: string[];
  detailed_description: string;
  images: string[];
};

export function AnimatedModal({ slug }: { slug?: string }) {
  const detail = snoop_information.card_details.find(
    (d: CardDetail) => d.slug === slug
  );
  if (!detail) return null;

  return (
    <Modal>
      <ModalTrigger className="px-2 py-1 text-xs">Details</ModalTrigger>
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

            {detail.images.length > 0 && <ImagesGrid images={detail.images} />}

            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {detail.detailed_description}
            </p>

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

function ImagesGrid({ images }: { images: string[] }) {
  return (
    <div className="flex justify-center items-center flex-wrap gap-2">
      {images.map((src, idx) => (
        <div
          key={idx}
          className="rounded-lg overflow-hidden shrink-0 border border-neutral-200 dark:border-neutral-700"
        >
          <img
            src={src}
            alt=""
            className="h-20 w-20 md:h-28 md:w-28 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
