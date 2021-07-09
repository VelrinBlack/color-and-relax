import { useContext, useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import validator from 'validator';
import BrandContext from 'utils/BrandContext';
import StyledWrapper from './Form.styles';
import submitIcon from 'assets/images/submit-icon.svg';

const Form = () => {
  const brandData = useContext(BrandContext);

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 1024px)',
  });

  const [email, setEmail] = useState('');
  const [bookTitle, setBookTitle] = useState('');
  const [error, setError] = useState('');

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

      // request
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
    </StyledWrapper>
  );
};

export default Form;
