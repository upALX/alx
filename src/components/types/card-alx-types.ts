export type CardALXProps = {
  cardTitle?: string;
  cardDescription?: JSX.Element | string | number;
  cardValue?: number | string | React.ReactNode;
  contentDescription?: string;
  size?: 'sm' | 'lg';
  icon?: JSX.Element | number | string;
  chart?: JSX.Element | null;
  tooltip?: string | number;
  actionButton?: JSX.Element;
  className?: string;
  fallback?: JSX.Element | null;
};
