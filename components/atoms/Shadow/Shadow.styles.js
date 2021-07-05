import styled from 'styled-components';

const StyledWrapper = styled.div`
  .shadow {
    height: 15px;

    @media (max-width: 768px) {
      height: 10px;
    }

    &.shadow-1 {
      background-color: ${({ theme }) => theme.color.lightGreyShadow1};
    }

    &.shadow-2 {
      background-color: ${({ theme }) => theme.color.lightGreyShadow2};
    }
  }
`;

export default StyledWrapper;
