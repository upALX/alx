import { AccordionALX } from '@/components/patterns/accourdion-pattern';
import { BriefcaseBusiness } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ALX inc - Sobre',
  description: 'About page',
};

export default function AboutPage() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <div className="flex justify-center">
          <Card className="w-2/3">
            <CardHeader className="grid grid-cols-2">
              <div className="">
                <CardTitle>ROCK - O investimento imobiliário</CardTitle>
                <CardDescription>xxx</CardDescription>
              </div>
              <div className="flex justify-end gap-4">
                <span>
                  <Badge>2 anos</Badge>
                </span>
                <span>
                  <BriefcaseBusiness />
                </span>
              </div>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              earum dolor molestias? Alias ipsa quidem perferendis facere. Neque
              eveniet asperiores consequuntur necessitatibus autem tenetur at
              mollitia amet, molestiae ratione possimus!
            </CardContent>
            <CardFooter>
              <Button variant={'link'}>See more</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex justify-center">
          <AccordionALX />
        </div>
      </div>
    </>
  );
}
