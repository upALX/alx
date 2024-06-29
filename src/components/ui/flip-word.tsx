'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { mergeStyle } from '@/lib/utils';

export const FlipWords = ({
  words,
  duration = 3000,
  className,
  type = 'words',
}: {
  words: string[];
  duration?: number;
  className?: string;
  type?: 'words' | 'phrases';
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  const renderLetters = (text: string) => {
    return text.split('').map((letter, index) => (
      <motion.span
        key={text + index}
        initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{
          delay: index * 0.08,
          duration: 0.4,
        }}
        className="inline-block"
      >
        {letter}
      </motion.span>
    ));
  };

  const renderWords = (text: string) => {
    return text.split(' ').map((word, index) => (
      <React.Fragment key={text + index}>
        {index > 0 && <span>&nbsp;</span>}
        {word.split('').map((letter, index) => (
          <motion.span
            key={word + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={mergeStyle(
          'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
          className
        )}
        key={currentWord}
      >
        {type === 'words'
          ? renderLetters(currentWord)
          : renderWords(currentWord)}
      </motion.div>
    </AnimatePresence>
  );
};
