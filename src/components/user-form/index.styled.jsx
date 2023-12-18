import { styled } from "styled-components";

export const StyledUserFormContainer = styled.div`
  .user-form {
    .user-form-item {
      .ant-form-item-label {
        text-align: left !important;

        label::before {
          display: none !important;
        }
      }
    }
  }
`;
