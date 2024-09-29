export type ItemsType = {
  title: string;
  text: string;
  mainImagePath: string;
  videoPath: string;
  githubPath: string;
};

export type CarouselPatternProps = {
  items: ItemsType[];
};
