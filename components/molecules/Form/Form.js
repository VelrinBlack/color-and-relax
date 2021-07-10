import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import validator from 'validator';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './Form.styles';
import Popup from 'components/molecules/Popup/Popup';
import submitIcon from 'assets/images/submit-icon.svg';

const Form = () => {
  const brandData = useContext(BrandContext);

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const [email, setEmail] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [error, setError] = useState('');
  const [isPopupActive, setIsPopupActive] = useState(false);

  useEffect(() => {
    if (isPopupActive) {
      window.addEventListener('click', () => setIsPopupActive(false));

      setTimeout(() => {
        setIsPopupActive(false);
      }, 3000);
    }

    return () => {
      window.removeEventListener('click', () => setIsPopupActive(false));
    };
  }, [isPopupActive]);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleBookTitleChange = (e) => setBookTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setError('Please enter valid email address');
    }

    if (!email || !bookTitle) {
      setError('Please fill all the fields');
    }

    if (validator.isEmail(email) && email && bookTitle) {
      setError('');

      axios.post('/api/client', {
        email,
        bookTitle,
      });

      setEmail('');
      setBookTitle('');

      setIsPopupActive(true);
    }
  };

  return (
    <StyledWrapper brandColor={brandData.color} onSubmit={handleSubmit}>
      <div className="flex-container">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Book title"
          value={bookTitle}
          onChange={handleBookTitleChange}
        />

        <button type="submit" className="submit-button">
          {isSmallScreen ? (
            <span>JOIN</span>
          ) : (
            <Image src={submitIcon} alt="submit" />
          )}
        </button>
      </div>

      <p className="error">{error}</p>

      {isPopupActive && <Popup />}
    </StyledWrapper>
  );
};

export default Form;
