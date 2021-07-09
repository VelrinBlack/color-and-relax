import styled from 'styled-components';
import { COLOR_AND_RELAX } from 'utils/strings';

const StyledWrapper = styled.section`
  position: relative;
  min-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    position: absolute;
    top: 0;
    left: 0;

    height: 5px;
    width: 100%;

    background-color: ${({ theme, brandColor }) => theme.color[brandColor]};

    @media (max-width: 768px) {
      height: 4px;
    }
  }

  .container {
    width: 800px;
    margin: 30px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
      width: 580px;
    }

    @media (max-width: 768px) {
      width: 300px;
    }

    img {
      width: ${({ brandName }) =>
        brandName === COLOR_AND_RELAX ? '150px' : '300px'};

      @media (max-width: 1024px) {
        width: ${({ brandName }) =>
          brandName === COLOR_AND_RELAX ? '130px' : '250px'};
      }
      @media (max-width: 768px) {
        width: ${({ brandName }) =>
          brandName === COLOR_AND_RELAX ? '80px' : '180px'};
      }
    }

    .heading {
      margin-top: 90px;

      font-size: ${({ theme }) => theme.fontSize.XL};
      text-align: center;
      color: ${({ theme }) => theme.color.white};

      @media (max-width: 1024px) {
        font-size: ${({ theme }) => theme.fontSize.L};
      }

      @media (max-width: 768px) {
        margin-top: 40px;
        font-size: ${({ theme }) => theme.fontSize.M};
      }

      .colored {
        color: ${({ theme, brandColor }) => theme.color[brandColor]};
      }
    }

    .description {
      margin-top: 50px;

      font-size: ${({ theme }) => theme.fontSize.S};
      text-align: center;
      color: ${({ theme }) => theme.color.white};

      @media (max-width: 768px) {
        margin-top: 20px;
        font-size: ${({ theme }) => theme.fontSize.XS};
      }
    }
  }
`;

export default StyledWrapper;
