import styled from "styled-components";

export const StyledLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .login-container {
    width: 400px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fbfbfb;
    box-shadow: 0px 2px 4px 0px rgba(192, 192, 192, 0.1),
      0px 2px 3px 0px rgba(167, 167, 167, 0.15);

      .login-text{
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 10px;
      }

      .label{
        font-weight: 600;
      }
  }
`;
