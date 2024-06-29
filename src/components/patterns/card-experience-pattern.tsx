import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BriefcaseBusiness } from 'lucide-react';
import { Button } from '../ui/button';
import { PropsCardExperiencePattern } from '@/components/types/card-experience-pattern-types';

export function CardExperiencePattern(props: PropsCardExperiencePattern) {
  return (
    <Card className="w-2/3 relative z-10">
      <CardHeader className="grid grid-cols-2">
        <div>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </div>
        <div className="flex justify-end gap-4">
          <span>
            <Badge>{props.badge_description}</Badge>
          </span>
          <span>
            <BriefcaseBusiness />
          </span>
        </div>
      </CardHeader>
      <CardContent>{props.text_content}</CardContent>
      <CardFooter>
        <Button variant={'link'}>See more</Button>
      </CardFooter>
    </Card>
  );
}
