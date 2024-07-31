'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '@/components/ui/highliting-text';
import { PropsHeroHighlightPattern } from '@/components/types/text-color-pattern-types';

export function HeroHighlightPattern(props: PropsHeroHighlightPattern) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4 scroll-m-20 text-xl font-semibold tracking-tight text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {props.naturalText ? props.naturalText : ''}
        <Highlight className="text-white">{props.colorizeText}</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
