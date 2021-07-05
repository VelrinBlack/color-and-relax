import { useContext } from 'react';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './CoversSection.styles';
import CoverCard from 'components/molecules/CoverCard/CoverCard';
import Shadow from 'components/atoms/Shadow/Shadow';

const CoversSection = () => {
  const brandData = useContext(BrandContext);

  return (
    <StyledWrapper>
      <Shadow />

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
