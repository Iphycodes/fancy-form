import styled, { css } from "styled-components";

const dataStyle = css`
  .data-list-container {
    ul {
      padding: 0 15px;
      li {
        margin: 10px 0;
      }
    }
  }
`;

export const DataListContainer = styled.div`
  ${dataStyle}
`;
