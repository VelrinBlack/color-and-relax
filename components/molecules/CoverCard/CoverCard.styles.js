import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 280px;
  height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 440px;
  }

  img {
    height: 375px;
    object-fit: cover;

    border-radius: ${({ theme }) => theme.borderRadius};
  }

  a {
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, brandColor }) => theme.color[brandColor]};
    border-radius: ${({ theme }) => theme.borderRadius};

    font-size: ${({ theme }) => theme.fontSize.S};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;

    @media (max-width: 768px) {
      height: 45px;
    }
  }
`;

export default StyledWrapper;
