import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function AccordionALX() {
  return (
    <Accordion type="single" collapsible className="w-2/3">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How much programming time do I have?
        </AccordionTrigger>
        <AccordionContent>
          I have more than 7 years of programming, including college and
          postgraduate years.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How long do I work?</AccordionTrigger>
        <AccordionContent>
          I have more than two years working as a Full Stack Engineer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What stacks am I familiar with?</AccordionTrigger>
        <AccordionContent>
          Python with Django, Flask and Falcon. Java with Spring and Spring
          Boot. Typescript with NodeJS, NestJS, ReactJS and NextJS.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
