import { useContext } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './Form.styles';
import submitIcon from 'assets/images/submit-icon.svg';

const Form = () => {
  const brandData = useContext(BrandContext);

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  return (
    <StyledWrapper brandColor={brandData.color}>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Book title" />

      <button type="submit" className="submit-button">
        {isSmallScreen ? (
          <span>JOIN</span>
        ) : (
          <Image src={submitIcon} alt="submit" />
        )}
      </button>
    </StyledWrapper>
  );
};

export default Form;
