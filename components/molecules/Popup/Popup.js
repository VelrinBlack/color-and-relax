import Image from 'next/image';
import StyledWrapper from './Popup.styles';
import check from 'assets/images/check.svg';

const Popup = () => (
  <StyledWrapper>
    <Image src={check} alt="check" />
    <p>Message sent successfully</p>
  </StyledWrapper>
);

export default Popup;
