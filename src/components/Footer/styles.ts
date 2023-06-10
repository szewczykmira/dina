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
    position: fixed;
    bottom: 0px;
    height: 3rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3em 1em;
    background-color: var(--maroon);
    border-top: thick solid var(--teal);
    color: var(--grey);
    font-size: 0.5em;
  }
`;
