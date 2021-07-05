import { useContext } from 'react';
import Image from 'next/image';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './WelcomeSection.styles';
import Form from 'components/molecules/Form/Form';
import { COLOR_AND_RELAX } from 'utils/strings';
import colorAndRelaxLogo from 'assets/images/logos/color-and-relax.png';
import sunshineArtLogo from 'assets/images/logos/sunshine-art.png';

const WelcomeSection = () => {
  const brandData = useContext(BrandContext);

  const logo =
    brandData.name === COLOR_AND_RELAX ? colorAndRelaxLogo : sunshineArtLogo;

  return (
    <StyledWrapper brandName={brandData.name} brandColor={brandData.color}>
      <div className="container">
        <Image src={logo} alt={brandData.name} />

        {brandData.name === COLOR_AND_RELAX ? (
          <h1 className="heading">
            Welcome to
            <br />
            <span className="colored">Color</span> and{' '}
            <span className="colored">Relax</span>
          </h1>
        ) : (
          <h1 className="heading">
            Welcome to
            <br />
            <span className="colored">Sunshine Art</span>
          </h1>
        )}

        <p className="description">{brandData.description}</p>

        <Form />
      </div>
    </StyledWrapper>
  );
};

export default WelcomeSection;
