import { BeutifyLinkPropType } from '@/components/types/beutify-link-types';
import Link from 'next/link';
import { TypographyPattern } from './typography-pattern';
import { TbError404 } from 'react-icons/tb';
import { IconEnum, IconMap } from '../../../constants';

export default function BeutifyLinkPattern(props: BeutifyLinkPropType) {
  const linkComponents = props.linkInformationsList.map(
    ({ link, title, icon, description }, index) => {
      const IconComponent = IconMap[icon as IconEnum] || TbError404;

      return (
        <Link
          href={link}
          key={index}
          target="_blank"
          className="flex flex-col items-center text-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <div className="flex items-center justify-center">
            <TypographyPattern type="h2" text={title} />
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <IconComponent className="w-6 h-6" />
            </span>
          </div>
          <div className="max-w-[150px]">
            <TypographyPattern type="muted" text={description} />
          </div>
        </Link>
      );
    }
  );

  return <>{linkComponents}</>;
}
