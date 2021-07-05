import StyledWrapper from './Footer.styles';
import Shadow from 'components/atoms/Shadow/Shadow';

const Footer = () => (
  <StyledWrapper>
    <Shadow />

    <div className="container">
      <p>© Michał Pocięgiel 2021</p>
      <p>Created by Bart Wlecial</p>
    </div>
  </StyledWrapper>
);

export default Footer;
