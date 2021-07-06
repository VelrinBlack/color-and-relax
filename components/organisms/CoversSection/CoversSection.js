import { useContext } from 'react';
import Link from 'next/link';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './CoversSection.styles';
import CoverCard from 'components/molecules/CoverCard/CoverCard';
import Shadow from 'components/atoms/Shadow/Shadow';

const CoversSection = () => {
  const brandData = useContext(BrandContext);

  return (
    <StyledWrapper brandColor={brandData.color}>
      <Shadow />

      <div className="background">
        <div className="container">
          {brandData.books.map((book, id) => (
            <CoverCard cover={book.cover} link={book.link} key={id} />
          ))}

          <Link href={brandData.allBooksURL}>
            <a className="all-books-link">All books</a>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default CoversSection;
