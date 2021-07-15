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
      '"Color and Relax" and "Sunshine Art" are a private labels where we focus on creating practical books for children and adults. We put a lot of heart and teaching knowledge into creating books and make every effort to ensure that our products meet your expectations.',
    color: 'purple',
    books: [
      {
        cover: {
          src: colorAndRelax1,
          alt: 'Mandala coloring book - animals',
        },
        link: 'https://www.amazon.com/dp/B093R5TGNB',
      },
      {
        cover: {
          src: colorAndRelax2,
          alt: 'Mandala coloring book',
        },
        link: 'https://www.amazon.com/dp/B093B6JB8R',
      },
      {
        cover: {
          src: colorAndRelax3,
          alt: 'Sea creatures - coloring book for kids',
        },
        link: 'https://www.amazon.com/dp/B08QWH39R5',
      },
      {
        cover: {
          src: colorAndRelax4,
          alt: 'Geometric shapes and patterns coloring book',
        },
        link: 'https://www.amazon.com/dp/B08Q6Y93HQ',
      },
      {
        cover: {
          src: colorAndRelax5,
          alt: 'Mandalas coloring book for adults',
        },
        link: 'https://www.amazon.com/dp/B08R6MTBKW',
      },
      {
        cover: {
          src: colorAndRelax6,
          alt: 'Farting cats - coloring book',
        },
        link: 'https://www.amazon.com/dp/B08W7JTWBY',
      },
    ],
    allBooksURL:
      'https://www.amazon.com/Anette-Cecille/e/B08L9SZ8J7/ref=dp_byline_cont_pop_book_1',
  },
  sunshineArt: {
    name: SUNSHINE_ART,
    description:
      'Discover our wide range of books, thanks to which children can learn and play both at home and while traveling. Our offer also includes books that will help adults relax and take their minds away from everyday life. We hope that you will find something for yourself or your loved ones.',
    color: 'red',
    books: [
      {
        cover: {
          src: sunshineArt1,
          alt: 'Calligraphy set for beginners',
        },
        link: 'https://www.amazon.com/dp/B094T5Z2L4',
      },
      {
        cover: {
          src: sunshineArt2,
          alt: 'Kanji practice notebook',
        },
        link: 'https://www.amazon.com/dp/B096LS2PDM',
      },
      {
        cover: {
          src: sunshineArt3,
          alt: 'Cursive handwriting workbook',
        },
        link: 'https://www.amazon.com/dp/B0988NV3WY',
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
        link: 'https://www.amazon.com/dp/B0959JGLDC',
      },
      {
        cover: {
          src: sunshineArt6,
          alt: 'Blank comic book',
        },
        link: 'https://www.amazon.com/dp/B096XSW6YP',
      },
    ],
    allBooksURL:
      'https://www.amazon.com/Sunshine-Art/e/B095L1TMV4/ref=dp_byline_cont_pop_book_1',
  },
};

export default brandsData;
