import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQALX() {
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
        <AccordionTrigger>
          What stacks (Language & Framework) am I familiar with?
        </AccordionTrigger>
        <AccordionContent>
          Python with Django, FastAPI, Flask and Falcon. Java with Spring and
          Spring Boot. Typescript with NodeJS, NestJS, NextJS, Fastify, Express.
          PHP with Laravel and Lumen.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>What do I like besides technology?</AccordionTrigger>
        <AccordionContent>
          I&apos;m Alexandre. Fan of MMORPG style games (Lineage, New World) and
          MOBA (League of Legends), as well as consoles (Playstation).
          Furthermore, I really like areas such as economics (macro) and physics
          (cosmology and astrophysics). I like and practice sports such as
          bodybuilding, running and football. I really like podcasts and
          I&apos;m a music lover, especially genres like Rock, Trap, MPB,
          Electro House, which is why my headphones are my second home.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
