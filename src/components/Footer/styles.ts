import { css } from 'lit';

export const styles = css`
  a:link,
  a:visited,
  a:hover,
  a:active {
    margin-left: 5px;
    color: var(--grey);
    text-decoration: underline;
  }
  footer {
    padding: 3em 1em;
    background-color: var(--maroon);
    border-top: thick solid var(--teal);
    color: var(--grey);
    font-size: 0.5em;
  }

  .center {
    justify-content: center;
  }
  .right {
    text-align: right;
  }
`;
