import { TypographyTypes } from '@/components/types/typography-pattern-types';

export function TypographyPattern(props: TypographyTypes) {
  let viewTypography;
  switch (props.type) {
    case 'h1':
      viewTypography = (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {props.text}
        </h1>
      );
      break;
    case 'h2':
      viewTypography = (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {props.text}
        </h2>
      );
      break;
    case 'h3':
      viewTypography = (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-primary">
          {props.text}
        </h3>
      );
      break;
    case 'h4':
      viewTypography = (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {props.text}
        </h4>
      );
      break;
    case 'p':
      viewTypography = (
        <p className="leading-7 [&:not(:first-child)]:mt-6">{props.text}</p>
      );
      break;
    case 'cite':
      viewTypography = (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          {props.text}
        </blockquote>
      );
      break;
    case 'strong':
      viewTypography = (
        <div className="text-lg dark:text-muted font-semibold">
          {props.text}
        </div>
      );
      break;
    case 'code':
      viewTypography = (
        <small className="text-sm font-medium leading-none">{props.text}</small>
      );
      break;
    case 'muted':
      viewTypography = (
        <p className="text-sm text-muted-foreground">{props.text}</p>
      );
      break;
  }
  return <> {viewTypography} </>;
}
