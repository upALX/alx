import { TypographyTypes } from '@/components/types/typography-pattern-types';

export function TypographyPattern({ type, text }: TypographyTypes) {
  const content =
    typeof text === 'string' || typeof text === 'number' ? text : text;

  let viewTypography;
  switch (type) {
    case 'h1':
      viewTypography = (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {content}
        </h1>
      );
      break;
    case 'h2':
      viewTypography = (
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {content}
        </h2>
      );
      break;
    case 'h3':
      viewTypography = (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
          {content}
        </h3>
      );
      break;
    case 'h4':
      viewTypography = (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {content}
        </h4>
      );
      break;
    case 'p':
      viewTypography = (
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm sm:text-base md:text-md lg:text-lg">
        {content}
        </p>

      );
      break;
    case 'cite':
      viewTypography = (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {content}
        </blockquote>
      );
      break;
    case 'strong':
      viewTypography = (
        <div className="text-lg dark:text-muted font-semibold">{content}</div>
      );
      break;
    case 'code':
      viewTypography = (
        <small className="text-sm font-medium leading-none">{content}</small>
      );
      break;
    case 'muted':
      viewTypography = (
        <p className="text-sm text-muted-foreground">{content}</p>
      );
      break;
    default:
      viewTypography = <span>{content}</span>;
  }

  return <>{viewTypography}</>;
}
