import { COLOR_AND_RELAX, SUNSHINE_ART } from 'utils/strings';

import colorAndRelax1 from 'assets/images/covers/color-and-relax-1.jpg';
import colorAndRelax2 from 'assets/images/covers/color-and-relax-2.jpg';
import colorAndRelax3 from 'assets/images/covers/color-and-relax-3.jpg';
import colorAndRelax4 from 'assets/images/covers/color-and-relax-4.jpg';
import colorAndRelax5 from 'assets/images/covers/color-and-relax-5.jpg';
import colorAndRelax6 from 'assets/images/covers/color-and-relax-6.jpg';
import sunshineArt1 from 'assets/images/covers/sunshine-art-1.jpg';
import sunshineArt2 from 'assets/images/covers/sunshine-art-2.jpg';
import sunshineArt3 from 'assets/images/covers/sunshine-art-3.jpg';
import sunshineArt4 from 'assets/images/covers/sunshine-art-4.jpg';
import sunshineArt5 from 'assets/images/covers/sunshine-art-5.jpg';
import sunshineArt6 from 'assets/images/covers/sunshine-art-6.jpg';

const brandsData = {
  colorAndRelax: {
    name: COLOR_AND_RELAX,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    color: 'purple',
    books: [
      {
        cover: {
          src: colorAndRelax1,
          alt: 'Mandala coloring book - animals',
        },
        link: '-',
      },
      {
        cover: {
          src: colorAndRelax2,
          alt: 'Mandala coloring book',
        },
        link: '-',
      },
      {
        cover: {
          src: colorAndRelax3,
          alt: 'Sea creatures - coloring book for kids',
        },
        link: '-',
      },
      {
        cover: {
          src: colorAndRelax4,
          alt: 'Geometric shapes and patterns coloring book',
        },
        link: '-',
      },
      {
        cover: {
          src: colorAndRelax5,
          alt: 'Mandalas coloring book for adults',
        },
        link: '-',
      },
      {
        cover: {
          src: colorAndRelax6,
          alt: 'Farting cats - coloring book',
        },
        link: '-',
      },
    ],
    allBooksURL:
      'https://www.amazon.com/Anette-Cecille/e/B08L9SZ8J7/ref=dp_byline_cont_pop_book_1',
  },
  sunshineArt: {
    name: SUNSHINE_ART,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    color: 'red',
    books: [
      {
        cover: {
          src: sunshineArt1,
          alt: 'Calligraphy set for beginners',
        },
        link: '-',
      },
      {
        cover: {
          src: sunshineArt2,
          alt: 'Kanji practice notebook',
        },
        link: '-',
      },
      {
        cover: {
          src: sunshineArt3,
          alt: 'Cursive handwriting workbook',
        },
        link: '-',
      },
      {
        cover: {
          src: sunshineArt4,
          alt: 'Multiplication workbook - one digit',
        },
        link: '-',
      },
      {
        cover: {
          src: sunshineArt5,
          alt: 'Sketch book',
        },
        link: '-',
      },
      {
        cover: {
          src: sunshineArt6,
          alt: 'Blank comic book',
        },
        link: '-',
      },
    ],
    allBooksURL:
      'https://www.amazon.com/Sunshine-Art/e/B095L1TMV4/ref=dp_byline_cont_pop_book_1',
  },
};

export default brandsData;
