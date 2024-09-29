import { ReactNode } from 'react';

export type TypographyTypes = {
  type:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'muted'
    | 'small'
    | 'code'
    | 'cite'
    | 'strong';
  text: string | number | ReactNode;
};
