import { PropsImagePattern } from '@/components/types/image-pattern-types';
import Image from 'next/image';
import { TypographyPattern } from './typography-pattern';
import { mergeStyle } from '../../lib/utils';

export function ImagePatternALX(props: PropsImagePattern) {
  const imageSourceApplication = props.imageURL;
  return (
    <div className={`image-container ${props.rounded ? 'rounded-lg' : ''}`}>
      <Image
        src={props.imageURL ? props.imageURL : '/image-fallback.svg'}
        alt={props.imageDescription}
        width={500}
        height={100}
        style={{ objectFit: 'cover' }}
        className={`${props.rounded ? 'rounded-lg' : ''} object-cover dark:brightness-[0.7] dark:grayscale ${mergeStyle(
          props.className
        )}`}
        priority
      />
      {!props.imageURL && (
        <div className="flex text-center items-end">
          <TypographyPattern type="muted" text={'Imagem não informada'} />
        </div>
      )}
    </div>
  );
}
