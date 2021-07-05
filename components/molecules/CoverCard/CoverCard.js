import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './CoverCard.styles';

const CoverCard = ({ cover, link }) => {
  const brandData = useContext(BrandContext);

  return (
    <StyledWrapper brandColor={brandData.color}>
      <Image src={cover.src} alt={cover.alt} />
      <Link href={link}>
        <a>View</a>
      </Link>
    </StyledWrapper>
  );
};

CoverCard.propTypes = {
  cover: PropTypes.shape({ src: PropTypes.object, alt: PropTypes.string }),
  link: PropTypes.string,
};

export default CoverCard;
