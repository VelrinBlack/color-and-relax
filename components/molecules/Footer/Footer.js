import StyledWrapper from './Footer.styles';
import Shadow from 'components/atoms/Shadow/Shadow';

const Footer = () => (
  <StyledWrapper>
    <Shadow />

    <div className="container">
      <p>© Michał Pocięgiel 2021-2022</p>
      <p>Created by Bartosz Wleciał</p>
    </div>
  </StyledWrapper>
);

export default Footer;
