import styled from 'styled-components';

const StyledWrapper = styled.form`
  width: 760px;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    height: 180px;
    width: auto;

    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    height: 155px;
    margin-top: 30px;
  }

  * {
    height: 50px;
    border-radius: ${({ theme }) => theme.borderRadius};

    @media (max-width: 768px) {
      height: 45px;
    }
  }

  input {
    width: 330px;
    padding: 0 15px;

    border: 2px solid ${({ theme, brandColor }) => theme.color[brandColor]};
    background-color: transparent;

    font-size: ${({ theme }) => theme.fontSize.XS};
    color: ${({ theme }) => theme.color.white};
    outline: none;

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.XS};
    }

    @media (max-width: 768px) {
      width: 300px;
    }
  }

  .submit-button {
    width: 70px;

    background-color: ${({ theme, brandColor }) => theme.color[brandColor]};
    border: none;

    cursor: pointer;

    @media (max-width: 1024px) {
      width: 90px;
    }

    img {
      width: 35px;
    }

    span {
      color: ${({ theme }) => theme.color.white};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme }) => theme.fontSize.XS};
    }
  }
`;

export default StyledWrapper;
