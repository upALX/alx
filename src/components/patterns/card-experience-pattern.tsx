import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaBusinessTime } from 'react-icons/fa';
import { LiaGraduationCapSolid } from 'react-icons/lia';
import { Button } from '../ui/button';
import { PropsCardExperiencePattern } from '@/components/types/card-experience-pattern-types';
import Link from 'next/link';

export function CardExperiencePattern(props: PropsCardExperiencePattern) {
  return (
    <Card className="min-w-[300px] max-w-[500px] w-full sm:w-full md:w-[700px] relative transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-slate-900 text-slate-900 bg-slate-100 dark:bg-slate-950 dark:hover:border-blue-400 dark:text-gray-300 hover:z-50">
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
              <LiaGraduationCapSolid />
            ) : (
              <FaBusinessTime />
            )}
          </span>
        </div>
      </CardHeader>
      <CardContent>{props.text_content}</CardContent>
      <CardFooter>
        <Button variant={'link'}>
          {' '}
          <Link href={props.see_more_link}> See more </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
