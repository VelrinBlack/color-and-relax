import { useContext } from 'react';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './CoversSection.styles';
import CoverCard from 'components/molecules/CoverCard/CoverCard';

const CoversSection = () => {
  const brandData = useContext(BrandContext);

  return (
    <StyledWrapper>
      <div className="background-shadow background-shadow-1"></div>
      <div className="background-shadow background-shadow-2"></div>

      <div className="background">
        <div className="covers-container">
          {brandData.books.map((book, id) => (
            <CoverCard cover={book.cover} link={book.link} key={id} />
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

export default CoversSection;
