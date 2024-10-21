import React from 'react';
import { FaGithub, FaHackerrank } from 'react-icons/fa'; // Importando os ícones que você deseja usar
import { TbBrandNotion } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

export enum WEBSITE_ROUTES {
  HOME_PAGE = '/',
  ABOUT_PAGE = '/sobre',
  PROJECTS_PAGE = '/projetos',
}

export enum SOCIAL_LINKS {
  LINKEDIN = 'https://www.linkedin.com/in/alxinc',
  HACKER_RANK = 'https://www.hackerrank.com/alxinc',
  GITHUB = 'https://github.com/upalx',
}

export enum EXTERNAL_DATA_LINKS {
  GITHUB_STATS = 'https://github-stats-readme-langs.vercel.app/api/top-langs/?username=upalx&layout=compact&show_icons=true&theme=gotham&border_color=4584b6&title_color=4584b6&text_color=ffde57&bg_color=000000&hide=php,jupyter%20notebook&langs_count=7',
}

export enum IconEnum {
  github = 'github',
  hacker_rank = 'hacker_rank',
  notion = 'notion',
  linkedin = 'linkedin',
}

export const IconMap: Record<IconEnum, React.ElementType> = {
  [IconEnum.github]: FaGithub,
  [IconEnum.hacker_rank]: FaHackerrank,
  [IconEnum.notion]: TbBrandNotion,
  [IconEnum.linkedin]: SlSocialLinkedin,
};
