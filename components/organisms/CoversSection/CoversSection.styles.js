import styled from 'styled-components';

const StyledWrapper = styled.section`
  .background {
    padding: 100px 0;

    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.lightGrey};

    .container {
      display: grid;
      grid-template-columns: repeat(3, 280px);
      grid-column-gap: 50px;
      grid-row-gap: 75px;

      @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 280px);
        grid-column-gap: 30px;
        grid-row-gap: 50px;
      }

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 280px);
      }

      .all-books-link {
        grid-column: 1 / 4;

        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 2px solid ${({ theme, brandColor }) => theme.color[brandColor]};
        border-radius: ${({ theme }) => theme.borderRadius};

        font-size: ${({ theme }) => theme.fontSize.S};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;

        @media (max-width: 1024px) {
          grid-column: 1 / 3;
        }

        @media (max-width: 768px) {
          grid-column: 1 / 2;
          height: 45px;
        }
      }
    }
  }
`;

export default StyledWrapper;
