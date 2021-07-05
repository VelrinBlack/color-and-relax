import styled from 'styled-components';

const StyledWrapper = styled.section`
  .background {
    padding: 100px 0;

    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.color.lightGrey};

    .covers-container {
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
    }
  }
`;

export default StyledWrapper;
