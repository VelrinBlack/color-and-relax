import styled from 'styled-components';

const StyledWrapper = styled.footer`
  margin-top: 200px;

  @media (max-width: 768px) {
    margin-top: 150px;
  }

  .container {
    padding: 15px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.color.lightGrey};

    font-size: ${({ theme }) => theme.fontSize.XS};
    line-height: 1.4;
    color: ${({ theme }) => theme.color.white};
  }
`;

export default StyledWrapper;
