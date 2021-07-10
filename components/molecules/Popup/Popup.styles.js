import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 320px;
  height: 250px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 0 200vw ${({ theme }) => theme.color.lightGreyShadow1};
  background-color: ${({ theme }) => theme.color.darkGrey};
  border-radius: ${({ theme }) => theme.borderRadius};

  div {
    width: 100px;
  }

  p {
    margin: 25px 0 15px 0;

    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.S};
    color: ${({ theme }) => theme.color.white};
  }
`;

export default StyledWrapper;
