import styled from 'styled-components';

const StyledWrapper = styled.form`
  width: 760px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    width: auto;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    * {
      height: 50px;
      border-radius: ${({ theme }) => theme.borderRadius};

      @media (max-width: 1024px) {
        margin-top: 10px;
      }

      @media (max-width: 768px) {
        margin-top: 7.5px;
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
  }

  .error {
    margin-top: 15px;

    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.XS};
    color: ${({ theme }) => theme.color.red};
  }
`;

export default StyledWrapper;
