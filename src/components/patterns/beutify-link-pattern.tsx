import { BeutifyLinkPropType } from '@/components/types/beutify-link-types';
import Link from 'next/link';
import { TypographyPattern } from './typography-pattern';

export default function BeutifyLinkPattern(props: BeutifyLinkPropType) {
  return (
    <>
      {props.linkInformationsList.map(
        ({ link, title, icon, description }, index) => (
          <Link
            href={link}
            key={index}
            target="_blank"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2>
              {title}

              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                {icon}{' '}
              </span>
            </h2>
            <TypographyPattern type="muted" text={description} />
          </Link>
        )
      )}
    </>
  );
}
