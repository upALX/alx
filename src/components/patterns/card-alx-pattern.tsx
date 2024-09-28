import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ResponsiveContainer } from 'recharts';
import { CardALXProps } from '../types/card-alx-types';
import { mergeStyle } from '@/lib/utils';

export function CardALX(props: CardALXProps) {
  let viewCard;

  const size = props.size || 'lg';

  viewCard = (
    <Card className={mergeStyle('w-full break-words', props.className)}>
      {props.cardTitle && (
        <CardHeader
          className={
            size === 'sm'
              ? 'flex items-center justify-between space-y-0 pb-2'
              : undefined
          }
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col">
              {props.cardTitle && (
                <CardTitle 
                  className={
                    size === 'sm'
                      ? 'break-words text-sm font-medium'
                      : undefined
                  }
                >
                  {props.cardTitle}
                </CardTitle>
              )}

              <div className="flex items-center">
                {props.cardDescription && (
                  <CardDescription className="mt-1 text-left">
                    {props.cardDescription}
                  </CardDescription>
                )}

                {props.tooltip && (
                  <div className="ml-1">
                    <TooltipHoverCard text={String(props.tooltip)} />
                  </div>
                )}
              </div>
            </div>

            {props.icon && (
              <div className="ml-1">
                {props.size === 'sm' ? (
                  <div className="text-md rounded-lg border-opacity-30 px-3 py-1 font-semibold text-rock-blue shadow-md dark:text-rock-ice">
                    {props.icon}
                  </div>
                ) : (
                  <div className="rounded-lg border-opacity-30 bg-muted px-3 py-1 text-lg font-semibold text-rock-blue shadow-md dark:text-rock-ice">
                    {props.icon}
                  </div>
                )}
              </div>
            )}

            {props.actionButton && (
              <div className="ml-1">{props.actionButton}</div>
            )}
          </div>
        </CardHeader>
      )}

      <CardContent>
        <div>
          {props.cardValue && (
            <div className="w-full">
              <div
                className={mergeStyle(
                  'w-full break-words',
                  props.size === 'sm' ? 'text-2xl' : 'text-xl',
                  typeof props.cardValue === 'string' ||
                    typeof props.cardValue === 'number'
                    ? 'font-bold'
                    : ''
                )}
              >
                {props.cardValue}
              </div>
            </div>
          )}

          {size === 'sm' && props.contentDescription && (
            <p className="w-full break-words text-sm text-muted-foreground">
              {props.contentDescription}
            </p>
          )}

          {props.chart && (
            <div
              className={`mt-4 w-full ${props.size === 'sm' ? 'h-[60px]' : 'h-full'}`}
            >
              <ResponsiveContainer width="100%" height="100%">
                {props.chart}
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </CardContent>

      {size === 'lg' && props.contentDescription && (
        <CardFooter>{props.contentDescription}</CardFooter>
      )}
    </Card>
  );

  return <>{viewCard}</>;
}
