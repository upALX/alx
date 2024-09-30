import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { Button } from '../ui/button';
import { PropsCardExperiencePattern } from '@/components/types/card-experience-pattern-types';

export function CardExperiencePattern(props: PropsCardExperiencePattern) {
  return (
    <Card className="sm:w-full md:w-10/12 relative z-10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-slate-900 text-slate-900 bg-slate-100 dark:bg-slate-950 dark:hover:border-blue-400 dark:text-gray-300">
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
            {props.type_experience === 'study' ? (
              <GraduationCap />
            ) : (
              <BriefcaseBusiness />
            )}
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
